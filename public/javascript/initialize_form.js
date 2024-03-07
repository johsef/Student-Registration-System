var index = JSON.parse(sessionStorage.getItem("index"));
if (index || index == 0) {
  document.getElementById("add").style.display = "none";
  document.getElementById("update").style.display = "";
  Show_User_Data(index);
}

function Show_User_Data(index) {
  var data = JSON.parse(localStorage.getItem("user"));
  var gen_value = data[index].gender;
  if (gen_value == "male") {
    $("#rad_male").prop("checked", true);
  } else {
    $("#rad_female").prop("checked", true);
  }
  $("#fName").val(data[index].first_name);
  $("#lName").val(data[index].last_name);
  $("#age").val(data[index].age);
  $("#email").val(data[index].email);
  $("#level").val(data[index].level);
  $("#pnumber").val(data[index].phonenumber);
  $("#address").val(data[index].address);
}

$(document).on("click", "#update", function (event) {
  event.preventDefault();
  var index = JSON.parse(sessionStorage.getItem("index"));
  var data = JSON.parse(localStorage.getItem("user"));

  var user_data = Add_User_Data();
  data.splice(index, 1, user_data);
  localStorage.setItem("user", JSON.stringify(data));
  clear_Form_Data();
  sessionStorage.removeItem("index");
  window.location.href = "/home";
});

document.getElementById("add").addEventListener("click", function () {
  var form = document.getElementById("formUser");
  if (!form.checkValidity()) {
    return;
  }
  var user1 = localStorage.getItem("user");
  if (!user1) {
    user1 = "[]";
  }
  var user_data = Add_User_Data();
  var user = JSON.parse(user1);
  user.push(user_data);
  localStorage.setItem("user", JSON.stringify(user));
  window.location.href = "/home";
  clear_Form_Data();
});

function Add_User_Data() {
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
  User.first_name = document.getElementById("fName").value;
  User.last_name = document.getElementById("lName").value;
  User.age = document.getElementById("age").value;
  User.email = document.getElementById("email").value;
  var radio = document.getElementsByName("gender");
  for (var j = 0; j < radio.length; j++) {
    if (radio[j].checked) {
      User.gender = radio[j].value;
      break;
    }
  }
  User.level = document.getElementById("level").value;
  User.phonenumber = document.getElementById("pnumber").value;
  User.address = document.getElementById("address").value;
  return User;
}

function clear_Form_Data() {
  $("#formUser")[0].reset();
  $("#rad_male").attr("checked", false);
  $("#rad_female").attr("checked", false);
}
