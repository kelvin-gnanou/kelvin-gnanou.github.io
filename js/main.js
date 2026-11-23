import "./modules/nav.js";

/* Revele les sections lorsqu'elles entrent dans l'ecran. */
const sections = document.querySelectorAll(".section");

// Vérifier manuellement la position des éléments.
// window.addEventListener("scroll", () => {
// });

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    { threshold: 0.15,}
);

sections.forEach((section) => {
    section.classList.add("hidden");
    observer.observe(section);
});

/* Met a jour l'annee dans le pied de page. */
const footer = document.querySelector(".footer p");
if (footer) {
    const year = new Date().getFullYear();
    document.querySelector("#year").textContent =
    new Date().getFullYear();
}
