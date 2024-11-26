let currentImageIndex = 0;
let currentColor = "red";
let isDragging = false;
let startX = 0;

const images = {
  red: [
    // RED IS ACTUALLY BROWN
    "/assets/Nalle_Turntable_Brun(1).png",
    "/assets/Nalle_Turntable_Brun(2).png",
    "/assets/Nalle_Turntable_Brun(3).png",
    "/assets/Nalle_Turntable_Brun(4).png",
    "/assets/Nalle_Turntable_Brun(5).png",
    "/assets/Nalle_Turntable_Brun(6).png",
    "/assets/Nalle_Turntable_Brun(7).png",
    "/assets/Nalle_Turntable_Brun(8).png",
    "/assets/Nalle_Turntable_Brun(9).png",
    "/assets/Nalle_Turntable_Brun(10).png",
    "/assets/Nalle_Turntable_Brun(11).png",
    "/assets/Nalle_Turntable_Brun(12).png",
  ],
  blue: [
    "/assets/Nalle_Turntable_Bla(1).png",
    "/assets/Nalle_Turntable_Bla(2).png",
    "/assets/Nalle_Turntable_Bla(3).png",
    "/assets/Nalle_Turntable_Bla(4).png",
    "/assets/Nalle_Turntable_Bla(5).png",
    "/assets/Nalle_Turntable_Bla(6).png",
    "/assets/Nalle_Turntable_Bla(7).png",
    "/assets/Nalle_Turntable_Bla(8).png",
    "/assets/Nalle_Turntable_Bla(9).png",
    "/assets/Nalle_Turntable_Bla(10).png",
    "/assets/Nalle_Turntable_Bla(11).png",
    "/assets/Nalle_Turntable_Bla(12).png",
  ],
  green: [
    "/assets/Nalle_Turntable_Gul(1).png",
    "/assets/Nalle_Turntable_Gul(2).png",
    "/assets/Nalle_Turntable_Gul(3).png",
    "/assets/Nalle_Turntable_Gul(4).png",
    "/assets/Nalle_Turntable_Gul(5).png",
    "/assets/Nalle_Turntable_Gul(6).png",
    "/assets/Nalle_Turntable_Gul(7).png",
    "/assets/Nalle_Turntable_Gul(8).png",
    "/assets/Nalle_Turntable_Gul(9).png",
    "/assets/Nalle_Turntable_Gul(10).png",
    "/assets/Nalle_Turntable_Gul(11).png",
    "/assets/Nalle_Turntable_Gul(12).png",
  ],
  yellow: [
    "/assets/Nalle_Turntable_Rosa(1).png",
    "/assets/Nalle_Turntable_Rosa(2).png",
    "/assets/Nalle_Turntable_Rosa(3).png",
    "/assets/Nalle_Turntable_Rosa(4).png",
    "/assets/Nalle_Turntable_Rosa(5).png",
    "/assets/Nalle_Turntable_Rosa(6).png",
    "/assets/Nalle_Turntable_Rosa(7).png",
    "/assets/Nalle_Turntable_Rosa(8).png",
    "/assets/Nalle_Turntable_Rosa(9).png",
    "/assets/Nalle_Turntable_Rosa(10).png",
    "/assets/Nalle_Turntable_Rosa(11).png",
    "/assets/Nalle_Turntable_Rosa(12).png",
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

  // showImage(currentImageIndex);
});

function showImageDesktop(index) {
  const toyImageDesktop = document.getElementById("toy-image-desktop");
  toyImageDesktop.src = images[currentColor][index];
}

function changeColorDesktop(color) {
  currentColor = color;
  currentImageIndex = 0;
  showImageDesktop(currentImageIndex); // Changed to showImageDesktop
}

document.addEventListener("DOMContentLoaded", () => {
  const toyElementDesktop = document.getElementById("toy-desktop");

  toyElementDesktop.addEventListener("mousedown", (event) => {
    isDragging = true;
    startX = event.clientX;
    toyElementDesktop.style.cursor = "grabbing";
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
    toyElementDesktop.style.cursor = "grab";
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
        showImageDesktop(currentImageIndex); // Changed to showImageDesktop
        startX = event.clientX;
      }
    }
  });

  // showImageDesktop(currentImageIndex); // Changed to showImageDesktop
});
