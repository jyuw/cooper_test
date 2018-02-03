describe("Person", function() {
  var person;

  beforeEach(function() {
    person = new Person({age: 20, gender: 'male', distance: 2300});
  });


  it("Age equals 20", function() {
    expect(person.age).toEqual(20);
  });

  it("Gender equals male", function() {
    expect(person.gender).toEqual('male');
  });

  it("Distance equals 2300", function() {
    expect(person.distance).toBe(2300);
  });
});
