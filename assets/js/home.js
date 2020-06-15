const tagIcons = document.querySelectorAll(".post-card-tag-container");
const cardImages = document.querySelectorAll(".blog-feature-image");

const blurUpImage = (imgElement) => {
  imgElement.src = imgElement.dataset.src;
  imgElement.style.filter = "blur(0px)";
};

if (tagIcons) {
  const tagArray = Array.from(tagIcons);

  tagArray.forEach((tag) => {
    tag.addEventListener("mouseenter", () => {
      console.log("Reveal tags");
    });
  });

  const cardImagesArray = Array.from(cardImages);
  const image = cardImagesArray[0];

  blurUpImage(image);
}
