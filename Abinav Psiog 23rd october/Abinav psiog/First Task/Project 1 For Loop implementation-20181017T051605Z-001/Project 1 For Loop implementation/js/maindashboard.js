

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = 

function Cards(projects,count,stat,teammembers,budget,value,customers,projectsth,countth){
if (this.readyState == 4 && this.status == 200) {
  var response = JSON.parse(xhttp.responseText);
      var Dashboardcards = response.cards;

      this.projects=Dashboardcards[0].projects.projects;
      this.count=Dashboardcards[0].projects.count;
      this.stat=Dashboardcards[0].projects.stat;
      this.teammembers=Dashboardcards[0].teammembers.teammembers;
      this.budget=Dashboardcards[0].budget.budget;
      this.value=Dashboardcards[0].budget.value;
      this.customers=Dashboardcards[0].customers.customers;
      this.projectsth=Dashboardcards[0].project.projects;
      this.countth=Dashboardcards[0].project.count;
      

document.getElementById('projectstitle').innerHTML = this.projects;
document.getElementById('projectsstat').innerHTML = this.stat;
document.getElementById('projectscount').innerHTML = this.count;

document.getElementById('teammemberstitle').innerHTML = this.teammembers;
document.getElementById('teammembersstat').innerHTML = this.stat;
document.getElementById('teammemberscount').innerHTML = this.count;

document.getElementById('budgettitle').innerHTML = this.budget;
document.getElementById('budgetstat').innerHTML = this.stat;
document.getElementById('budgetvalue').innerHTML = this.value;

document.getElementById('customerstitle').innerHTML = this.customers;
document.getElementById('customersstat').innerHTML = this.stat;
document.getElementById('customerscount').innerHTML = this.count;

document.getElementById('projects').innerHTML = this.projectsth;
document.getElementById('count').innerHTML = this.countth;

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
                    data[4] = '<td class="status"><span class="status-text status-green">Complete</span></td></tr>'                    
                    
                                     
                                        
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



    // Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


  



      
