/* =========================================
   PORTFOLIO INTERACTION & SEQUENCE SCRIPT
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Intro Animation Timing Handler
    const introScreen = document.getElementById("intro-screen");
    
    if (introScreen) {
        // Animation sequence takes ~7.5s, then start fade out
        setTimeout(() => {
            introScreen.classList.add("intro-finished");
        }, 7600);

        // Completely hide from DOM to restore full interactivity
        setTimeout(() => {
            introScreen.style.display = "none";
        }, 8600);
    }

    // 2. Navbar Background Blur & Scroll Listener
    const navbar = document.querySelector(".navbar");
    
    window.addEventListener("scroll", () => {
        if (!navbar) return;
        if (window.scrollY > 40) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // 3. Smooth Scroll Navigation for In-Page Anchor Links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            const targetId = this.getAttribute("href");
            
            if (targetId && targetId !== "#") {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            }
        });
    });

    // 4. Interactive Intersection Observer for Cards Reveal
    const observerOptions = {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px"
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedCards = document.querySelectorAll(".card, .timeline-item, .about-card, .journey-box");
    
    animatedCards.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(20px)";
        el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
        sectionObserver.observe(el);
    });

    // 5. Dynamic Footer Year Auto-Update
    const footerYearElement = document.querySelector("footer p");
    if (footerYearElement) {
        const currentYear = new Date().getFullYear();
        footerYearElement.innerHTML = `© ${currentYear} Chandan Kumar. Built with passion and curiosity.`;
    }
});
