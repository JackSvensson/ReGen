let currentImageIndex = 0;
let currentColor = 'red';
let isDragging = false;
let startX = 0;

const images = {
    red: [
        '/greybox/assets/blue0004-min.png',
        '/greybox/assets/blue0003-min.png',
        '/greybox/assets/blue0001-min.png',
        '/greybox/assets/blue0002-min.png'
    ],
    blue: [
        '/greybox/assets/brown0004-min.png',
        '/greybox/assets/brown0003-min.png',
        '/greybox/assets/brown0001-min.png',
        '/greybox/assets/brown0002-min.png'
    ],
    green: [
        '/greybox/assets/green0004-min.png',
        '/greybox/assets/green0003-min.png',
        '/greybox/assets/green0001-min.png',
        '/greybox/assets/green0002-min.png'
    ],
    yellow: [
        'images/toy-yellow-1.png',
        'images/toy-yellow-2.png',
        'images/toy-yellow-3.png',
        'images/toy-yellow-4.png'
    ]
};

function showImage(index) {
  const toyImage = document.getElementById('toy-image');
  toyImage.src = images[currentColor][index];
}

function changeColor(color) {
  currentColor = color;
  currentImageIndex = 0;
  showImage(currentImageIndex);
}

document.addEventListener('DOMContentLoaded', () => {
  const toyElement = document.getElementById('toy');

  toyElement.addEventListener('mousedown', (event) => {
      isDragging = true;
      startX = event.clientX;
      toyElement.style.cursor = 'grabbing';
  });

  document.addEventListener('mouseup', () => {
      isDragging = false;
      toyElement.style.cursor = 'grab';
  });

  document.addEventListener('mousemove', (event) => {
      if (isDragging) {
          const deltaX = event.clientX - startX;
          if (Math.abs(deltaX) > 50) {
              if (deltaX > 0) {
                  currentImageIndex = (currentImageIndex + 1) % 4;
              } else {
                  currentImageIndex = (currentImageIndex - 1 + 4) % 4;
              }
              showImage(currentImageIndex);
              startX = event.clientX;
          }
      }
  });

  showImage(currentImageIndex);
});
