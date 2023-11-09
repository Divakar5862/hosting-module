var uname, password;
function validation() {
  readForm();

  if (uname == "") {
    alert("please enter your usernamr");
    uname.focus();
  }
  if (password == "") {
    alert("please enter your password ");
    password.focus();
  }
  console.log(uname, password);
}
function readForm() {
  uname = document.getElementById("name").value;
  password = document.getElementById("pass").value;
}
document.getElementById("b1").onclick = function () {
  readForm();
  validation();

  firebase
    .database()
    .ref("submitted/" + name)
    .set({
      USERNAME: uname,
      PASSWORD: password,
    });
  alert("form submitted");
};
