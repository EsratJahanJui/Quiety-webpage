// for feature button
const tabAiBtn = document.getElementById("ai_btn");
const tabPowerBtn = document.getElementById("power_btn");

const tabTechBtn = document.getElementById("tech_btn");
const servicesButtons = document.querySelectorAll(".ft_btn");
const removeActiveClass = () => {
  servicesButtons.forEach((button) => {
    button.classList.remove("features_active");
  });
};

tabAiBtn.addEventListener("click", () => {
  let allOffer = document.querySelectorAll(".show_hide_feature");

  allOffer.forEach((offer) => {
    offer.style.display = "none";
  });
  const fullaiButton = document.getElementById("ai_button");
  fullaiButton.style.display = "flex";
});

tabPowerBtn.addEventListener("click", () => {
  removeActiveClass();

  let allOffer = document.querySelectorAll(".show_hide_feature");

  allOffer.forEach((offer) => {
    offer.style.display = "none";
  });
  const fullpowerButton = document.getElementById("power_button");
  fullpowerButton.style.display = "flex";

  tabPowerBtn.classList.add("features_active");
});

tabTechBtn.addEventListener("click", () => {
  let allOffer = document.querySelectorAll(".show_hide_feature");

  allOffer.forEach((offer) => {
    offer.style.display = "none";
  });
  const fullTechnology = document.getElementById("tech_button");
  fullTechnology.style.display = "flex";
});


// ===============NAV TOGGLE (small screens)
const navMenu = document.querySelector(".nav_list");
const navOpenBtn = document.querySelector(".nav__toggle-open");
const navCloseBtn = document.querySelector(".nav__toggle-close");

const openNavHandler = () => {
  navMenu.style.display = "flex";
  navOpenBtn.style.display = "none";
  navCloseBtn.style.display = "inline-block";
};

const closeNavHandler = () => {
  navMenu.style.display = "none";
  navCloseBtn.style.display = "none";
  navOpenBtn.style.display = "inline-block";
};
navOpenBtn.addEventListener("click", openNavHandler);

navCloseBtn.addEventListener("click", closeNavHandler);

// close nav menu on click of nav link on small screen
const navItems = navMenu.querySelectorAll("a");
if (window.innerWidth < 768) {
  navItems.forEach((item) => {
    item.addEventListener("click", closeNavHandler);
  });
}
