var display = `<h2 class='text-center'>List of Customers from Online Platforms</h2>
              <div id='tab' class='table-wrapper-scroll-y table-responsive custom-scrollbar'>
              <table class='table table-bordered table-sm mb-0'>`;
display += `<tr>
            <th>Name</th>
            <th>Username</th>
            <th>E-mail</th>
            <th>Phonenumber</th>
            <th>Website</th>
            </tr>
            <tbody id='t-body'>`;
for (i = 0; i < 11; i++) {
  fetch("https://jsonplaceholder.typicode.com/users?id=" + i)
    .then((response) => response.json())
    .then((response) => {
      display +=
        `<tr>
          <td>` +
        response[0].name +
        `</td>
                <td>` +
        response[0].username +
        `</td>
                <td>` +
        response[0].email +
        `</td>
                <td>` +
        response[0].phone +
        `</td>
                <td>` +
        response[0].website +
        `</td>
                </tr>`;
      document.getElementById("dummyUser").innerHTML = display;
    })
    .catch((err) => {
      console.log(err);
    });
}
