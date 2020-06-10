const navLogo = document.querySelector(".mountain-logo");
const mobileNavBurger = document.querySelector(".mobile-nav-burger");

const handleMountainLogoClick = (event) => {
  console.log("LOGO CLICKED!");
};

navLogo.addEventListener("click", handleMountainLogoClick);

// Grab the nav menu link list
const navLinkList = document.querySelector(".nav-items-container");

// Build a useMatchMedia hook in normal JS
const mediaQuery = window.matchMedia(`(min-width: 600px)`);

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
