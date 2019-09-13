$(document).on('click','#update',function(event){
    event.preventDefault();
    document.getElementById('showForm').style.display='none';
            
    document.getElementById('update').style.display='none';
    document.getElementById('add').style.display='none';
    var User = {
          fname:"",
          lname: "",
          age :"",
          email:"",
          gender: " ",
          level : "",
          phonenumber :"",
          address:"",
          
     }
    var data=JSON.parse(localStorage.getItem("user"));
    User.fname=document.getElementById('fName').value;
    User.lname=document.getElementById('lName').value;
    User.age=document.getElementById('age').value;
    User.email=document.getElementById('email').value;
    var radio=document.getElementsByName("gender");
    for (var j=0; j<radio.length; j++){
        if(radio[j].checked){
            User.gender=radio[j].value;
            break;
        }
    }
    User.level=document.getElementById('level').value;
    User.phonenumber=document.getElementById('pnumber').value;
    User.address=document.getElementById('address').value;

    data.splice(window.row_index,1,User);
    localStorage.setItem('user', JSON.stringify(data));

    $('#formUser')[0].reset();
    $('#rad_male').attr('checked', false);
    $('#rad_female').attr('checked', false);
    window.location.href='./home';
}
)