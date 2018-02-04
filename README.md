##COOPER TEST
###Week 2 JavaScript

Introduction
-------
The Cooper Test is used to monitor the development of a person's aerobic endurance and to obtain an estimate of their VO2 max. This program calculates the aerobic endurance based on a person's completed distance, in accordance to the Cooper Normative Data Table.

###The following normative data is available for this test:

| Males  |
| ------------- | ------------- |
| Age	| Excellent	| Above Average	| Average	| Below Average	| Poor |
| ------------- | ------------- |------------- | ----------------- |
| 13-14 | >2700m | 2400-2699m |	2200-2399m | 2100-2199m |	<2100m |
| 15-16 |	>2800m | 2500-2799m	| 2300-2499m | 2200-2299m	| <2200m |
| 17-19	| >3000m | 2700-2999m | 2500-2699m | 2300-2499m | <2300m |
| 20-29	| >2800m | 2400-2799m	| 2200-2399m | 1600-2199m	| <1600m |
| 30-39	| >2700m | 2300-2699m | 2000-2299m | 1500-1999m	| <1500m |
| 40-49	| >2500m | 2100-2499m	| 1700-2099m | 1400-1699m	| <1400m |
| 50+	  | >2400m | 2000-2399m |	1600-1999m | 1300-1599m	| <1300m |


| Females  |
| ------------- | ------------- |
| Age	| Excellent	| Above Average	| Average	| Below Average	| Poor |
| ------------- | ------------- |------------- | ----------------- |
| 13-14 | >2000m | 1900-1999m |	1600-1899m | 1500-1599m |	<1500m |
| 15-16 |	>2100m | 2000-2099m	| 1700-1999m | 1600-1699m	| <1600m |
| 17-19	| >2300m | 2100-2299m | 1800-2099m | 1700-1799m | <1700m |
| 20-29	| >2700m | 2200-2699m	| 1800-2199m | 1500-1799	| <1500m |
| 30-39	| >2500m | 2000-2499m | 1700-1999  | 1400-1699	| <1400m |
| 40-49	| >2300m | 1900-2299	| 1500-1899  | 1200-1499	| <1200m |
| 50+	  | >2200m | 1700-2199m |	1400-1699m | 1100-1399m	| <1100m |


##USAGE

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
