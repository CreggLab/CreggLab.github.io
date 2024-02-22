/*
  creates link next to each heading that links to that section.
*/

{
  const onLoad = () => {
    // for each heading
    const headings = document.querySelectorAll("h1[id], h2[id], h3[id], h4[id]");
    for (const heading of headings) {
      // create anchor link
      const link = document.createElement("a");
      link.classList.add("anchor"); // Keep only the "anchor" class, remove any icon-related classes
      link.href = "#" + heading.id;
      link.setAttribute("aria-label", "link to this section");
      heading.appendChild(link); // Use appendChild for better compatibility

      // if first heading in the section, move id to parent section
      if (heading.matches("section > :first-child")) {
        heading.parentElement.id = heading.id;
        heading.removeAttribute("id");
      }
    }
  };

  // scroll to target of url hash
  const scrollToTarget = () => {
    const id = window.location.hash.replace("#", "");
    const target = document.getElementById(id);
    if (!target) return;
    const offset = document.querySelector("header").clientHeight || 0;
    window.scrollTo({
      top: target.getBoundingClientRect().top + window.pageYOffset - offset,
      behavior: "smooth",
    });
  };

  // after page loads
  window.addEventListener("load", onLoad);
  window.addEventListener("load", scrollToTarget);
  window.addEventListener("hashchange", scrollToTarget);
}
