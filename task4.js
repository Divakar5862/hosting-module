var result, dips, foot, kg, result1, tips1;
function calculatebmi() {
  result = document.getElementById("bmiresult");
  dips = document.getElementById("bmiresult1");
  foot = document.getElementById("bmifeet");
  kg = document.getElementById("weight");

if (kg.value == "" || foot.value == "") {
  alert("please enter your weight and feet");
} else {
  var meter = foot.value * 0.3048;
  var height = meter * meter;
  var bmi = kg.value / height;
  console.log("bmi value=" + bmi);
  if (bmi < 18.5) {
    console.log("the user is under weight eat healthy food ");
    result.innerHTML = "<h2>" + bmi + "</h2>";
    dips.innerHTML =
      "<h2>" + "the user is under weight eat healthy food" + "</h2>";
    result1 = result.innerHTML;
    tips1 = dips.innerHTML;
  } else if (bmi >= 18.5 && bmi < 25) {
    console.log("the user is normal please maintained same diet ");
    result.innerHTML = "<h2>" + bmi + "</h2>";
    dips.innerHTML =
      "<h2>" + "the user is normal please maintained same diet" + "</h2>";
    result1 = result.innerHTML;
    tips1 = dips.innerHTML;
  } else if (bmi >= 25 && bmi < 30) {
    console.log("the user is overweight please maintained diet ");
    result.innerHTML = "<h2>" + bmi + "</h2>";
    dips.innerHTML =
      "<h2>" + "the user is overwight please maintained deit" + "</h2>";
    result1 = result.innerHTML;
    tips1 = dips.innerHTML;
  } else if (bmi >= 30 && bmi < 35) {
    console.log("the user is obese please check with  your doctor ");
    result.innerHTML = "<h2>" + bmi + "</h2>";
    dips.innerHTML =
      "<h2>" + "the user is obese please check with your doctor" + "</h2>";
    result1 = result.innerHTML;
    tips1 = dips.innerHTML;
  } else if (bmi >= 35) {
    console.log(
      "the user is facing obese kindly check with your doctor and take immediate action "
    );
    result.innerHTML = "<h2>" + bmi + "</h2>";
    dips.innerHTML =
      "<h2>" +
      "the user is the user is facing obese kindly check with your doctor and take immediate action" +
      "</h2>";
    result1 = result.innerHTML;
    tips1 = dips.innerHTML;
  } else {
    console.log("check your input");
    result.innerHTML =
      "<h2>" +
      "the user is the user is facing obese kindly check with your doctor and take immediate action" +
      "</h2>";
  }
}
}
function readForm(){
  var result=document.getElementById("bmiresult");
  var tips=document.getElementById("bmiresult1");
  var foot=document.getElementById("bmifeet");
  var kg=document.getElementById("weight");
  
}
document.getElementById("submit").onclick=function(){
   calculatebmi();
  readForm();
 RESULT:result1,
    DIPS:tips1,
    FOOT:feet,
    KG:kg,
    
  })
  alert("data submitted");
  feet=document.getElementById("bmifeet").value="";
  kg=document.getElementById("weight").value="";
}
