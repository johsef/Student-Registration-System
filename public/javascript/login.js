$(document).on("click", "#login", function () {
  if ( document.getElementById("username").value && document.getElementById("password").value !== "admin") {
    $(".incorrect").show();
    setTimeout(() => {
      $(".incorrect").hide();
    }, 1000);
  } else if ( document.getElementById("username").value && document.getElementById("password").value === "admin") {
    var user = document.getElementById("username").value;
    sessionStorage.setItem("user", user);
    setTimeout(() => {
        $(".login").show();
      }, 1000);
  }
});
