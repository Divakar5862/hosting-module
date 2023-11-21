var name,theatername,ticketscount,category,seatnumber,totalcost;
function validation() {
  readForm();

  if (name == "") {
    alert("please enter your name");
    name.focus();
  }
  if (theatername == "") {
    alert("please enter your theatername");
    theatername.focus();
  }
  if (ticketscount == "") {
    alert("please enter your ticketscount  ");
    ticketscount.focus();
  }
  if (category == "") {
    alert("please enter your category ");
    category.focus();
  }
  if (seatnumber == "") {
    alert("please enter your seatnumber");
    seatnumber.focus();
  }
  if (totalcost == "") {
    alert("please enter your totalcost");
  totalcost.focus();
  }
  console.log(name,theatername,ticketscount,category,seatnumber,totalcost);
}
function readForm() {
  name = document.getElementById("yname").value;
  theatername= document.getElementById("tname").value;
  ticketscount= document.getElementById("tcount").value;
  category=document.getElementById("cat").value;
  seatnumber= document.getElementById("snum").value;
  totalcost = document.getElementById("tcost").value;
}
document.getElementById("create").onclick = function () {
  readForm();
  validation();
  firebase
    .database()
    .ref("create/"+name)
    .set({
      NAME: name,
      THEATERNAME: thear,
      COLLEGENAME: collegename,
      DEPARTMENT: department,
      EMAILID: emailid,
      PHONENUMBER: phonenumber,
    });
  alert("form submitted");
  name = document.getElementById("yname").value = "";
  age = document.getElementById("old").value = "";
  collegename = document.getElementById("cname").value = "";
  department=document.getElementById("dname").value="";
  emailid = document.getElementById("mail").value = "";
  phonenumber = document.getElementById("mnumber").value = "";
};
document.getElementById("read").onclick=function(){
  readForm();
  firebase.database().ref("create/"+name).on("value",function(snap){
    document.getElementById("yname").value=snap.val().NAME;
    document.getElementById("old").value=snap.val().AGE;
    document.getElementById("cname").value=snap.val().COLLEGENAME;
    document.getElementById("dname").value=snap.val().DEPARTMENT;
    document.getElementById("mail").value=snap.val().EMAILID;
    document.getElementById("mnumber").value=snap.val().PHONENUMBER;
    
  })
}
document.getElementById("update").onclick=function(){
  readForm();
  firebase.database().ref("create/"+name).update({
    NAME:name,
    AGE:age,
    COLLEGENAME:collegename,
    DEPARTMENT:department,
    EMAILID:emailid,
    PHONENUMBER:phonenumber,
    
  })
  alert("data updated");
   name = document.getElementById("yname").value = "";
  age = document.getElementById("old").value = "";
  collegename = document.getElementById("cname").value = "";
  department=document.getElementById("dname").value="";
  emailid = document.getElementById("mail").value = "";
  phonenumber = document.getElementById("mnumber").value = "";
  
} 
document.getElementById("delete").onclick=function(){
  readForm();
  firebase.database().ref("create/"+name).remove();
  alert("data deleted");
  name = document.getElementById("yname").value = "";
  age = document.getElementById("old").value = "";
  collegename = document.getElementById("cname").value = "";
  department=document.getElementById("dname").value="";
  emailid = document.getElementById("mail").value = "";
  phonenumber = document.getElementById("mnumber").value = "";
  
  
  
}
