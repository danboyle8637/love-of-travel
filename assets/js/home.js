const tagIcons = document.querySelectorAll(".post-card-tag-container");
const tagLabels = document.querySelectorAll(".blog-tag-label");
const cardImages = document.querySelectorAll(".blog-feature-image");

const tagArray = Array.from(tagIcons);
const tagLabelArray = Array.from(tagLabels);

console.log(tagLabelArray);

gsap.set(tagLabelArray, { opacity: 0, x: 300 });

tagArray.forEach((tag) => {
  tag.addEventListener("mouseenter", () => {
    console.log("Reveal tags");
    tagLabelArray.forEach((label) => {
      gsap.to(label, { opacity: 1, x: 0 });
    });
  });
});

const cardImagesArray = Array.from(cardImages);

cardImagesArray.forEach((cardImage) => {
  imageObserver.observe(cardImage);
});
