describe("Cooper", function() {
  var cooper;
  var person;

  beforeEach(function() {
    person = new Person({age: 20, gender: 'male', distance: 2300});
    cooper = new Cooper();
  });

  it("makes sure cooper is not nil", function() {
    expect(cooper).not.toBe(null);
  });
});
