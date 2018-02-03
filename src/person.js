function Person(attr) {
  this.gender = attr.gender;
  this.age = attr.age;
  this.distance = attr.distance;
}

Person.prototype.calculateCooperValue = function() {
  cooper = new Cooper();
  cooper.calculateCooper(this);
};
