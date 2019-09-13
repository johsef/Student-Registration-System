
    $(document).on('click','.edit', function(event){
          event.preventDefault();
         document.getElementById('showForm').style.display='';
          document.getElementById('adminTable').style.display='none';

          document.getElementById('add').style.display='none';
          document.getElementById('update').style.display='';

          var data=JSON.parse(localStorage.getItem("user"));
          window.row_index=$(this).closest('tr').index();
          var gen_value=data[row_index].gender;
          if(gen_value=='male'){
            $('#rad_male').prop('checked', true);  
          }else{
              $('#rad_female').prop('checked', true);  
          }
  
          $('#fName').val(data[row_index].fname);
          $('#lName').val(data[row_index].lname);
          $('#age').val(data[row_index].age);
          $('#email').val(data[row_index].email);
          $('#level').val(data[row_index].level);
          $('#pnumber').val(data[row_index].phonenumber);
          $('#address').val(data[row_index].address);
          localStorage.setItem('user', JSON.stringify(data));
         
          
          })