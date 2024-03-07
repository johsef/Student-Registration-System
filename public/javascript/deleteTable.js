$(document).on('click','.delete', function(){
        
    var data=JSON.parse(localStorage.getItem("user"));
    var row_index=$(this).closest('tr').index();
    $(this).closest('tr').remove();
    data.splice(row_index,1);
    localStorage.setItem('user', JSON.stringify(data));
    
})