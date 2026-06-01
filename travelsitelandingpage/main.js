const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-search-line");
});

navLinks.addEventListener("click", (e)=>{
     navLinks.classList.remove("open");
     menuBtnIcon.setAttribute("click", "ri-menu-search-line")
});

const headerImage = document.querySelector(".header_image")
headerImage.addEventListener("animationend", (e) => {
    setTimeout(() => {
        headerImage.classList.add("reveal");
    });
   },
   {once: true}
);

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".header_content h1",{
    ...scrollRevealOption,
    delay: 1500,
});

ScrollReveal().reveal(".header_content h2",{
    ...scrollRevealOption,
    delay: 2000,
});

ScrollReveal().reveal(".header_content p",{
    ...scrollRevealOption,
    delay: 2500,
});

ScrollReveal().reveal(".header_content div",{
    ...scrollRevealOption,
    delay: 3000,
});

ScrollReveal().reveal("header .nav_links", {
    delay: 3500,
});



