describe("Cooper", function() {
  var person;

  beforeEach(function() {
    // person = new Person({age: 20, gender: 'male'});
  });

  it("returns the correct value", function(){
    person = new Person({age: 20, gender: 'male'});
    person.calculateCooper(2300);
    expect(person.cooperMessage).toEqual('Average');
  });

  it("returns the correct value", function(){
    person = new Person({age: 14, gender: 'male'});
    person.calculateCooper(100);
    expect(person.cooperMessage).toEqual('Poor');
  });

  it("returns the correct value", function(){
    person = new Person({age: 50, gender: 'male'});
    person.calculateCooper(2400);
    expect(person.cooperMessage).toEqual('Excellent');
  });

  it("returns the correct value", function(){
    person = new Person({age: 50, gender: 'female'});
    person.calculateCooper(2400);
    expect(person.cooperMessage).toEqual('Excellent');
  });

  it("returns the correct value", function(){
    person = new Person({age: 50, gender: 'female'});
    person.calculateCooper(1399);
    expect(person.cooperMessage).toEqual('Below Average');
  });

  it("returns the correct value", function(){
    person = new Person({age: 30, gender: 'female'});
    person.calculateCooper(2200);
    expect(person.cooperMessage).toEqual('Above Average');
  });

  it("returns the correct value", function(){
    person = new Person({age: 22, gender: 'male'});
    person.calculateCooper(1500);
    expect(person.cooperMessage).toEqual('Poor');
  });

  it("returns the correct value", function(){
    person = new Person({age: 29, gender: 'male'});
    person.calculateCooper(3000);
    expect(person.cooperMessage).toEqual('Excellent');
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
