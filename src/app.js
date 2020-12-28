class App {
  constructor() {
    this.rootElement = document.querySelector('body');
    // this.maskContainer = document.querySelector('.mask-container');
    this.mousePos = {};
    window.addEventListener("mousemove", this.logMouseMove.bind(this));
  }
  logMouseMove(e) {
	  this.mousePos.x = e.clientX;
	  this.mousePos.y = e.clientY;
	  this.rootElement.style.setProperty('--mouse-x', `${this.mousePos.x}px`);
	  this.rootElement.style.setProperty('--mouse-y', `${this.mousePos.y}px`);
  }
}

new App();
