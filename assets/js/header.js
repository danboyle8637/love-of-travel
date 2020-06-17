const menuBar = document.querySelector(".nav-container");
const mobileNavBurger = document.querySelector(".mobile-nav-burger");
const mobileNavCloseIcon = document.querySelector(".close-icon");
const mobileMenuDrawer = document.querySelector(".mobile-menu-drawer");
const mobileMenuCloseIcon = document.querySelector(".close-icon");
const navLinkList = document.querySelector(".nav-items-container");
const navItems = document.querySelectorAll(".drawer-menu-item");

// ******************** Animation Definitions
const menuDrawerCloseOptions = {
  duration: 0.3,
  x: "100%",
};

const menuDrawerOpenOptions = {
  duration: 0.3,
  x: 0,
};

const menuDrawerItemOptions = {
  duration: 0.4,
  stagger: 0.3,
  opacity: 1,
  x: 0,
  delay: 0.1,
  ease: Back.easeOut,
};

const menuCloseIconOptions = {
  rotation: -360,
  delay: 0.2,
};

const navItemArray = Array.from(navItems);

// ******************** Closes menu drawer before navigation
navItemArray.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const location = link.getAttribute("href");

    gsap.to(mobileMenuDrawer, menuDrawerCloseOptions);

    setTimeout(() => {
      window.location = location;
    }, 300);
  });
});

gsap.set(mobileMenuDrawer, { x: "100%" });
gsap.set(navItemArray, { opacity: 0, x: "100%" });

// ******************** Open the menu drawer
const handleMenuBurgerClick = () => {
  mobileMenuDrawer.style.visibility = "visible";
  gsap.to(mobileMenuDrawer, menuDrawerOpenOptions);
  gsap.to(navItemArray, menuDrawerItemOptions);
  gsap.to(mobileNavCloseIcon, menuCloseIconOptions);
};

// ******************** Close the menu drawer
const handleMenuCloseIcon = () => {
  gsap.to(mobileMenuDrawer, menuDrawerCloseOptions);
};

mobileNavBurger.addEventListener("click", handleMenuBurgerClick);
mobileMenuCloseIcon.addEventListener("click", handleMenuCloseIcon);

// ******************** Build a useMatchMedia hook in normal JS
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
