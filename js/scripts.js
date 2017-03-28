$(document).ready(function() {

  $("#mainform").submit(function(event){
    event.preventDefault();

    var startingSentence = $("#sent1").val();

    var tmpArray = startingSentence.split("");
    var noAsArray = [];

    console.log("Type of: " , typeof tmpArray[2], tmpArray[2]);

    for (i = 0; i <= (tmpArray.length - 1) ; i++) {

      if (tmpArray[i] != ("a" || "A")) {
        noAsArray.push(tmpArray[i]);
      } else {
        noAsArray.push("-")
      }

    }

    console.log("no As: " , noAsArray);




    $("#output1").text(startingSentence);
    $("#output2").text(tmpArray);


  });

});
