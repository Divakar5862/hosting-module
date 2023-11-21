var result,tips,ft,kg,result1,tips1;
function calculatebmi(){
  result=document.getElementById("bmiresult");
  tips=document.getElementById("bmiresult1");
  ft=document.getElementById("feet");
  kg=document.getElementById("weight");
  
}
if(kg.value==""||ft.value==""){
  alert("please enter your weight and feet");
  
}
else{
  var meter=ft.value*0.3048;
  var height=meter*meter;
  var bmi=kg.value/height;
  console.log ("bmi value="+bmi);
  if(bmi<18.5){
    console.log("the user is under weight eat healthy food ");
    result.innerHTML="<h2>"+bmi+"</h2>";
    tips.innerHTML="<h2>"+"the user is under weight eat healthy food"+"</h2>";
    result1=result.innerHTML;
    tips1=tips.innerHTML;
  }
  else if(bmi>=18.5&&bmi<25){
     console.log("the user is normal please maintained same diet ");
    result.innerHTML="<h2>"+bmi+"</h2>";
    tips.innerHTML="<h2>"+"the user is normal please maintained same diet"+"</h2>";
    result1=result.innerHTML;
    tips1=tips.innerHTML;
    
  }
  else if(bmi>=25&&bmi<30){
     console.log("the user is overweight please maintained diet ");
    result.innerHTML="<h2>"+bmi+"</h2>";
    tips.innerHTML="<h2>"+"the user is overwight please maintained deit"+"</h2>";
    result1=result.innerHTML;
    tips1=tips.innerHTML;
    
    
  }
  else if(bmi>=30&&bmi<35){
     console.log("the user is obese please check with  your doctor ");
    result.innerHTML="<h2>"+bmi+"</h2>";
    tips.innerHTML="<h2>"+"the user is obese please check with your doctor"+"</h2>";
    result1=result.innerHTML;
    tips1=tips.innerHTML;
  }
  else if(bmi>=35){
     console.log("the user is facing obese kindly check with your doctor and take immediate action ");
    result.innerHTML="<h2>"+bmi+"</h2>";
    tips.innerHTML="<h2>"+"the user is the user is facing obese kindly check with your doctor and take immediate action"+"</h2>";
    result1=result.innerHTML;
    tips1=tips.innerHTML;
    
  }
  el
  
  
}
