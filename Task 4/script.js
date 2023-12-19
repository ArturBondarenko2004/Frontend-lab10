class Shape {
	static total = 100;

	constructor(a) {
	  this.a = a;
	}

	static fill() {
	  Shape.total = 100;
	}

	draw() {
	  let quad = document.createElement("div");
	  quad.classList.add("shape"); 
	  quad.style.backgroundColor = `rgba(255, 0, 0, ${Shape.total / 100})`;
	  quad.style.borderColor = "black"; 
	  Shape.total -= 10;
	  return quad;
	}
 }
 let btnDraw = document.querySelector("#draw");
 let btnFill = document.querySelector("#fill");
 let container = document.querySelector("#container");
 btnDraw.addEventListener("click", function () {
	let s = new Shape(100);
	container.appendChild(s.draw());
 });
 btnFill.addEventListener("click", function () {
	Shape.fill();
 });
 