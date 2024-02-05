/*
  filters elements on page based on url or search box.
  syntax: term1 term2 "full phrase 1" "full phrase 2" "tag: tag 1"
  match if: all terms AND at least one phrase AND at least one tag
*/
{
  // Elements to filter
  const elementSelector = "#all-publications .card, #all-publications .citation, #all-publications .post-excerpt";
  // Search box element
  const searchBoxSelector = ".search-box";
  // Results info box element
  const infoBoxSelector = ".search-info";
  // Tags element
  const tagSelector = ".tag";

const splitQuery = (query) => {
    const parts = query.match(/"[^"]*"|\S+/g) || [];
    const terms = [];
    const phrases = [];
    const tags = [];

    for (let part of parts) {
        if (part.startsWith('"') && part.includes('tag:')) {
            // Remove surrounding quotes and "tag: " prefix
            const tag = part.replace(/"tag:\s*/, '').replace(/"$/, '');
            tags.push(normalizeTag(tag));
        } else if (part.startsWith('"')) {
            // Remove surrounding quotes for phrases
            phrases.push(part.replaceAll('"', '').toLowerCase());
        } else {
            terms.push(part.toLowerCase());
        }
    }

    console.log('Split query:', {terms, phrases, tags});
    return { terms, phrases, tags };
};


  // Normalize tag string for comparison
  window.normalizeTag = (tag) => tag.trim().toLowerCase().replaceAll(/-|\s+/g, " ");

  // Get data attribute contents of element and children
  const getAttr = (element, attr) => {
    return [element, ...element.querySelectorAll(`[data-${attr}]`)]
      .flatMap((element) => element.dataset[attr] ? element.dataset[attr].split(', ') : [])
      .map((tag) => normalizeTag(tag));
  };

  // Determine if element should show up in results based on query
  const elementMatches = (element, { terms, phrases, tags }) => {
    // Extract text and tags for the element
    const elementText = element.innerText.toLowerCase() + " " + getAttr(element, "tags").join(" ").toLowerCase();

    console.log(`Element text and tags for matching: ${elementText}`); // Debugging line

    const hasText = (string) => {
      const result = elementText.includes(string.toLowerCase());
      console.log(`Checking term '${string}': ${result}`); // Debugging line
      return result;
    };

    const hasTag = (tag) => {
      const result = getAttr(element, "tags").includes(tag.toLowerCase());
      console.log(`Checking tag '${tag}': ${result}`); // Debugging line
      return result;
    };

    return (
      (terms.every(hasText) || !terms.length) &&
      (phrases.some(hasText) || !phrases.length) &&
      (tags.length === 0 || tags.some(hasTag))
    );
  };

  // Loop through elements, hide/show based on query, and return results info
  const filterElements = (parts) => {
    let elements = document.querySelectorAll(elementSelector);

    // Results info
    let x = 0;
    let n = elements.length;

    // Filter elements
    for (const element of elements) {
      if (elementMatches(element, parts)) {
        element.style.display = "";
        x++;
      } else {
        element.style.display = "none";
      }
    }

    console.log(`Filtered elements: ${x} shown out of ${n}`); // Debugging line

    // Loop through each year section after filtering
    document.querySelectorAll('.year-section').forEach(section => {
      // Initially hide the year section
      section.style.display = 'none';

      // Check if the section contains any visible citations
      const hasVisibleCitations = [...section.querySelectorAll('.citation')].some(citation => {
        return window.getComputedStyle(citation).display !== 'none';
      });

      // If there are visible citations, show the section
      if (hasVisibleCitations) {
        section.style.display = 'block';
      }
    });

    return [x, n, parts.tags];
  };

  // highlight search terms
  const highlightMatches = async ({ terms, phrases }) => {
    // make sure Mark library available
    if (typeof Mark === "undefined") return;

    // reset
    new Mark(document.body).unmark();

    // limit number of highlights to avoid slowdown
    let counter = 0;
    const filter = () => counter++ < 100;

    // highlight terms and phrases
    new Mark(elementSelector)
      .mark(terms, { separateWordSearch: true, filter })
      .mark(phrases, { separateWordSearch: false, filter });
  };

  // update search box based on query
  const updateSearchBox = (query = "") => {
    const boxes = document.querySelectorAll(searchBoxSelector);

    for (const box of boxes) {
      const input = box.querySelector("input");
      const button = box.querySelector("button");
      const icon = box.querySelector("button i");
      input.value = query;
      icon.className = input.value.length
        ? "icon fa-solid fa-xmark"
        : "icon fa-solid fa-magnifying-glass";
      button.disabled = input.value.length ? false : true;
    }
  };

  // update info box based on query and results
  const updateInfoBox = (query, x, n) => {
    const boxes = document.querySelectorAll(infoBoxSelector);

    if (query.trim()) {
      // show all info boxes
      boxes.forEach((info) => (info.style.display = ""));

      // info template
      let info = "";
      info += `Showing ${x.toLocaleString()} of ${n.toLocaleString()} results<br>`;
      info += "<a href='./'>Clear search</a>";

      // set info HTML string
      boxes.forEach((el) => (el.innerHTML = info));
    }
    // if nothing searched
    else {
      // hide all info boxes
      boxes.forEach((info) => (info.style.display = "none"));
    }
  };

  // update tags based on query
  const updateTags = (query) => {
    const { tags } = splitQuery(query);
    document.querySelectorAll(tagSelector).forEach((tag) => {
      // set active if tag is in query
      if (tags.includes(normalizeTag(tag.innerText)))
        tag.setAttribute("data-active", "");
      else tag.removeAttribute("data-active");
    });
  };

  // run search with query
  const runSearch = (query = "") => {
    const parts = splitQuery(query);
    const [x, n] = filterElements(parts);
    updateSearchBox(query);
    updateInfoBox(query, x, n);
    updateTags(query);
    highlightMatches(parts);
  };

  // update url based on query
  const updateUrl = (query = "") => {
    const url = new URL(window.location);
    let params = new URLSearchParams(url.search);
    params.set("search", query);
    url.search = params.toString();
    window.history.replaceState(null, null, url);
  };

  // search based on url param
  const searchFromUrl = () => {
    const query =
      new URLSearchParams(window.location.search).get("search") || "";
    runSearch(query);
  };

  // return func that runs after delay
  const debounce = (callback, delay = 250) => {
    let timeout;
    return (...args) => {
      window.clearTimeout(timeout);
      timeout = window.setTimeout(() => callback(...args), delay);
    };
  };

  // when user types into search box
  const debouncedRunSearch = debounce(runSearch, 1000);
  window.onSearchInput = (target) => {
    debouncedRunSearch(target.value);
    updateUrl(target.value);
  };

  // when user clears search box with button
  window.onSearchClear = () => {
    runSearch();
    updateUrl();
  };

  // after page loads
  window.addEventListener("load", searchFromUrl);
  // after tags load
  window.addEventListener("tagsfetched", searchFromUrl);
}

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.search-tag').forEach(tag => {
    tag.addEventListener('click', function() {
      const searchTerm = `tag: "${this.dataset.searchTerm}"`; // Format search term
      const searchInput = document.querySelector('.search-input');
      
      // Set the search input value and trigger the search
      if (searchInput) {
        searchInput.value = searchTerm;
        window.onSearchInput(searchInput); // Trigger the search
      }
    });
  });
});

function performTagSearch(tag) {
    const searchTerm = `tag: "${tag}"`; // Format the search term for tag searches
    console.log(`Performing tag search for: ${searchTerm}`); // Debugging line
    const searchInput = document.querySelector('.search-input');

    if (searchInput) {
        searchInput.value = searchTerm;
        console.log(`Search input set to: ${searchInput.value}`); // Debugging line
        window.onSearchInput(searchInput.value); // Pass the search term directly
    }
}
