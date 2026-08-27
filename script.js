const menuButton = document.querySelector(".menu-button");
const sidebar = document.querySelector(".sidebar");
const search = document.querySelector("#navigation-search");
const navItems = [...document.querySelectorAll(".course-nav a, .course-nav summary")];
const noResults = document.querySelector("#no-results");

menuButton.addEventListener("click", () => {
  const isOpen = sidebar.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

search.addEventListener("input", () => {
  const query = search.value.trim().toLowerCase();
  let matches = 0;
  navItems.forEach((item) => {
    const matched = !query || item.dataset.search.includes(query);
    item.hidden = !matched;
    if (matched && item.tagName === "A") matches += 1;
  });
  noResults.hidden = matches > 0;
});
