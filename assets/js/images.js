const imageSourceSet = document.querySelectorAll(".blog-post-inline-srcset");
const blogPostImage = document.querySelectorAll(".blog-post-inline-image");

const postImagesArray = Array.from(blogPostImage);
const postImage = postImagesArray[0];

blurUpImage(postImage);
