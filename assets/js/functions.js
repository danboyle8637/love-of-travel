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
