let currentImageIndex = 0;
let currentColor = "red";
let isDragging = false;
let startX = 0;

const images = {
  red: [
    "/greybox/assets/Nalle_Turntable_brun(1).png",
    "/greybox/assets/Nalle_Turntable_brun(2).png",
    "/greybox/assets/Nalle_Turntable_brun(3).png",
    "/greybox/assets/Nalle_Turntable_brun(4).png",
    "/greybox/assets/Nalle_Turntable_brun(5).png",
    "/greybox/assets/Nalle_Turntable_brun(6).png",
    "/greybox/assets/Nalle_Turntable_brun(7).png",
    "/greybox/assets/Nalle_Turntable_brun(8).png",
    "/greybox/assets/Nalle_Turntable_brun(9).png",
    "/greybox/assets/Nalle_Turntable_brun(10).png",
    "/greybox/assets/Nalle_Turntable_brun(11).png",
    "/greybox/assets/Nalle_Turntable_brun(12).png",
  ],
  blue: [
    "/greybox/assets/Nalle_Turntable_blå(1).png",
    "/greybox/assets/Nalle_Turntable_blå(2).png",
    "/greybox/assets/Nalle_Turntable_blå(3).png",
    "/greybox/assets/Nalle_Turntable_blå(4).png",
    "/greybox/assets/Nalle_Turntable_blå(5).png",
    "/greybox/assets/Nalle_Turntable_blå(6).png",
    "/greybox/assets/Nalle_Turntable_blå(7).png",
    "/greybox/assets/Nalle_Turntable_blå(8).png",
    "/greybox/assets/Nalle_Turntable_blå(9).png",
    "/greybox/assets/Nalle_Turntable_blå(10).png",
    "/greybox/assets/Nalle_Turntable_blå(11).png",
    "/greybox/assets/Nalle_Turntable_blå(12).png",
  ],
  green: [
    "/greybox/assets/Nalle_Turntable_gul(1).png",
    "/greybox/assets/Nalle_Turntable_gul(2).png",
    "/greybox/assets/Nalle_Turntable_gul(3).png",
    "/greybox/assets/Nalle_Turntable_gul(4).png",
    "/greybox/assets/Nalle_Turntable_gul(5).png",
    "/greybox/assets/Nalle_Turntable_gul(6).png",
    "/greybox/assets/Nalle_Turntable_gul(7).png",
    "/greybox/assets/Nalle_Turntable_gul(8).png",
    "/greybox/assets/Nalle_Turntable_gul(9).png",
    "/greybox/assets/Nalle_Turntable_gul(10).png",
    "/greybox/assets/Nalle_Turntable_gul(11).png",
    "/greybox/assets/Nalle_Turntable_gul(12).png",
  ],
  yellow: [
    "/greybox/assets/Nalle_Turntable_rosa(1).png",
    "/greybox/assets/Nalle_Turntable_rosa(2).png",
    "/greybox/assets/Nalle_Turntable_rosa(3).png",
    "/greybox/assets/Nalle_Turntable_rosa(4).png",
    "/greybox/assets/Nalle_Turntable_rosa(5).png",
    "/greybox/assets/Nalle_Turntable_rosa(6).png",
    "/greybox/assets/Nalle_Turntable_rosa(7).png",
    "/greybox/assets/Nalle_Turntable_rosa(8).png",
    "/greybox/assets/Nalle_Turntable_rosa(9).png",
    "/greybox/assets/Nalle_Turntable_rosa(10).png",
    "/greybox/assets/Nalle_Turntable_rosa(11).png",
    "/greybox/assets/Nalle_Turntable_rosa(12).png",
  ],
};

function showImage(index) {
  const toyImage = document.getElementById("toy-image");
  toyImage.src = images[currentColor][index];
}

function changeColor(color) {
  currentColor = color;
  currentImageIndex = 0;
  showImage(currentImageIndex);
}

document.addEventListener("DOMContentLoaded", () => {
  const toyElement = document.getElementById("toy");

  toyElement.addEventListener("mousedown", (event) => {
    isDragging = true;
    startX = event.clientX;
    toyElement.style.cursor = "grabbing";
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
    toyElement.style.cursor = "grab";
  });

  document.addEventListener("mousemove", (event) => {
    if (isDragging) {
      const deltaX = event.clientX - startX;
      if (Math.abs(deltaX) > 50) {
        if (deltaX > 0) {
          currentImageIndex = (currentImageIndex + 1) % 12;
        } else {
          currentImageIndex = (currentImageIndex - 1 + 12) % 12;
        }
        showImage(currentImageIndex);
        startX = event.clientX;
      }
    }
  });

  showImage(currentImageIndex);
});
