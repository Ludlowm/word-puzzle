$(document).ready(function() {

  $("#mainform").submit(function(event){
    event.preventDefault();

    var startingSentence = $("#sent1").val();

    $("#output1").text(startingSentence);
    $("#output2").text();
  });

});
