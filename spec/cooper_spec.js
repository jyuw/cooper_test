describe("Cooper", function() {
  var person;

  beforeEach(function() {
    person = new Person({age: 20, gender: 'male'});
  });

  it("returns the correct value", function(){
    person.calculateCooperValue(2300);
    expect(person.cooperMessage).toEqual('Average');
  });
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
