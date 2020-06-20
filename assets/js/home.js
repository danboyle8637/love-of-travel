const tagIconContainers = document.querySelectorAll(".post-card-tag-container");
const mobileTagIconContainers = document.querySelectorAll('.post-card-mobile-tag-container')
const tagLabels = document.querySelectorAll(".blog-tag-label");
const cardImages = document.querySelectorAll(".blog-feature-image");

const tagArray = Array.from(tagIconContainers);
const mobileTagArray = Array.from(mobileTagIconContainers)
const tagLabelArray = Array.from(tagLabels);

tagLabelArray.forEach(label => {
  label.style.display = "none"
})

gsap.set(tagLabelArray, { opacity: 0, x: 300 });

tagArray.forEach((tag) => {
  // ***** Setup the display based on device size
  if (aboveIpadQuery.matches) {
    tag.style.display = "flex"
  } else {
    tag.style.display = "none"
  }

  // ***** Listen for when the mouse enters
  tag.addEventListener("mouseenter", () => {
    gsap.to(tag, {
      duration: 0.5,
      left: 20,
      ease: Back.easeOut
    })

    const childNodesArray = Array.from(tag.childNodes)

    childNodesArray.forEach(node => {
      if (node.classList && node.classList.value === "blog-tag-label") {
        node.style.display = "block"
        gsap.to(node, { opacity: 1, x: 0, });
      }
    })

  });

  // ***** Listen for when the mouse leaves
  tag.addEventListener("mouseleave", () => {
    gsap.to(tag, {
      duration: 0.5,
      left: 356,
      ease: Back.easeOut
    })

    const childNodesArray = Array.from(tag.childNodes)

    childNodesArray.forEach(node => {
      if (node.classList && node.classList.value === "blog-tag-label") {
        gsap.to(node, { opacity: 0, x: 300, });
        node.style.display = "none"
      }
    })

  });
});

mobileTagArray.forEach(tag => {
  // ***** Setup the display based on device size
  if (aboveIpadQuery.matches) {
    tag.style.display = "none"
  } else {
    tag.style.display = "flex"
  }
})

const cardImagesArray = Array.from(cardImages);

cardImagesArray.forEach((cardImage) => {
  imageObserver.observe(cardImage);
});
