class ToyViewer {
    constructor(containerId, imageId, isDesktop = false) {
      this.currentImageIndex = 0;
      this.currentColor = 'red'; // Startar med brun (som är mappad till 'red')
      this.isDragging = false;
      this.startX = 0;
      this.dragThreshold = 30;
      this.container = document.getElementById(containerId);
      this.image = document.getElementById(imageId);
      this.isDesktop = isDesktop;
      
      // Behåller samma bildmappning som i original-koden för att matcha dina existerande färgknappar
      this.images = {
        red: Array.from({length: 12}, (_, i) => `/assets/Nalle_Turntable_Brun(${i + 1}).png`),
        blue: Array.from({length: 12}, (_, i) => `/assets/Nalle_Turntable_Bla(${i + 1}).png`),
        green: Array.from({length: 12}, (_, i) => `/assets/Nalle_Turntable_Gul(${i + 1}).png`),
        yellow: Array.from({length: 12}, (_, i) => `/assets/Nalle_Turntable_Rosa(${i + 1}).png`)
      };
      
      this.initializeEventListeners();
      this.showImage();
    }
  
    initializeEventListeners() {
      // Touch-händelser för mobil
      this.container.addEventListener('touchstart', (e) => {
        e.preventDefault(); // Förhindrar scroll på mobil
        this.handleDragStart(e.touches[0].clientX);
      });
      
      document.addEventListener('touchend', () => this.handleDragEnd());
      
      this.container.addEventListener('touchmove', (e) => {
        e.preventDefault();
        this.handleDrag(e.touches[0].clientX);
      });
  
      // Mus-händelser för desktop
      this.container.addEventListener('mousedown', (e) => this.handleDragStart(e.clientX));
      document.addEventListener('mouseup', () => this.handleDragEnd());
      this.container.addEventListener('mousemove', (e) => this.handleDrag(e.clientX));
      
      // Förhindra standarddrag
      this.container.addEventListener('dragstart', (e) => e.preventDefault());
    }
  
    handleDragStart(clientX) {
      this.isDragging = true;
      this.startX = clientX;
      this.container.style.cursor = 'grabbing';
    }
  
    handleDragEnd() {
      this.isDragging = false;
      this.container.style.cursor = 'grab';
    }
  
    handleDrag(clientX) {
      if (!this.isDragging) return;
      
      const deltaX = clientX - this.startX;
      if (Math.abs(deltaX) > this.dragThreshold) {
        this.rotateImage(deltaX > 0 ? 1 : -1);
        this.startX = clientX;
      }
    }
  
    rotateImage(direction) {
      this.currentImageIndex = (this.currentImageIndex + direction + 12) % 12;
      this.showImage();
    }
  
    changeColor(color) {
      if (this.images[color]) {
        this.currentColor = color;
        this.currentImageIndex = 0;
        this.showImage();
      }
    }
  
    showImage() {
      this.image.src = this.images[this.currentColor][this.currentImageIndex];
    }
  }
  
  // Globala funktioner för att hantera onclick events från HTML
  window.changeColor = function(color) {
    mobileViewer.changeColor(color);
  };
  
  window.changeColorDesktop = function(color) {
    desktopViewer.changeColor(color);
  };
  
  // Initialisering när sidan laddas
  let mobileViewer, desktopViewer;
  
  document.addEventListener('DOMContentLoaded', () => {
    // Skapa instanser för både mobil och desktop
    mobileViewer = new ToyViewer('toy', 'toy-image', false);
    desktopViewer = new ToyViewer('toy-desktop', 'toy-image-desktop', true);
  });