

var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(xhttp.responseText);
            var samplecard = response.container;
           
            
            document.getElementById('jsontitle').innerHTML = samplecard[0].card1.title;
            document.getElementById('jsonstat').innerHTML = samplecard[0].card1.stats;
            document.getElementById('jsonvalue').innerHTML = samplecard[0].card1.value;

            document.getElementById('jsontitle1').innerHTML = samplecard[0].card2.title;
            document.getElementById('jsonstat1').innerHTML = samplecard[0].card2.stats;
            document.getElementById('jsonvalue1').innerHTML = samplecard[0].card2.value;

            document.getElementById('jsontitle2').innerHTML = samplecard[0].card3.title;
            document.getElementById('jsonstat2').innerHTML = samplecard[0].card3.stats;
            document.getElementById('jsonvalue2').innerHTML = samplecard[0].card3.value;

            document.getElementById('jsontitle3').innerHTML = samplecard[0].card4.title;
            document.getElementById('jsonstat3').innerHTML = samplecard[0].card4.stats;
            document.getElementById('jsonvalue3').innerHTML = samplecard[0].card4.value;

            document.getElementById('jsonprojects').innerHTML = samplecard[0].card5.projects;
            document.getElementById('jsoncount').innerHTML = samplecard[0].card5.count;
          }
      };
      xhttp.open("GET", "js/Json.json", true);
      xhttp.send();

    

      var Selectize = /** @class */ (function () {
        function Selectize() {
            this.init();
        }
        Selectize.prototype.init = function () {
            var initValue;
            $('.action-box').selectric({
                onInit: function (element) {
                    initValue = $(this).val();
                },
                onChange: function (element) {
                    if ($(this).val() !== initValue)
                        $(element).parents('form').submit();
                }
            });
        };
        return Selectize;
    }());
    new Selectize();
    
    function sample(name)
    {
        var modal = document.getElementById(name);
    
    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");
    
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    
    // When the user clicks the button, open the modal 
        modal.style.display = "block";
    
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    }



    function tablecreate() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(xhttp.responseText);
            var container1 = response.container1;
          
                var table = '<tr><th>' + container1[0].container.th1 + '</th>' +
                '<th>' + container1[0].container.th2 + '</th>' +
                '<th>' + container1[0].container.th3 + '</th>' +
                '<th>' + container1[0].container.th4 + '</th>' +
                '<th>' + container1[0].container.th5 + '<th></th></tr></thead>';

               
                for(var r = 1; r < container1.length; r++){
                    
                    var data = [];
                    data[0] = '<tr><td><p style="color:white">'+container1[r].container.tr1+'</p>' +'<p>'+ container1[r].container.tr2+ '</p></td>';
                    data[1] = '<td><p>'+container1[r].container.tr3+'</p>' +'<p class="text">'+ container1[r].container.tr4+ '</p></td>';
                    data[2] ='<td class="member">'+'<figure><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/584938/people_8.png"/></figure>'+'<div class="member-info"><p>'+container1[r].container.tr5+'</p><p>'+container1[r].container.tr6+'</p></div></td>';
                    data[3] = '<td><p>'+container1[r].container.tr7+'</p>'+'<p>'+ container1[r].container.tr8+ '</p></td>';
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
   
  

    
  



      
