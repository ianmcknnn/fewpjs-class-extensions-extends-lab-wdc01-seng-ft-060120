class Polygon {

	constructor(sides){
		this.sides = sides;
	}
	
	get countSides() {
		return this.sides.length;
	}

	get perimeter() {
		const reducer = (accumulator, currentValue) => accumulator + currentValue;

		return this.sides.reduce(reducer);
	}
}

class Triangle extends Polygon{
	get isValid() {
		return ((this.sides[0] < this.sides[1] + this.sides[2]) &&
				  (this.sides[1] < this.sides[2] + this.sides[0]) &&
				  (this.sides[2] < this.sides[0] + this.sides[1]) && 
				  (this.countSides == 3))
	}
}

class Square extends Polygon{

	get isValid() {
		return ((this.sides[0] == this.sides[1]) &&
				  (this.sides[2] == this.sides[3]) &&
				  (this.sides[0] == this.sides[2]) &&
				  (this.countSides == 4))
	}

	get area() {
		return this.sides[0] ** 2;
	}
}
