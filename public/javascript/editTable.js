$(document).on('click','.edit', function(){
var row_index=$(this).closest('tr').index();
sessionStorage.setItem("index", JSON.stringify(row_index));
window.location.href = "/new-student";
})