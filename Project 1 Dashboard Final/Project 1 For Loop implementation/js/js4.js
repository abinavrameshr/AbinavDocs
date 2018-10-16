function sample4(){

function tablecreate() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var response = JSON.parse(xhttp.responseText);
        var container1 = response.container1;
      
            var table = '<tr><th>' + container1[0].container.th1 + '</th>' +
            
            '<th>' + container1[0].container.th5 + '<th></th></tr></thead>';

           
            for(var r = 1; r < container1.length; r++){
                
                var data = [];
                data[0] = '<tr><td><p style="color:white">'+container1[r].container.tr1+'</p>' +'<p>'+ container1[r].container.tr2+ '</p></td>';
                
                data[4] = '<td class="status"><span class="status-text status-green">Complete</span><form class="form" action="#" method="POST"><select class="action-box"><option>Actions</option><option>Start project</option><option>Send for QA</option><option>Send invoice</option></select></form></td></tr>'                    
                
                                 
                                    
                for(var c = 0; c < data.length; c++) {
                        table += data[c];
                    
                }
                
                
            
                        
            } 
           
          document.getElementById("tablecreate").innerHTML = table; 
          console.log(table);
                              
                                
        }
     };
        xhttp.open("GET", "js/Json2.json", true);
        xhttp.send();  
    }
    
    document.getElementById("tablecreate").innerHTML= tablecreate();

}