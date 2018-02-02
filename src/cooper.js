function Cooper(){
}

Cooper.prototype.calculateCooper = function(obj) {
  var distance = obj.distance;
  var cooperFormula = (distance - 504.9) / 44.73;
  obj.cooperValue =  parseFloat(cooperFormula.toFixed(2));
  setCooperResult(obj);
};

function setCooperResult (obj){
  if(obj.gender === 'male'){
    if(obj.age === 13 || obj.age === 14){
      if (obj.cooperValue < 2100) {
        obj.cooperMessage = "Poor";
      }
      if (obj.cooperValue >= 2100 && obj.cooperValue < 2199) {
        obj.cooperMessage = "Below Average";
      }
      if (obj.cooperValue >= 2200 && obj.cooperValue < 2399) {
        obj.cooperMessage = "Average";
      }
      if (obj.cooperValue >= 2400 && obj.cooperValue < 2699) {
        obj.cooperMessage = "Above Average";
      }
      if (obj.cooperValue >= 2700) {
        obj.cooperMessage = "Excellent";
      }
    }
    if(obj.age === 15 || obj.age === 16){
      if (obj.cooperValue < 2200) {
        obj.cooperMessage = "Poor";
      }
      if (obj.cooperValue >= 2200 && obj.cooperValue < 2299) {
        obj.cooperMessage = "Below Average";
      }
      if (obj.cooperValue >= 2300 && obj.cooperValue < 2499) {
        obj.cooperMessage = "Average";
      }
      if (obj.cooperValue >= 2500 && obj.cooperValue < 2799) {
        obj.cooperMessage = "Above Average";
      }
      if (obj.cooperValue >= 2800) {
        obj.cooperMessage = "Excellent";
      }
    }
    if(obj.age >=17 || obj.age <=19){
      if (obj.cooperValue < 2300) {
        obj.cooperMessage = "Poor";
      }
      if (obj.cooperValue >= 2300 && obj.cooperValue < 2499) {
        obj.cooperMessage = "Below Average";
      }
      if (obj.cooperValue >= 2500 && obj.cooperValue < 2699) {
        obj.cooperMessage = "Average";
      }
      if (obj.cooperValue >= 2700 && obj.cooperValue < 2999) {
        obj.cooperMessage = "Above Average";
      }
      if (obj.cooperValue >= 3000) {
        obj.cooperMessage = "Excellent";
      }
    }
    if(obj.age >=20 || obj.age <=29){
      if (obj.cooperValue < 1600) {
        obj.cooperMessage = "Poor";
      }
      if (obj.cooperValue >= 1600 && obj.cooperValue < 2199) {
        obj.cooperMessage = "Below Average";
      }
      if (obj.cooperValue >= 2200 && obj.cooperValue < 2399) {
        obj.cooperMessage = "Average";
      }
      if (obj.cooperValue >= 2400 && obj.cooperValue < 2799) {
        obj.cooperMessage = "Above Average";
      }
      if (obj.cooperValue >= 2800) {
        obj.cooperMessage = "Excellent";
      }
    }
    if(obj.age >=30 || obj.age <=39){
      if (obj.cooperValue < 1500) {
        obj.cooperMessage = "Poor";
      }
      if (obj.cooperValue >= 1500 && obj.cooperValue < 1999) {
        obj.cooperMessage = "Below Average";
      }
      if (obj.cooperValue >= 2000 && obj.cooperValue < 2299) {
        obj.cooperMessage = "Average";
      }
      if (obj.cooperValue >= 2300 && obj.cooperValue < 2699) {
        obj.cooperMessage = "Above Average";
      }
      if (obj.cooperValue >= 2700) {
        obj.cooperMessage = "Excellent";
      }
    }
    if(obj.age >=40 || obj.age <=49){
      if (obj.cooperValue < 1400) {
        obj.cooperMessage = "Poor";
      }
      if (obj.cooperValue >= 1400 && obj.cooperValue < 1699) {
        obj.cooperMessage = "Below Average";
      }
      if (obj.cooperValue >= 1700 && obj.cooperValue < 2099) {
        obj.cooperMessage = "Average";
      }
      if (obj.cooperValue >= 2100 && obj.cooperValue < 2499) {
        obj.cooperMessage = "Above Average";
      }
      if (obj.cooperValue >= 2500) {
        obj.cooperMessage = "Excellent";
      }
    }
    if(obj.age > 50){
      if (obj.cooperValue < 1300) {
        obj.cooperMessage = "Poor";
      }
      if (obj.cooperValue >= 1300 && obj.cooperValue < 1599) {
        obj.cooperMessage = "Below Average";
      }
      if (obj.cooperValue >= 1600 && obj.cooperValue < 1999) {
        obj.cooperMessage = "Average";
      }
      if (obj.cooperValue >= 2000 && obj.cooperValue < 2399) {
        obj.cooperMessage = "Above Average";
      }
      if (obj.cooperValue >= 2400) {
        obj.cooperMessage = "Excellent";
      }
    }
  }
}
