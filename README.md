# COOPER TEST
## Week 2 JavaScript

### Introduction
-------
The Cooper Test is used to monitor the development of a person's aerobic endurance and to obtain an estimate of their VO2 max. This program calculates the aerobic endurance based on a person's completed distance, in accordance to the Cooper Normative Data Table. The results available are included in a range starting from Poor, Belowe Average, Average, Above Average and Excellent.

# USAGE

To check the functionalities of the Cooper Test do the following steps:

* Open the Index.html file in your browser, access the developers tool right-clicking on the webpage, click on 'Inspect', then click on the 'Console' button.

* You need to create an object (Person) with a minimum of 2 attributes in order to be able to make   the calculation - gender and age are required to be present.

```
person = new Person({age: 20, gender: 'male'});
=> Person {gender: "male", age: 20}
```

* Input the distance completed in meters calling the cooperResult function:

```
cooperResult(person, 2300);
=> undefined

```
* Call the cooperMessage function on the person created to get a message back assessing what's the level of your performance:

```
person.cooperMessage
"Average"

```
