function Point(x, y) {
  this.x = x
  this.y = y
}

Point.prototype.toString = function() {
  return `(${this.x}, ${this.y})`
}

function Side(length) {
  this.length = length
}

function Shape() {
}

Shape.prototype.addToPlane = function(x,y) {
  this.position = new Point(x, y)
}

Shape.prototype.move = function(x, y) {
  this.position.x = x
  this.position.y = y
}

function Circle(radius) {
  // Shape.call(this)
  this.radius = radius
}

Circle.prototype = Object.create(Shape.prototype)
Circle.prototype.constructor = Circle

Circle.prototype.diameter = function() {
  return this.radius * 2
}

Circle.prototype.circumference = function() {
  return this.radius * 2 * Math.PI
}

Circle.prototype.area = function() {
  return Math.PI * this.radius * this.radius
}

function Polygon(sides) {
  this.sides = sides
}

Polygon.prototype = Object.create(Shape.prototype)
Polygon.prototype.constructor = Polygon

Polygon.prototype.perimeter = function() {
  let lengths = this.sides.map(function(element) {
    return element.length
  })
  return lengths.reduce(function(total, side){
    return total + side
  })
}

Polygon.prototype.numberOfSides = function() {
  return this.sides.length
}

function Quadrilateral(side1, side2, side3, side4) {
  this.sides = [new Side(side1), new Side(side2), new Side(side3), new Side(side4)]
}

Quadrilateral.prototype = Object.create(Polygon.prototype)
Quadrilateral.prototype.constructor = Quadrilateral

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.sides = [new Side(width), new Side(width), new Side(height), new Side(height)]
}

Rectangle.prototype = Object.create(Quadrilateral.prototype)
Rectangle.prototype.constructor = Rectangle

Rectangle.prototype.area = function() {
  return this.width * this.height
}

function Square(sideLength) {
  this.width = sideLength
  this.height = sideLength
  this.sides = [new Side(sideLength), new Side(sideLength), new Side(sideLength), new Side(sideLength)]
}

Square.prototype = Object.create(Rectangle.prototype)
Square.prototype.constructor = Square

Square.prototype.listProperties = function() {
  let prop = ""
  for (var prop in this) {
    if(this.hasOwnProperty(prop)) {
      prop.push(prop)
    }
  }
  return prop
}

function Triangle(side1, side2, side3) {
  this.sides = [new Side(side1), new Side(side2), new Side(side3)]
}

Triangle.prototype = Object.create(Polygon.prototype)
Triangle.prototype.constructor = Triangle
