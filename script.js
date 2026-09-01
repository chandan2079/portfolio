/* =========================================
   PORTFOLIO SCRIPT
   ========================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =========================================
       INTRO ANIMATION
       ========================================= */

    const introScreen = document.getElementById("intro-screen");

    if (introScreen) {

        // Keep intro visible for around 7 seconds
        setTimeout(function () {

            introScreen.classList.add("intro-finished");

        }, 7000);

        // Remove intro from the page after animation
        setTimeout(function () {

            introScreen.style.display = "none";

        }, 8000);

    }


    /* =========================================
       SMOOTH SCROLL
       ========================================= */

    const navigationLinks = document.querySelectorAll(
        'a[href^="#"]'
    );

    navigationLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (
                targetId &&
                targetId !== "#" &&
                document.querySelector(targetId)
            ) {

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
       NAVBAR SCROLL EFFECT
       ========================================= */

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", function () {

        if (!navbar) return;

        if (window.scrollY > 50) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    });


    /* =========================================
       SCROLL REVEAL ANIMATION
       ========================================= */

    const revealElements = document.querySelectorAll(
        ".section, .card, .project-card, .timeline-item, .journey-card, .resume-box, .contact-card"
    );

    const revealObserver = new IntersectionObserver(

        function (entries, observer) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.12
        }

    );


    revealElements.forEach(function (element) {

        element.classList.add("reveal");

        revealObserver.observe(element);

    });


    /* =========================================
       CURRENT YEAR IN FOOTER
       ========================================= */

    const footerText = document.querySelector("footer p");

    if (footerText) {

        const currentYear = new Date().getFullYear();

        footerText.innerHTML =
            "© " +
            currentYear +
            " Chandan Kumar. Built with passion and curiosity.";

    }


    /* =========================================
       DISABLE EMPTY PROJECT LINKS
       ========================================= */

    const emptyLinks = document.querySelectorAll(
        '.project-links a[href="#"]'
    );

    emptyLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            event.preventDefault();

        });

    });

});
