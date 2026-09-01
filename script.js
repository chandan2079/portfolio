/* =========================================
   PORTFOLIO SCRIPT
   ========================================= */

document.addEventListener("DOMContentLoaded", function () {
    /* =========================================
       1. SMOOTH SCROLL NAVIGATION
       ========================================= */
    const navigationLinks = document.querySelectorAll('a[href^="#"]');
    navigationLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            const targetId = this.getAttribute("href");
            if (targetId && targetId !== "#" && document.querySelector(targetId)) {
                event.preventDefault();
                const target = document.querySelector(targetId);
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

    /* =========================================
       2. NAVBAR SCROLL EFFECT
       ========================================= */
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", function () {
        if (!navbar) return;
        if (window.scrollY > 40) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    /* =========================================
       3. SCROLL REVEAL ANIMATION
       ========================================= */
    const revealElements = document.querySelectorAll(
        ".section, .card, .project-card, .timeline-item, .journey-box, .about-card, .contact-card"
    );

    const revealObserver = new IntersectionObserver(
        function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.12,
            rootMargin: "0px 0px -40px 0px"
        }
    );

    revealElements.forEach(function (element) {
        element.style.opacity = "0";
        element.style.transform = "translateY(20px)";
        element.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
        revealObserver.observe(element);
    });

    /* =========================================
       4. AUTO-UPDATE FOOTER YEAR
       ========================================= */
    const footerText = document.querySelector("footer p");
    if (footerText) {
        const currentYear = new Date().getFullYear();
        footerText.innerHTML = `© ${currentYear} Chandan Kumar. Built with passion and curiosity.`;
    }

    /* =========================================
       5. DISABLE EMPTY PLACEHOLDER LINKS
       ========================================= */
    const emptyLinks = document.querySelectorAll('.card-links a[href="#"]');
    emptyLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault();
        });
    });
});
