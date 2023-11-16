var name, mothername, fathername, emailid, moblienumber;
function validation() {
  readForm();

  if (name == "") {
    alert("please enter your name");
    name.focus();
  }
  if (mothername == "") {
    alert("please enter your mothername");
    mothername.focus();
  }
  if (fathername == "") {
    alert("please enter your fathername ");
    fathername.focus();
  }
  if (emailid == "") {
    alert("please enter your emailid");
    emailid.focus();
  }
  if (moblienumber == "") {
    alert("please enter your moblienumber");
    moblienumber.focus();
  }
  console.log(name, mothername, fathername, emailid, moblienumber);
}
function readForm() {
  name = document.getElementById("yname").value;
  mothername = document.getElementById("mname").value;
  fathername = document.getElementById("fname").value;
  emailid = document.getElementById("mail").value;
  moblienumber = document.getElementById("num").value;
}
document.getElementById("submit").onclick = function () {
  readForm();
  validation();
  firebase
    .database()
    .ref("submit/"+name)
    .set({
      NAME: name,
      MOTHERNAME: mothername,
      FATHERNAME: fathername,
      EMAILID: emailid,
      MOBLIENUMBER: moblienumber,
    });
  alert("form submitted");
};
