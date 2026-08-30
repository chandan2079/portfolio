// Smooth reveal animation
const elements = document.querySelectorAll(
    ".section, .card, .project-card, .journey-item, .contact-card"
);

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    {
        threshold: 0.12
    }
);

elements.forEach((element) => {
    element.classList.add("hidden");
    observer.observe(element);
});


// Current year in footer
const footerText = document.querySelector("footer p");

if (footerText) {
    footerText.innerHTML =
        `© ${new Date().getFullYear()} Chandan Kumar. Built with passion and curiosity.`;
}
