// Grab the nav menu link list
const navLinkList = document.querySelector(".nav-items-container");

// Build a useMatchMedia hook in normal JS
const mediaQuery = window.matchMedia(`(min-width: 600px)`);
let isAboveMobile = false;

const screenWidthSetter = (event) => {
  if (event.matches) {
    console.log("IS ABOVE MOBILE");
    navLinkList.style.display = "none";
    isAboveMobile = true;
  } else {
    console.log("IS MOBILE!!!");
    navLinkList.style.display = "block";
    isAboveMobile = false;
  }
};

mediaQuery.addListener(screenWidthSetter);
