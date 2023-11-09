var uname,password;
function validation(){
  readForm()
  
  
  if(uname==""){
    alert("please enter your usernamr");
    uname.focus();
    
    
  }
  if(password==""){
    alert("please enter your password ");
    password.focus();
  }
  console.log(uname,password);
  
}
function readForm(){
  uname=document.getElementById("name").value;
  password=document.getElementById("pass").value;
  
}
document.getElementById("submit").onclick=function(){
  validation();
  readForm();
  firebase.database().ref("submitted/"+name).set({
    USERNAME:uname,
    PASSWORD:password,
  });
  alert("form submitted");
}
