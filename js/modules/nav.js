// Met en evidence le lien de navigation de la section visible.
const sections = document.querySelectorAll(".section[id]");
const navLinks = document.querySelectorAll(".nav a[href^='#']");

function updateActiveLink() {
    let current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 120) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        const isActive = link.getAttribute("href") === `#${current}`;
        link.classList.toggle("active", isActive);

        if (isActive) {
            link.setAttribute("aria-current", "location");
        } else {
            link.removeAttribute("aria-current");
        }
    });
}

window.addEventListener("scroll", updateActiveLink, { passive: true });
updateActiveLink();
