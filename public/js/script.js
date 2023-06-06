/***************** typing animation*******************************/
/******************************Typing animation*************************/
const typed = new Typed(".typing",
    {
        strings: ["", "Web Developer", "DSA Lover", "Competitve Programmer", "Problem Solver"],
        typeSpeed: 50,
        backSpeed: 40,
        backDelay: 1000,
        loop: true,
    });

/******************** side bar scroll changer **********************/
// const sections = document.querySelectorAll("section[id]"); --> select karo te section ne jeni id hoi
// const sections = document.querySelectorAll("section");

// // Add an event listener listening for scroll
// window.addEventListener("scroll", navHighlighter);

// function navHighlighter() {

//     // Get current scroll position
//     let scrollY = window.pageYOffset;

//     // Now we loop through sections to get height, top and ID values for each
//     sections.forEach(current => {
//         const sectionHeight = current.offsetHeight;
//         const sectionTop = current.offsetTop - 50;
//         sectionId = current.getAttribute("id");

//         /*
//         - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
//         - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
//         */
//         if (scrollY > sectionTop&&scrollY <= sectionTop + sectionHeight) 
//         {
//             document.querySelector(".nav a[href*=" + sectionId + "]").classList.add("active");
//         } 
//         else 
//         {
//             document.querySelector(".nav a[href*=" + sectionId + "]").classList.remove("active");
//         }
//     });
// }

/*************************** Aside ****************************************/
const nav = document.querySelector(".nav");
navlist = nav.querySelectorAll("li");
totalNavlist = navlist.length;
allSection = document.querySelectorAll(".section");
totalSection = allSection.length;
for (let i = 0; i < totalNavlist; i++) {
    const a = navlist[i].querySelector("a");
    a.addEventListener("click", function () {
        removeBackSection();
        for (let j = 0; j < totalNavlist; j++) {
            if (navlist[j].querySelector("a").classList.contains("active")) {
                addBackSection(j);
                // allSection[j].classList.add("back-section");
            }
            navlist[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active");
        showSection(this);
        if (window.innerWidth < 1200) {
            asideSectionTogglerBtn();
        }
    })
}
function removeBackSection(params) {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("back-section");
    }
}
function addBackSection(num) {
    allSection[num].classList.remove("back-section");

}
function showSection(element) {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("Active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("Active");
}
function updateNav(element) {
    for (let i = 0; i < array.totalNavlist; i++) {
        navlist[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#");
        if (target === navlist[i].querySelector("a").getAttribute("href").split("#")[1]) {
            navlist[i].querySelector("a").classList.add("active");
        }
    }
}
document.querySelector(".hire-me").addEventListener("click", function () {
    const sectionIndex = this.getAttribute("data-section-index");

    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
})
const navTogglerBtn = document.querySelector(".nav-toggler");
aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
    asideSectionTogglerBtn();
})
function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.toggle("open");
    }
}