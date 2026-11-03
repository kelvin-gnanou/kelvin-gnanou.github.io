import "./modules/nav.js";

// Smooth reveal des sections au scroll
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
        });
    },
    {
        threshold: 0.15,
    }
);

sections.forEach((section) => {
    section.classList.add("hidden");
    observer.observe(section);
});

// Année automatique dans le footer
const footer = document.querySelector(".footer p");
if (footer) {
    const year = new Date().getFullYear();
    footer.textContent = footer.textContent.replace("2026", year);
}
