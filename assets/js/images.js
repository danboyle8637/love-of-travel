const postFeatureImage = document.querySelector(".blog-feature-image");
const imageSourceSet = document.querySelectorAll(".blog-post-inline-srcset");
const blogPostImage = document.querySelectorAll(".blog-post-inline-img");

const postImagesArray = Array.from(blogPostImage);
const imageSourceSetArray = Array.from(imageSourceSet);

blurUpImage(postFeatureImage);

// Intersection Observer Implementation
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
      blurUpImage(entry.target);
      // UNOBSERVER THE ELEMENT
      imageObserver.unobserve(entry.target);
    } else {
      // DO NOTHING
    }
  });
};

const imageObserver = new IntersectionObserver(observerCallBack, options);

postImagesArray.forEach((image) => {
  imageObserver.observe(image);
});

imageSourceSetArray.forEach((source) => {
  imageObserver.observe(source);
});
