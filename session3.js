var name, age, collegename, department, emailid, phonenumber;
function validation() {
  readForm();

  if (name == "") {
    alert("please enter your name");
    name.focus();
  }
  if (age == "") {
    alert("please enter your age");
    age.focus();
  }
  if (collegename == "") {
    alert("please enter your collegename ");
    collegename.focus();
  }
  if (department == "") {
    alert("please enter your department ");
    department.focus();
  }
  if (emailid == "") {
    alert("please enter your emailid");
    emailid.focus();
  }
  if (phonenumber == "") {
    alert("please enter your phonenumber");
    phonenumber.focus();
  }
  console.log(name, age, collegename, department, emailid, phonenumber);
}
function readForm() {
  name = document.getElementById("yname").value;
  age = document.getElementById("old").value;
  collegename = document.getElementById("cname").value;
  emailid = document.getElementById("mail").value;
  phonenumber = document.getElementById("mnumber").value;
}
document.getElementById("create").onclick = function () {
  readForm();
  validation();
  firebase
    .database()
    .ref("submit /" + name)
    .set({
      NAME: name,
      AGE: age,
      COLLEGENAME: collegename,
      DEPARTMENT: department,
      EMAILID: emailid,
      PHONENUMBER: phonenumber,
    });
  alert("form submitted");
  name = document.getElementById("yname").value = "";
  age = document.getElementById("old").value = "";
  collegename = document.getElementById("cname").value = "";
  emailid = document.getElementById("mail").value = "";
  phonenumber = document.getElementById("mnumber").value = "";
};
