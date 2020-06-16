const postFeatureImage = document.querySelector(".blog-feature-image");
const imageSourceSet = document.querySelectorAll(".blog-post-inline-srcset");
const blogPostImage = document.querySelectorAll(".blog-post-inline-img");

const postImagesArray = Array.from(blogPostImage);
const imageSourceSetArray = Array.from(imageSourceSet);

blurUpImage(postFeatureImage);

postImagesArray.forEach((image) => {
  imageObserver.observe(image);
});

imageSourceSetArray.forEach((source) => {
  imageObserver.observe(source);
});
