//Navbar show
let nav = document.querySelector(".navigation-wrap");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 10) {
    nav.classList.add("scroll-on");
  } else {
    nav.classList.remove("scroll-on");
  }
};

// Show/Hide FAQs answer
const faqs = document.querySelectorAll(".faq");
faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("open");

    //change icon
    const icon = faq.querySelector(".faq_icon i");
    if (icon.className === "fas fa-plus") {
      icon.className = "fas fa-minus";
    } else {
      icon.className = "fas fa-plus";
    }
  });
});

//Swiper Slider
var swiper = new Swiper(".mySwiper", {
  direction: "horizontal",
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 1000,
  },
});
