$(document).ready(function() {

  $("#mainform").submit(function(event){
    event.preventDefault();

    var startingSentence = $("#sent1").val();

    var tmpArray = startingSentence.split("");
    var noAsArray = [];

    // console.log("Type of: " , typeof tmpArray[2], tmpArray[2]);

    for (i = 0; i <= (tmpArray.length - 1) ; i++) {
      if ( (tmpArray[i] === "a") || (tmpArray[i] === "A") )  {
        noAsArray.push("-");
      } else if ( (tmpArray[i] === "e") || (tmpArray[i] === "E") ) {
        noAsArray.push("-");
      } else if ( (tmpArray[i] === "i") || (tmpArray[i] === "I") ) {
        noAsArray.push("-");
      } else if ( (tmpArray[i] === "o") || (tmpArray[i] === "O") ) {
        noAsArray.push("-");
      } else if ( (tmpArray[i] === "u") || (tmpArray[i] === "U") ) {
        noAsArray.push("-");
      } else {
        noAsArray.push(tmpArray[i]);
      }
    }

    noAsArray = noAsArray.join("");

    $("#output1").text(startingSentence);
    $("#output2").text(noAsArray);


  });

});
