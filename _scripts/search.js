/*
  Filters elements on page based on URL or search box.
  Syntax: term1 term2 "full phrase 1" "full phrase 2" "tag: tag 1"
  Match if: all terms AND at least one phrase AND at least one tag
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

  // Split search query into terms, phrases, and tags
  const splitQuery = (query) => {
    const parts = query.match(/"[^"]*"|\S+/g) || [];
    const terms = [];
    const phrases = [];
    const tags = [];

    for (let part of parts) {
      if (part.startsWith('"')) {
        part = part.replaceAll('"', "").trim();
        if (part.startsWith("tag:")) tags.push(normalizeTag(part.replace(/tag:\s*/, "")));
        else phrases.push(part.toLowerCase());
      } else terms.push(part.toLowerCase());
    }

    return { terms, phrases, tags };
  };

  // Normalize tag string for comparison
  window.normalizeTag = (tag) => tag.trim().toLowerCase().replaceAll(/-|\s+/g, " ");

  // Get data attribute contents of element and children
  const getAttr = (element, attr) => [element, ...element.querySelectorAll(`[data-${attr}]`)].map(el => el.dataset[attr]).join(" ");

  // Determine if element should show up in results based on query
  const elementMatches = (element, { terms, phrases, tags }) => {
    const hasText = (string) => (element.innerText + getAttr(element, "tooltip") + getAttr(element, "search")).toLowerCase().includes(string);

    // New logic to check for tag matches using data-tags attribute
    const elementTags = element.dataset.tags ? element.dataset.tags.split(',') : [];
    const hasTag = (tag) => elementTags.includes(normalizeTag(tag));

    return (terms.every(hasText) || !terms.length) && (phrases.some(hasText) || !phrases.length) && (tags.some(hasTag) || !tags.length);
  };

  // Loop through elements, hide/show based on query, and return results info
  const filterElements = (parts) => {
    let elements = document.querySelectorAll(elementSelector);
    let x = 0; // Counter for matched elements

    elements.forEach(element => {
      if (elementMatches(element, parts)) {
        element.style.display = "";
        x++;
      } else {
        element.style.display = "none";
      }
    });

    // Additional logic to show/hide year sections
    document.querySelectorAll('.year-section').forEach(section => {
      const hasVisibleCitations = [...section.querySelectorAll('.citation')].some(citation => window.getComputedStyle(citation).display !== 'none');
      section.style.display = hasVisibleCitations ? 'block' : 'none';
    });

    return [x, elements.length, parts.tags];
  };

  // Highlight search terms (requires Mark.js or similar library)
  const highlightMatches = async ({ terms, phrases }) => {
    // Ensure Mark library is available
    if (typeof Mark === "undefined") return;

    new Mark(document.body).unmark(); // Clear previous highlights
    const markInstance = new Mark(elementSelector);
    markInstance.mark(terms, { separateWordSearch: true });
    markInstance.mark(phrases, { separateWordSearch: false });
  };

  // Update search box, info box, and URL based on query
  const updateSearchBox = (query = "") => {/* Implementation remains the same */};
  const updateInfoBox = (query, x, n) => {/* Implementation remains the same */};
  const updateTags = (query) => {/* Implementation remains the same */};
  const updateUrl = (query = "") => {/* Implementation remains the same */};

  // Run search with query
  const runSearch = (query = "") => {
    const parts = splitQuery(query);
    const [x, n, tags] = filterElements(parts);
    updateSearchBox(query);
    updateInfoBox(query, x, n);
    updateTags(query);
    highlightMatches(parts);
  };

  // Search based on URL param and user input
  const searchFromUrl = () => {/* Implementation remains the same */};
  const debounce = (callback, delay = 250) => {/* Implementation remains the same */};
  const debouncedRunSearch = debounce(runSearch, 1000);
  window.onSearchInput = (target) => {/* Implementation remains the same */};
  window.onSearchClear = () => {/* Implementation remains the same */};

  // After page loads
  window.addEventListener('load', searchFromUrl);

  // Handle tag button clicks
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.search-tag').forEach(tag => {
      tag.addEventListener('click', function() {
        const searchTerm = `tag: "${this.dataset.searchTerm}"`;
        const searchInput = document.querySelector('.search-input');
        if (searchInput) {
          searchInput.value = searchTerm;
          window.onSearchInput(searchInput);
        }
      });
    });
  });
}
