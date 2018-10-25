function maintable(){
    function tablecreate() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function Table(table,deadline,team,budget,statush) {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(xhttp.responseText);
            var maintable = response.table;
          var table=maintable[0].maintable.projectheader;
          var deadline=maintable[0].maintable.deadlineheader;
          var team=maintable[0].maintable.teamheader;
          var budget=maintable[0].maintable.budgetheader;
          var statush=maintable[0].maintable.statusheader;
          this.table=table;
          this.deadline=deadline;
          this.team=team;
          this.budget=budget;
          this.statush=statush;

                var table = '<tr><th>' + this.table+ '</th>' +
                '<th>' + this.deadline + '</th>' +
                '<th>' + this.team + '</th>' +
                '<th>' + this.budget + '</th>' +
                '<th>' + this.statush + '<th></th></tr></thead>';

               
                for(var r = 1; r < maintable.length; r++){
                    
                    var data = [];
                    data[0] = '<tr><td><p style="color:white">'+maintable[r].maintable.row1+'</p>' +'<p>'+ maintable[r].maintable.row2+ '</p></td>';
                    data[1] = '<td><p>'+maintable[r].maintable.row3+'</p>' +'<p class="text">'+ maintable[r].maintable.row4+ '</p></td>';
                    data[2] ='<td class="member">'+'<figure><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/584938/people_8.png"/></figure>'+'<div class="member-info"><p>'+maintable[r].maintable.row5+'</p><p>'+maintable[r].maintable.row6+'</p></div></td>';
                    data[3] = '<td><p>'+maintable[r].maintable.row7+'</p>'+'<p>'+ maintable[r].maintable.row8+ '</p></td>';
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



    // Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



    var xhttp = new XMLHttpRequest();
    var cards;
    xhttp.onreadystatechange = function (){
    if (this.readyState == 4 && this.status == 200) {
      var response = JSON.parse(xhttp.responseText);
          var Dashboardcards = response.cards;
          
          for(var r = 0; r < Dashboardcards.length; r++){
              
        cards += '<div class="'+Dashboardcards[r].card1.class+'" style="cursor:pointer" onclick="'+Dashboardcards[r].card1.fn+'">'
        +'<div class="title">'+Dashboardcards[r].card1.title+'</div>'+
        '<span class="glyphicon glyphicon-upload"></span>'
        +'<div class="value">'+
        Dashboardcards[r].card1.value+'</div>'
        +'<div  class="stat">'+
        Dashboardcards[r].card1.stat+'</div></div>';
        
    
    }
    document.getElementById("cards").innerHTML = cards;
    console.log(Dashboardcards.length);
    }
    };
    
    xhttp.open("GET", "../Model/Dashboardcards.json", true);
    xhttp.send();
    

  



      
