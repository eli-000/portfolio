//transition
const transition = document.querySelector(".wrapper");

window.addEventListener("load", () => {
  transition.classList.add("ready");
});

document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", e => {
    const target = e.currentTarget.getAttribute("href");

    if (!target || target.startsWith("#")) return;

    e.preventDefault();
    transition.classList.remove("ready");

    setTimeout(() => {
      window.location.href = target;
    }, 500);
  });
});  

// Dark mode
document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const button = document.querySelector(".switch");
  const saved = localStorage.getItem("theme");

  if (saved === "dark") {
    body.classList.add("dark");
  }

  button.addEventListener("click", () => {
    const isDark = body.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
});



  // Scroll animation
  const elements = document.querySelectorAll(".anime");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  });

  elements.forEach((el) => observer.observe(el));
  

  //swiper
  const mySwiper = new Swiper('.swiper', {
    effect: 'fade',
	fadeEffect: {
    crossFade: true,
  },
  loop: true,
  speed: 3000, 
  autoplay: { 
    delay: 8000, 
    disableOnInteraction: false, 
    waitForTransition: false, 
  },
 
});


//pagetop
const pagetop = document.getElementById("pagetop");
pagetop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


