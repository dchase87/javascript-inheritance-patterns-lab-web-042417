const Point = function(x, y) {
  this.x = x
  this.y = y
}
Point.prototype.toString = function() { return this.x + ", " + this.y }

const Shape = function() {}
Shape.prototype.addToPlane = function(x, y) {
  this.position = new Point(x, y)
}
Shape.prototype.move = function(x, y) {
  this.addToPlane(x, y)
}

const Circle = function(radius) {
  this.radius = radius
}

Circle.prototype = Object.create(Shape.prototype)
Circle.constructor = Circle

Circle.prototype.area = function() {
  return this.area = Math.PI * (this.radius * this.radius)
}

Circle.prototype.diameter = function() {
  return this.diameter = 2 * this.radius
}

Circle.prototype.circumference = function() {
  return this.circumference = 2 * (Math.PI * this.radius)
}

const Side = function(length) {
  this.length = length
}
Side.constructor = Side

const Polygon = function(sides) {
  this.sides = sides
}
Polygon.prototype = Object.create(Shape.prototype)
Polygon.constructor = Polygon

Polygon.prototype.perimeter = function() {
  return this.perimeter = this.sides.reduce(function(acc, val) { return acc + val.length}, 0)
}

Polygon.prototype.numberOfSides = function() {
  return this.sides.length
}

const Quadrilateral = function(l1, l2, l3, l4) {
  this.l1 = new Side(l1)
  this.l2 = new Side(l2)
  this.l3 = new Side(l3)
  this.l4 = new Side(l4)
  Polygon.call(this, [this.l1, this.l2, this.l3, this.l4])
}
Quadrilateral.prototype = Object.create(Polygon.prototype)
Quadrilateral.constructor = Quadrilateral

const Rectangle = function(width, height) {
  Quadrilateral.call(this, width, height, width, height)
  this.width = width
  this.height = height
}
Rectangle.prototype = Object.create(Quadrilateral.prototype)
Rectangle.constructor = Rectangle

Rectangle.prototype.area = function() {
  return this.area = this.width * this.height
}

const Square = function(length) {
  Rectangle.call(this, length, length)
  this.length = length
}
Square.prototype = Object.create(Rectangle.prototype)
Square.constructor = Square

Square.prototype.listProperties = function() {
  var array = []
  for (var prop in this) {
    if (this.hasOwnProperty(prop)) {
      array.push(prop)
    }
  }
  return array.join(', ')
}

const Triangle = function(l1, l2, l3) {
  this.l1 = new Side(l1)
  this.l2 = new Side(l2)
  this.l3 = new Side(l3)
  Polygon.call(this, [this.l1, this.l2, this.l3])
}
Triangle.prototype = Object.create(Polygon.prototype)
Triangle.constructor = Triangle
