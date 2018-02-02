describe("Person", function() {
  var person;

  beforeEach(function() {
    person = new Person({age: 20, gender: 'male', distance: 2300});
  });

  it("instantiates a new person", function() {
    expect(person.age).toEqual(20);
  });
});
