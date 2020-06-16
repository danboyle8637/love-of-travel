const tagIcons = document.querySelectorAll(".post-card-tag-container");
const cardImages = document.querySelectorAll(".blog-feature-image");

const tagArray = Array.from(tagIcons);

tagArray.forEach((tag) => {
  tag.addEventListener("mouseenter", () => {
    console.log("Reveal tags");
  });
});

const cardImagesArray = Array.from(cardImages);

cardImagesArray.forEach((cardImage) => {
  imageObserver.observe(cardImage);
});
