class Rectangle {
	constructor(width, height){
		this.height = height;
		this.width = width;
	}

	get width(){
		return this.width;
	}

	get height(){
		return this.height;
	}

	getArea(){
		return this.width * this.height;
	}
}

class Square extends Rectangle {
	constructor(side){
		super(side, side);
	}

	getPerimeter(){
		return 4 * this.width;
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;