function sortTable(n){
    var switchcount=0;
    var x,y;
    switching=true;
    dir='asc';
    var ro=document.getElementById('tbl').rows;

    while(switching){
        switching=false;
        var ro=document.getElementById('tbl').rows;
        for(var i=1; i<(ro.length-1); i++){
            shouldSwitch=false;
            x=ro[i].getElementsByTagName('td')[n];
            y=ro[i+1].getElementsByTagName('td')[n];

            x=Number(x.innerHTML.toLowerCase()) ? Number(x.innerHTML.toLowerCase()):x.innerHTML.toLowerCase();
            y=Number(y.innerHTML.toLowerCase()) ? Number(y.innerHTML.toLowerCase()):y.innerHTML.toLowerCase();

           if(dir=="asc"){
                if(x>y){
                    shouldSwitch=true;
                    break;

                }
           } 
            else if(dir=="desc"){
                if(x<y){
                    shouldSwitch=true;
                    break;
                }
            }

        }

       
        if(shouldSwitch){
            ro[i].parentNode.insertBefore(ro[i+1], ro[i]);
            switching=true;
            switchcount++;
        }
        else{
            if(switchcount==0 && dir=='asc'){
                dir='desc';
                switching=true;
            }
        }

    }


}
    