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
sr.reveal(".row2", { delay: 100});



const sections = document.querySelectorAll("section[id]");

function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute("id");

        if ((scrollY >= sectionTop && scrollY <= sectionTop + sectionHeight) || 
            (sectionId === "home" && scrollY < sectionTop + sectionHeight)) {
            document
                .querySelector(".nav-menu a[href*=" + sectionId + "]")
                .classList.add("active-link");
        } else {
            document
                .querySelector(".nav-menu a[href*=" + sectionId + "]")
                .classList.remove("active-link");
        }
    });
}

window.addEventListener("scroll", scrollActive);




// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });