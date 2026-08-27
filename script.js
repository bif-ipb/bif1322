const menuButton = document.querySelector(".menu-button");
const sidebar = document.querySelector(".sidebar");
const search = document.querySelector("#navigation-search");
const navItems = [...document.querySelectorAll(".course-nav a, .course-nav summary")];
const noResults = document.querySelector("#no-results");
const programWebsiteLink = document.querySelector(".sidebar-footer a");

if (programWebsiteLink) {
  programWebsiteLink.href = "https://bioinformatika.ipb.ac.id/";
  programWebsiteLink.textContent = "Web Bioinformatika IPB University";
  programWebsiteLink.target = "_blank";
  programWebsiteLink.rel = "noopener";
}

const courseNav = document.querySelector(".course-nav");
const staffLink = courseNav.querySelector('a[href="tim.html"], a[href="staff.html"]');

if (staffLink) {
  staffLink.href = "staff.html";
  staffLink.textContent = "Staff";
  staffLink.dataset.search = "staff professor asisten pengajar kontak";
  courseNav.querySelector('a[href="index.html"]').insertAdjacentElement("afterend", staffLink);
}

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
