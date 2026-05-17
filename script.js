

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

// Lien actif dans la navbar selon la section visible
const navLinks = document.querySelectorAll(".nav a[href^='#']");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 120) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});

// Année automatique dans le footer
const footer = document.querySelector(".footer p");
if (footer) {
    const year = new Date().getFullYear();
    footer.textContent = footer.textContent.replace("2026", year);
}
