var name,moviename,ticketscount,category,seatnumber,totalcost;
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
      THEATERNAME:theatername,
    TICKETSCOUNT:ticketscount,
      CATEGORY:category,
      SEATNUMBER:seatnumber,
      TOTALCOST:totalcost
    });
  alert("form submitted");
  name = document.getElementById("yname").value ="";
  theatername= document.getElementById("tname").value="";
  ticketscount= document.getElementById("tcount").value="";
  category=document.getElementById("cat").value="";
  seatnumber= document.getElementById("snum").value="";
  totalcost = document.getElementById("tcost").value="";
};
document.getElementById("read").onclick=function(){
  readForm();
  firebase.database().ref("create/"+name).on("value",function(snap){
    document.getElementById("yname").value=snap.val().NAME;
    document.getElementById("tname").value=snap.val().THEATERNAME;
    document.getElementById("tcount").value=snap.val().TICKETSCOUNT;
    document.getElementById("cat").value=snap.val().CATEGORY;
    document.getElementById("snum").value=snap.val().SEATNUMBER;
    document.getElementById("tcost").value=snap.val().TOTALCSOT;
    
  })
}
document.getElementById("update").onclick=function(){
  readForm();
  firebase.database().ref("create/"+name).update({
   NAME: name,
      THEATERNAME:theatername,
    TICKETSCOUNT:ticketscount,
      CATEGORY:category,
      SEATNUMBER:seatnumber,
      TOTALCOST:totalcost  
  })
  alert("data updated");
    name = document.getElementById("yname").value ="";
  theatername= document.getElementById("tname").value="";
  ticketscount= document.getElementById("tcount").value="";
  category=document.getElementById("cat").value="";
  seatnumber= document.getElementById("snum").value="";
  totalcost = document.getElementById("tcost").value="";
} 
document.getElementById("delete").onclick=function(){
  readForm();
  firebase.database().ref("create/"+name).remove();
  alert("data deleted");
   name = document.getElementById("yname").value ="";
  theatername= document.getElementById("tname").value="";
  ticketscount= document.getElementById("tcount").value="";
  category=document.getElementById("cat").value="";
  seatnumber= document.getElementById("snum").value="";
  totalcost = document.getElementById("tcost").value=""; 
}
