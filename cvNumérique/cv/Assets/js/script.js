//Animation jquery pour gérer le fonctionnement des liens de navigation
$(document).ready(function(){
  $('#presentLink').click(function(){
    $('#present').show();
    $('#languages').hide();
    $('#formations').hide();
    $('#experiences').hide();
    $('#skills').hide();
  });
  $('#languagesLink').click(function(){
    $('#languages').show();
    $('#present').hide();
    $('#formations').hide();
    $('#experiences').hide();
    $('#skills').hide();
  });
  $('#formationLink').click(function(){
    $('#formations').show();
    $('#present').hide();
    $('#languages').hide();
    $('#experiences').hide();
    $('#skills').hide();
  });
  $('#experienceLink').click(function(){
    $('#experiences').show();
    $('#present').hide();
    $('#languages').hide();
    $('#formations').hide();
    $('#skills').hide();
  });
  $('#skillsLink').click(function(){
    $('#skills').show();
    $('#present').hide();
    $('#languages').hide();
    $('#formations').hide();
    $('#experiences').hide();
  });
});
//Fonction javascript pour gérer le fonctionnement de l'accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}