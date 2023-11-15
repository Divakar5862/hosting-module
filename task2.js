var firstname, lastname, age, schoolname, tmark, twmark, coursedetails, gender;
function validation() {
  readForm();
  if (firstname == "") {
    alert("please enter your first name");
    firstname.focus();
  }
  if (lastname == "") {
    alert("please enter your last name");
    lastname.focus();
  }
  if (age == "") {
    alert("please enter your age");
    age.focus();
  }
  if (schoolname == "") {
    alert("please enter your previous school name");
    schoolname.focus();
  }
  if (tmark == "") {
    alert("please enter your 10th mark");
    tmark.focus();
  }
  if (twmark == "") {
    alert("please enter your 12th mark ");
    twmark.focus();
  }
  if (coursedetails == "") {
    alert("please enter your course details");
    coursedetails.focus();
  }

  if (gender == "") {
    alert("please enter your gender");
    gender.focus();
  }
  console.log(
    firstname,
    lastname,
    age,
    schoolname,
    tmark,
    twmark,
    coursedetails,
    gender
  );
}
function readForm() {
  firstname = document.getElementById("fname").value;
  lastname = document.getElementById("lname").value;
  age = document.getElementById("age").value;
  schoolname = document.getElementById("sname").value;
  tmark = document.getElementById("10mark").value;
  twmark = document.getElementById("12mark").value;
  coursedetails = document.getElementById("course").value;
  gender = document.getElementById("gen").value;
}
document.getElementById("submit").onclick = function () {
  readForm();
  validation();
  firebase.database().ref("submitted/" +name).set({
      FIRSTNAME:firstname,
      LASTNAME:lastname,
      AGE:age,
      SCHOOLNAME:schoolname,
      TMARK:tmark,
      TWMARK:twmark,
      COURSEDETAILS:coursedetails,
      GENDER:gender,
    });
  alert("form submitted");
};
