

var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(xhttp.responseText);
            var samplecard = response.container;
           
            console.log(samplecard.length)

            
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

            document.getElementById("jsonth1").innerHTML = samplecard[0].table1.th1;
            document.getElementById("jsonth2").innerHTML = samplecard[0].table1.th2;
            document.getElementById("jsonth3").innerHTML = samplecard[0].table1.th3;
            document.getElementById("jsonth4").innerHTML = samplecard[0].table1.th4;

            document.getElementById("jsontr11").innerHTML = samplecard[0].tablerow1.tr1;
            document.getElementById("jsontr21").innerHTML = samplecard[0].tablerow1.tr2;
            document.getElementById("jsontr31").innerHTML = samplecard[0].tablerow1.tr3;
            document.getElementById("jsontr41").innerHTML = samplecard[0].tablerow1.tr4;
            document.getElementById("jsontr51").innerHTML = samplecard[0].tablerow1.tr5;
            document.getElementById("jsontr61").innerHTML = samplecard[0].tablerow1.tr6;
            document.getElementById("jsontr71").innerHTML = samplecard[0].tablerow1.tr7;
            document.getElementById("jsontr81").innerHTML = samplecard[0].tablerow1.tr8;
            
            
            document.getElementById("jsontr12").innerHTML = samplecard[0].tablerow2.tr1;
            document.getElementById("jsontr22").innerHTML = samplecard[0].tablerow2.tr2;
            document.getElementById("jsontr32").innerHTML = samplecard[0].tablerow2.tr3;
            document.getElementById("jsontr42").innerHTML = samplecard[0].tablerow2.tr4;
            document.getElementById("jsontr52").innerHTML = samplecard[0].tablerow2.tr5;
            document.getElementById("jsontr62").innerHTML = samplecard[0].tablerow2.tr6;
            document.getElementById("jsontr72").innerHTML = samplecard[0].tablerow2.tr7;
            document.getElementById("jsontr82").innerHTML = samplecard[0].tablerow2.tr8;
            
           

            document.getElementById("jsontr13").innerHTML = samplecard[0].tablerow3.tr1;
            document.getElementById("jsontr23").innerHTML = samplecard[0].tablerow3.tr2;
            document.getElementById("jsontr33").innerHTML = samplecard[0].tablerow3.tr3;
            document.getElementById("jsontr43").innerHTML = samplecard[0].tablerow3.tr4;
            document.getElementById("jsontr53").innerHTML = samplecard[0].tablerow3.tr5;
            document.getElementById("jsontr63").innerHTML = samplecard[0].tablerow3.tr6;
            document.getElementById("jsontr73").innerHTML = samplecard[0].tablerow3.tr7;
            document.getElementById("jsontr83").innerHTML = samplecard[0].tablerow3.tr8;
            
           

            document.getElementById("jsontr14").innerHTML = samplecard[0].tablerow4.tr1;
            document.getElementById("jsontr24").innerHTML = samplecard[0].tablerow4.tr2;
            document.getElementById("jsontr34").innerHTML = samplecard[0].tablerow4.tr3;
            document.getElementById("jsontr44").innerHTML = samplecard[0].tablerow4.tr4;
            document.getElementById("jsontr54").innerHTML = samplecard[0].tablerow4.tr5;
            document.getElementById("jsontr64").innerHTML = samplecard[0].tablerow4.tr6;
            document.getElementById("jsontr74").innerHTML = samplecard[0].tablerow4.tr7;
            document.getElementById("jsontr84").innerHTML = samplecard[0].tablerow4.tr8;
            
           

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
  

  






      
