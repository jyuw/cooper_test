function Person(attr) {
  this.gender = attr.gender;
  this.age = attr.age;
}

Person.prototype.calculateCooper = function(distance) {
  cooperResult(this, distance);
};
