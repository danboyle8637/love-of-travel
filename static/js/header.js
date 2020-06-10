const menuBar = document.querySelector(".nav-container");
const navLogo = document.querySelector(".mountain-logo");
const mobileNavBurger = document.querySelector(".mobile-nav-burger");
const mobileMenuDrawer = document.querySelector(".mobile-menu-drawer");
const mobileMenuCloseIcon = document.querySelector(".close-icon");

const handleMountainLogoClick = (event) => {
  console.log("LOGO CLICKED!");
};

const handleMenuBurgerClick = () => {
  // Toggle the menu
  console.log("Toggle Menu!");
  mobileMenuDrawer.style.display = "block";
  menuBar.style.display = "none";
};

const handleMenuCloseIcon = () => {
  mobileMenuDrawer.style.display = "none";
  menuBar.style.display = "flex";
};

navLogo.addEventListener("click", handleMountainLogoClick);

mobileNavBurger.addEventListener("click", handleMenuBurgerClick);
mobileMenuCloseIcon.addEventListener("click", handleMenuCloseIcon);

// Grab the nav menu link list
const navLinkList = document.querySelector(".nav-items-container");

// Build a useMatchMedia hook in normal JS
const mediaQuery = window.matchMedia(`(min-width: 600px)`);

mobileMenuDrawer.style.display = "none";

if (mediaQuery.matches) {
  navLinkList.style.display = "block";
  mobileNavBurger.style.display = "none";
} else {
  navLinkList.style.display = "none";
  mobileNavBurger.style.display = "block";
}

const screenWidthSetter = (event) => {
  if (event.matches) {
    navLinkList.style.display = "block";
    mobileNavBurger.style.display = "none";
  } else {
    navLinkList.style.display = "none";
    mobileNavBurger.style.display = "block";
  }
};

mediaQuery.addListener(screenWidthSetter);
