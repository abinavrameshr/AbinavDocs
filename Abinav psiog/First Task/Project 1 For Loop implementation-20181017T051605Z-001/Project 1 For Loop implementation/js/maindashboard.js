

var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(xhttp.responseText);
            var Dashboardcards = response.cards;
           
            
            document.getElementById('projectstitle').innerHTML = Dashboardcards[0].projects.projects;
            document.getElementById('projectsstat').innerHTML = Dashboardcards[0].projects.stat;
            document.getElementById('projectscount').innerHTML = Dashboardcards[0].projects.count;

            document.getElementById('teammemberstitle').innerHTML = Dashboardcards[0].teammembers.teammembers;
            document.getElementById('teammembersstat').innerHTML = Dashboardcards[0].teammembers.stat;
            document.getElementById('teammemberscount').innerHTML = Dashboardcards[0].teammembers.count;

            document.getElementById('budgettitle').innerHTML = Dashboardcards[0].budget.budget;
            document.getElementById('budgetstat').innerHTML = Dashboardcards[0].budget.stat;
            document.getElementById('budgetvalue').innerHTML = Dashboardcards[0].budget.value;

            document.getElementById('customerstitle').innerHTML = Dashboardcards[0].customers.customers;
            document.getElementById('customersstat').innerHTML = Dashboardcards[0].customers.stat;
            document.getElementById('customerscount').innerHTML = Dashboardcards[0].customers.count;

            document.getElementById('projects').innerHTML = Dashboardcards[0].project.projects;
            document.getElementById('count').innerHTML = Dashboardcards[0].project.count;
          }
      };
      xhttp.open("GET", "js/Dashboardcards.json", true);
      xhttp.send();

    
function maintable(){
    function tablecreate() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(xhttp.responseText);
            var maintable = response.table;
          
                var table = '<tr><th>' + maintable[0].maintable.projectheader + '</th>' +
                '<th>' + maintable[0].maintable.deadlineheader + '</th>' +
                '<th>' + maintable[0].maintable.teamheader + '</th>' +
                '<th>' + maintable[0].maintable.budgetheader + '</th>' +
                '<th>' + maintable[0].maintable.statusheader + '<th></th></tr></thead>';

               
                for(var r = 1; r < maintable.length; r++){
                    
                    var data = [];
                    data[0] = '<tr><td><p style="color:white">'+maintable[r].maintable.row1+'</p>' +'<p>'+ maintable[r].maintable.row2+ '</p></td>';
                    data[1] = '<td><p>'+maintable[r].maintable.row3+'</p>' +'<p class="text">'+ maintable[r].maintable.row4+ '</p></td>';
                    data[2] ='<td class="member">'+'<figure><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/584938/people_8.png"/></figure>'+'<div class="member-info"><p>'+maintable[r].maintable.row5+'</p><p>'+maintable[r].maintable.row6+'</p></div></td>';
                    data[3] = '<td><p>'+maintable[r].maintable.row7+'</p>'+'<p>'+ maintable[r].maintable.row8+ '</p></td>';
                    data[4] = '<td class="status"><span class="status-text status-green">Complete</span><form class="form" action="#" method="POST"><select class="action-box"><option>Actions</option><option>Start project</option><option>Send for QA</option><option>Send invoice</option></select></form></td></tr>'                    
                    
                                     
                                        
                    for(var c = 0; c < data.length; c++) {
                            table += data[c];
                        
                    }
                    
                    
                
                            
                } 
               
              document.getElementById("tablecreate").innerHTML = table; 
              console.log(table);
                                  
                                    
            }
         };
            xhttp.open("GET", "js/table.json", true);
            xhttp.send();  
        }
        
        document.getElementById("tablecreate").innerHTML= tablecreate();
   
  

    }
  



      
