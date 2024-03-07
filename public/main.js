var index = JSON.parse(sessionStorage.getItem("index"));
if (index || index == 0) {
  sessionStorage.removeItem("index");
}

if (
  $(document).on("click", "#logout", () => {
    sessionStorage.removeItem("user");
    $(".alert").show();
  })
) {
}
