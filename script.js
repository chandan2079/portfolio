/* =========================
   PORTFOLIO INTRO CONTROL
========================= */

document.body.classList.add("intro-active");

const intro = document.getElementById("intro");


/* Intro ke approximately 7 seconds baad
   normal portfolio scrolling enable */

setTimeout(() => {

    document.body.classList.remove("intro-active");

}, 7000);


/* Intro complete hone ke baad
   element ko completely remove kar do */

setTimeout(() => {

    if (intro) {
        intro.remove();
    }

}, 7600);


/* =========================
   NAVBAR ACTIVE EFFECT
========================= */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");


window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });


    navLinks.forEach(link => {

        link.style.color = "";

        if (link.getAttribute("href") === "#" + current) {
            link.style.color = "#7b88ff";
        }

    });

});
