var name,mothername,fathername,emailid,moblienumber;
function validation(){
  readform();
  
  if(name ==""){
    alert("please enter your name");
    name.focus();
  }
  if(mothername ==""){
    alert("please enter your mothername");
    mothername.focus();
  }
  if(fathername==""){
    alert("please enter your fathername ");
    fathername.focus();
  }
  if(emailid ==""){
    alert("please enter your emailid")
    emailid.focus();
    
  }
  if(moblienumber==""){
    alert("please enter your moblienumber")
  moblienumber.focus();
    
  }
  console.log(name,mothername,fathername,emailid,moblienumber);
  
  
}
function readform(){
  name = document.getElementById("yname").value;
  mothername= document.getElementById("mname").value;
  fathername= document.getElement
}