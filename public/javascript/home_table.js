(function display() {
    var users = JSON.parse(localStorage.getItem("user"));
    if (!users) {
      users = [];
    }
    if (users.length > 0) {
      var table = `<h2 class='text-center'>Registered Students</h2>
        <div class='input-search'><input id='search' type='text' placeholder='Search here...' onkeyup='searchTable()'></div> 
        <div id='tab' class='table-wrapper-scroll-y table-responsive custom-scrollbar'>
          <table class='table table-bordered table-sm' id='homeTable'>`;
           table += `<tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Age</th>
                <th>E-mail</th>
                <th>Gender</th>
                <th>Level</th>
                <th>Phone Number</th>
                <th>Address</th>
                </tr>
            <tbody id='t-body'>`;
      for (i = 0; i < users.length; i++) {
        var user = users[i];
        table += "<td>" + user.first_name + "</td>";
        table += "<td>" + user.last_name + "</td>";
        table += "<td>" + user.age + "</td>";
        table += "<td>" + user.email + "</td>";
        table += "<td>" + user.gender + "</td>";
        table += "<td>" + user.level + "</td>";
        table += "<td>" + user.phonenumber + "</td>";
        table += "<td>" + user.address + "</td></tr>";
      }
      table += "</tbody></table></div>";
      document.getElementById("home_table").innerHTML = table;
      document.getElementById("no-student").style.display = "none";
    }
  })();