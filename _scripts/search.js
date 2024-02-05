/*
  Filters elements on page based on URL or search box.
  Syntax: term1 term2 "full phrase 1" "full phrase 2" "tag: tag 1"
  Match if: all terms AND at least one phrase AND at least one tag
*/
document.addEventListener('DOMContentLoaded', function() {
  // Elements to filter
  const elementSelector = "#all-publications .card, #all-publications .citation, #all-publications .post-excerpt";
  // Search box element
  const searchBox = document.querySelector('.search-input');
  // Results info box element
  const infoBoxSelector = ".search-info";

  // Normalize tag string for comparison
  const normalizeTag = (tag) => tag.trim().toLowerCase().replaceAll(/-|\s+/g, " ");

  // Get data attribute contents of element and children
  const getAttr = (element, attr) => [element, ...element.querySelectorAll(`[data-${attr}]`)].map(el => el.dataset[attr]).join(" ");

  // Determine if element should show up in results based on query
  const elementMatches = (element, { terms, phrases, tags }) => {
    const hasText = (string) => (element.innerText + getAttr(element, "tooltip") + getAttr(element, "search")).toLowerCase().includes(string);

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

  // Update search box, info box, and URL based on query
  const updateSearchBox = (query = "") => {
    searchBox.value = query;
  };

  const updateInfoBox = (query, x, n) => {
    const infoBox = document.querySelector(infoBoxSelector);
    if (query.trim()) {
      infoBox.innerHTML = `Showing ${x} of ${n} results`;
      infoBox.style.display = 'block';
    } else {
      infoBox.style.display = 'none';
    }
  };

  const updateUrl = (query = "") => {
    const params = new URLSearchParams(window.location.search);
    params.set('search', query);
    window.history.replaceState({}, '', `${window.location.pathname}?${params}`);
  };

  // Run search with query
  const runSearch = (query = "") => {
    const terms = query.toLowerCase().split(' ').filter(term => term);
    const [x, n] = filterElements({ terms, phrases: [], tags: [] });
    updateSearchBox(query);
    updateInfoBox(query, x, n);
  };

  // Debounce function to limit how often a function can fire
  const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };

  const debouncedRunSearch = debounce(runSearch, 300);

  // Event listeners
  searchBox.addEventListener('input', (event) => {
    debouncedRunSearch(event.target.value);
  });

  // Handle tag button clicks
  document.querySelectorAll('.search-tag').forEach(tag => {
    tag.addEventListener('click', function() {
      const searchTerm = `tag: "${this.dataset.searchTerm}"`;
      runSearch(searchTerm);
      updateUrl(searchTerm);
    });
  });
});
