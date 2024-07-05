function myMenuFunction(){
    var menuBth = document.getElementById("myNavMenu");

    if (menuBth.className === "nav-menu"){
        menuBth.className += " responsive";
    }else{
        menuBth.className = "nav-menu";
    }
}

const body = document.querySelector("body"),
    toggleSwitch = document.getElementById("toggle-switch");

toggleSwitch.addEventListener("click", ()=>{
    body.classList.toggle("dark");
});

var typingEffect = new Typed(".typedText", {
    strings: ["Developer", "Designer"],

    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1000,
})

const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 800,
    reset: true,
})

sr.reveal(".featured-name", { delay: 100 });
sr.reveal(".text-info", { delay: 200});
sr.reveal(".text-btn", { delay: 200});
sr.reveal(".social_icons", { delay: 200});
sr.reveal(".featured-image", { delay: 320});

sr.reveal(".Project-content", { interval: 320});
sr.reveal(".timeline-item", { interval: 320});
sr.reveal(".skill", { delay: 100});
sr.reveal(".skill-box", { delay: 100});
sr.reveal(".top-header", {});
sr.reveal(".about-info", { delay: 100});
sr.reveal(".contact-info", { delay: 100});

const srLeft = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: 1000,
    reset: true,
})



const srRight = ScrollReveal({
    origin: "right",
    distance: "80px",
    duration: 1000,
    reset: true,
})



const sections = document.querySelectorAll(".section[id]");

function scrollActive(){
    const scrollY = window.scrollY;

    sections.forEach((current) => {

        const sectionHeight = current.offsetHeight,

            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document
            .querySelector(".nav-menu a[href*=" + sectionId + "]")
            .classList.add("active-link");
        }else{
            document
            .querySelector(".nav-menu a[href*=" + sectionId + "]")
            .classList.remove("active-link");
        }
    });
}

window.addEventListener("scroll", scrollActive);