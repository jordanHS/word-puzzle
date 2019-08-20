var userInput;

var isVowel = function(letter){
  return (letter === "a" || letter === "e"
  || letter === "i" || letter === "o"
  || letter === "u");
}

$(document).ready(function(){
  $(".theform").submit(function(event){
    userInput = $("#inputText").val().split("");
    $("#inputText").val("");
    for(var i = 0; i < userInput.length; i++){
      if(isVowel(userInput[i])){
        userInput[i] = "-";
      }
      $(".output").append(userInput[i]);
    }
    event.preventDefault();
  });
});
