function newcustomerstable(){

function tablecreate() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var response = JSON.parse(xhttp.responseText);
        var maintable1 = response.table;
      
            var table = '<tr><th>' + maintable1[0].maintable.projectheader + '</th>' +
            
            '<th>' + maintable1[0].maintable.statusheader + '<th></th></tr></thead>';

           
            for(var r = 1; r < maintable1.length; r++){
                
                var data = [];
                data[0] = '<tr><td><p style="color:white">'+maintable1[r].maintable.row1+'</p>' +'<p>'+ maintable1[r].maintable.row2+ '</p></td>';
                
                data[4] = '<td class="status"><span class="status-text status-green">Complete</span></td></tr>'                    
                
                                 
                                    
                for(var c = 0; c < data.length; c++) {
                        table += data[c];
                    
                }
                
                
            
                        
            } 
           
          document.getElementById("tablecreate").innerHTML = table; 
          console.log(table);
                              
                                
        }
     };
        xhttp.open("GET", "../Model/table.json", true);
        xhttp.send();  
    }
    
    document.getElementById("tablecreate").innerHTML= tablecreate();

}