describe("Cooper", function() {
  var cooper;
  var person;
  var distance;

  beforeEach(function() {
    person = new Person({age: 20, gender: 'male', distance: 2300});
    cooper = new Cooper();
  });

  it("makes sure cooper is not nil", function() {
    expect(cooper).not.toBe(null);
  });

  it("returns the correct value", function()
    person.distance = 2300;
    cooper.calculateCooper(person);
    expect(person.cooperMessage).toEqual('Average');
});


//
//   it("calculates BMI for a person using metric method", function() {
//     calculator.metric_bmi(person_metric);
//     expect(person_metric.bmiValue).toEqual(26.01);
//   });
//
//   it("calculates BMI for a person using imperial method", function() {
//     calculator.imperial_bmi(person_imperial);
//     expect(person_imperial.bmiValue).toEqual(26.01);
//   });
// });
