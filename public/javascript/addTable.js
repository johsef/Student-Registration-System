document.getElementById("add").addEventListener("click", function () {
  var User = {
    first_name: "",
    last_name: "",
    age: "",
    email: "",
    gender: " ",
    level: "",
    phonenumber: "",
    address: "",
  };
  var form = document.getElementById("formUser");
  if (!form.checkValidity()) {
    return;
  }
  User.first_name = document.getElementById("fName").value;
  User.last_name = document.getElementById("lName").value;
  User.age = document.getElementById("age").value;
  User.email = document.getElementById("email").value;
  var radio = document.getElementsByName("gender");
  for (var j = 0; j < radio.length; j++) {
    if (radio[j].checked) {
      User.gender = radio[j].value;
      break;s
    }
  }
  User.level = document.getElementById("level").value;
  User.phonenumber = document.getElementById("pnumber").value;
  User.address = document.getElementById("address").value;

  var user1 = localStorage.getItem("user");
  if (!user1) {
    user1 = "[]";
  }
  var user = JSON.parse(user1);

  user.push(User);
  localStorage.setItem("user", JSON.stringify(user));
  window.location.href = "/home";

  $("#formUser")[0].reset();
  $("#rad_male").attr("checked", false);
  $("#rad_female").attr("checked", false);
});
