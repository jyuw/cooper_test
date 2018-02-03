function calculateCooper (obj, distance){
  if(obj.gender === 'male'){
    if(obj.age === 13 || obj.age === 14){
      if (distance < 2100) {
        obj.cooperMessage = "Poor";
      }
      else if (distance >= 2100 && distance < 2199) {
        obj.cooperMessage = "Below Average";
      }
      else if (distance >= 2200 && distance < 2399) {
        obj.cooperMessage = "Average";
      }
      else if (distance >= 2400 && distance < 2699) {
        obj.cooperMessage = "Above Average";
      }
      else {
        obj.cooperMessage = "Excellent";
      }
    }
    if(obj.age === 15 || obj.age === 16){
      if (distance < 2200) {
        obj.cooperMessage = "Poor";
      }
      if (distance >= 2200 && distance < 2299) {
        obj.cooperMessage = "Below Average";
      }
      if (distance >= 2300 && distance < 2499) {
        obj.cooperMessage = "Average";
      }
      if (distance >= 2500 && distance < 2799) {
        obj.cooperMessage = "Above Average";
      }
      if (distance >= 2800) {
        obj.cooperMessage = "Excellent";
      }
    }
    if(obj.age >=17 || obj.age <=19){
      if (distance < 2300) {
        obj.cooperMessage = "Poor";
      }
      if (distance >= 2300 && distance < 2499) {
        obj.cooperMessage = "Below Average";
      }
      if (distance >= 2500 && distance < 2699) {
        obj.cooperMessage = "Average";
      }
      if (distance >= 2700 && distance < 2999) {
        obj.cooperMessage = "Above Average";
      }
      if (distance >= 3000) {
        obj.cooperMessage = "Excellent";
      }
    }
    if(obj.age >=20 || obj.age <=29){
      if (distance < 1600) {
        obj.cooperMessage = "Poor";
      }
      if (distance >= 1600 && distance < 2199) {
        obj.cooperMessage = "Below Average";
      }
      if (distance >= 2200 && distance < 2399) {
        obj.cooperMessage = "Average";
      }
      if (distance >= 2400 && distance < 2799) {
        obj.cooperMessage = "Above Average";
      }
      if (distance >= 2800) {
        obj.cooperMessage = "Excellent";
      }
    }
    if(obj.age >=30 || obj.age <=39){
      if (distance < 1500) {
        obj.cooperMessage = "Poor";
      }
      if (distance >= 1500 && distance < 1999) {
        obj.cooperMessage = "Below Average";
      }
      if (distance >= 2000 && distance < 2299) {
        obj.cooperMessage = "Average";
      }
      if (distance >= 2300 && distance < 2699) {
        obj.cooperMessage = "Above Average";
      }
      if (distance >= 2700) {
        obj.cooperMessage = "Excellent";
      }
    }
    if(obj.age >=40 || obj.age <=49){
      if (distance < 1400) {
        obj.cooperMessage = "Poor";
      }
      if (distance >= 1400 && distance < 1699) {
        obj.cooperMessage = "Below Average";
      }
      if (distance >= 1700 && distance < 2099) {
        obj.cooperMessage = "Average";
      }
      if (distance >= 2100 && distance < 2499) {
        obj.cooperMessage = "Above Average";
      }
      if (distance >= 2500) {
        obj.cooperMessage = "Excellent";
      }
    }
    if(obj.age > 50){
      if (distance < 1300) {
        obj.cooperMessage = "Poor";
      }
      if (distance >= 1300 && distance < 1599) {
        obj.cooperMessage = "Below Average";
      }
      if (distance >= 1600 && distance < 1999) {
        obj.cooperMessage = "Average";
      }
      if (distance >= 2000 && distance < 2399) {
        obj.cooperMessage = "Above Average";
      }
      if (distance >= 2400) {
        obj.cooperMessage = "Excellent";
      }
    }
  }
  if(obj.gender === 'female'){
    if(obj.age === 13 || obj.age === 14){
      if (distance < 1500) {
        obj.cooperMessage = "Poor";
      }
      if (distance >= 1500 && distance < 1599) {
        obj.cooperMessage = "Below Average";
      }
      if (distance >= 1600 && distance < 1899) {
        obj.cooperMessage = "Average";
      }
      if (distance >= 1900 && distance < 1999) {
        obj.cooperMessage = "Above Average";
      }
      if (distance >= 2000) {
        obj.cooperMessage = "Excellent";
      }
    }
    if(obj.age === 15 || obj.age === 16){
      if (distance < 1600) {
        obj.cooperMessage = "Poor";
      }
      if (distance >= 1600 && distance < 1699) {
        obj.cooperMessage = "Below Average";
      }
      if (distance >= 1700 && distance < 1999) {
        obj.cooperMessage = "Average";
      }
      if (distance >= 2000 && distance < 2099) {
        obj.cooperMessage = "Above Average";
      }
      if (distance >= 2100) {
        obj.cooperMessage = "Excellent";
      }
    }
    if(obj.age >=17 || obj.age <=19){
      if (distance < 1700) {
        obj.cooperMessage = "Poor";
      }
      if (distance >= 1700 && distance < 1799) {
        obj.cooperMessage = "Below Average";
      }
      if (distance >= 1800 && distance < 2099) {
        obj.cooperMessage = "Average";
      }
      if (distance >= 2100 && distance < 2299) {
        obj.cooperMessage = "Above Average";
      }
      if (distance >= 2300) {
        obj.cooperMessage = "Excellent";
      }
    }
    if(obj.age >=20 || obj.age <=29){
      if (distance < 1500) {
        obj.cooperMessage = "Poor";
      }
      if (distance >= 1500 && distance < 1799) {
        obj.cooperMessage = "Below Average";
      }
      if (distance >= 1800 && distance < 2199) {
        obj.cooperMessage = "Average";
      }
      if (distance >= 2200 && distance < 2700) {
        obj.cooperMessage = "Above Average";
      }
      if (distance >= 2700) {
        obj.cooperMessage = "Excellent";
      }
    }
    if(obj.age >=30 || obj.age <=39){
      if (distance < 1400) {
        obj.cooperMessage = "Poor";
      }
      if (distance >= 1400 && distance < 1699) {
        obj.cooperMessage = "Below Average";
      }
      if (distance >= 1700 && distance < 1999) {
        obj.cooperMessage = "Average";
      }
      if (distance >= 2000 && distance < 2499) {
        obj.cooperMessage = "Above Average";
      }
      if (distance >= 2500) {
        obj.cooperMessage = "Excellent";
      }
    }
    if(obj.age >=40 || obj.age <=49){
      if (distance < 1200) {
        obj.cooperMessage = "Poor";
      }
      if (distance >= 1200 && distance < 1499) {
        obj.cooperMessage = "Below Average";
      }
      if (distance >= 1500 && distance < 1899) {
        obj.cooperMessage = "Average";
      }
      if (distance >= 1900 && distance < 2299) {
        obj.cooperMessage = "Above Average";
      }
      if (distance >= 2300) {
        obj.cooperMessage = "Excellent";
      }
    }
    if(obj.age > 50){
      if (distance < 1100) {
        obj.cooperMessage = "Poor";
      }
      if (distance >= 1100 && distance < 1399) {
        obj.cooperMessage = "Below Average";
      }
      if (distance >= 1400 && distance < 1699) {
        obj.cooperMessage = "Average";
      }
      if (distance >= 1700 && distance < 2199) {
        obj.cooperMessage = "Above Average";
      }
      if (distance >= 2200) {
        obj.cooperMessage = "Excellent";
      }
    }
  }
  return obj.gender;
}
