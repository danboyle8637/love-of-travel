// Image blur up to make lazy loading look better
const blurUpImage = (imgElement) => {
  imgElement.src = imgElement.dataset.src;
  imgElement.style.filter = "blur(0px)";

  if (imgElement.dataset.srcset) {
    imgElement.srcset = imgElement.dataset.srcset;
    imgElement.src = imgElement.srcset;
    imgElement.style.filter = "blur(0px)";
  }
};

// Intersection Observer
const options = {
  root: null,
  rootMargin: "0px 0px 0px 0px",
  threshold: 0.2,
};

const observerCallBack = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // RUN BLURUP
      blurUpImage(entry.target);
      // UNOBSERVER THE ELEMENT
      imageObserver.unobserve(entry.target);
    } else {
      // DO NOTHING
    }
  });
};

const imageObserver = new IntersectionObserver(observerCallBack, options);
