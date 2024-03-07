(function showTable() {
  var data = JSON.parse(localStorage.getItem("user"));
  if (!data) {
    data = [];
  }
  if (data.length > 0) {
    var render = `<h2 class='text-center'>Registered Students</h2>
                  <div class='input-search'><input id='search' type='text' placeholder='Search here...' onkeyup></div> 
                  <div id='tab' class='table-wrapper-scroll-y table-responsive my-custom-scrollbar'>
                  <table class='table table-bordered table-sm' id='tbl'>`;
    render += `<tr class='tbh'>
                    <th onclick='sortTable(0)'>First Name</th>
                    <th onclick='sortTable(1)'>Last Name</th>
                    <th onclick='sortTable(2)'>Age</th>
                    <th onclick='sortTable(3)'>E-mail</th>
                    <th onclick='sortTable(4)'>Gender</th>
                    <th onclick='sortTable(5)'>Level</th>
                    <th onclick='sortTable(6)'>Phone Number</th>
                    <th onclick='sortTable(7)'>Address</th>
                    <th>Action</th>
                    </tr>
                    <tbody id='t-body'>`;

    for (i = 0; i < data.length; i++) {
      var dat = data[i];
      render += "<tr> <td>" + dat.first_name + "</td>";
      render += "<td>" + dat.last_name + "</td>";
      render += "<td>" + dat.age + "</td>";
      render += "<td>" + dat.email + "</td>";
      render += "<td>" + dat.gender + "</td>";
      render += "<td>" + dat.level + "</td>";
      render += "<td>" + dat.phonenumber + "</td>";
      render += "<td>" + dat.address + "</td>";
      render +=
        `<td>
        <button class='btn btn-warning edit btn-sm'><span class='glyphicon glyphicon-edit'></span></button>
        <button class='btn btn-danger delete'><span class='glyphicon glyphicon-remove-circle'></span></button>
        </td>
        </tr>`;
    }
    render += "</tbody></table></div>";
    document.getElementById("adminTable").innerHTML = render;

    document.getElementById("AdminText").style.display = "none";
  }
})();
