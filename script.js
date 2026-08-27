const materials = [
  {
    week: "PERTEMUAN 01",
    label: "DOKUMEN PROYEK",
    title: "ToR, Tender, dan Proposal Proyek",
    description: "Memahami kebutuhan proyek dan menyusun proposal solusi bioinformatika.",
  },
  {
    week: "PERTEMUAN 02",
    label: "PERENCANAAN",
    title: "Software Development Plan",
    description: "Menyusun rencana pengembangan agar pelaksanaan proyek dapat terukur.",
  },
  {
    week: "BERIKUTNYA",
    label: "SEGERA HADIR",
    title: "Materi praktikum berikutnya",
    description: "Materi baru akan ditambahkan sesuai perkembangan praktikum.",
  },
  {
    week: "PROYEK",
    label: "KERJA KELOMPOK",
    title: "Ruang pengembangan proyek",
    description: "Pantau tahapan, artefak, dan keluaran proyek kelompok Anda.",
  },
];

document.querySelector("#materials-grid").innerHTML = materials
  .map(
    ({ week, label, title, description }) => `
      <article class="material-card">
        <div class="material-meta"><span>${week}</span><span>${label}</span></div>
        <h3>${title}</h3>
        <p>${description}</p>
      </article>`,
  )
  .join("");

const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".site-nav");

menuButton.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});
