const tagIcons = document.querySelectorAll(".post-card-tag-container");

if (tagIcons) {
  const tagArray = Array.from(tagIcons);

  tagArray.forEach((tag) => {
    tag.addEventListener("mouseenter", () => {
      console.log("Reveal tags");
    });
  });
}
