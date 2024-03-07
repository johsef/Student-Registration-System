$(document).on("keyup", "#search", function () {
  var value = $(this).val().toLowerCase();
  $("#t-body tr").filter(function () {
    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
  });
});
