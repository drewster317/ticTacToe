$(document).ready(function() {
  $('#Hide').on('click', function() {
    $("#game-register").addClass('hide');
  });
  $('#Show').on('click', function() {
    $("#game-register").removeClass('hide');
  });
});


 //Global Variables

 var painted;
 var content;
 var winningCombinations;
 var turn = 0;
 var theCanvas;
 var c;
 var cxt;
 var squaresFilled = 0;
 var w;
 var y;
 var gameId;
 var cell;
 var token;
// Arrays



  var painted = new Array();
  var content = new Array();
  winningCombinations = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
  for(var i = 0; i <= 8; i++){
  painted[i] = false;
  content[i]='';
 }



//Game methods

var canvasClicked = function canvasClicked(canvasNumber){

    var theCanvas = "canvas"+canvasNumber;
    c = document.getElementById(theCanvas);
    cxt = c.getContext("2d");
    if(painted[canvasNumber-1] ===false){
    if(turn % 2 === 0){

      cxt.beginPath();
      cxt.moveTo(10,10);
      cxt.lineTo(140,140);
      cxt.moveTo(140,10);
      cxt.lineTo(10,140);
      cxt.lineWidth = 12;
      cxt.lineCap = 'round';
      cxt.strokeStyle = '#ffffff';
      cxt.stroke();
      cxt.closePath();
      content[canvasNumber-1] = 'X';

}
     else{

      cxt.beginPath();
      cxt.arc(75,75,70,0,Math.PI*2,true);
      cxt.lineWidth = 9;
      cxt.strokeStyle = '#ffffff';
      cxt.stroke();
      cxt.closePath();
      content[canvasNumber-1] = 'O';
}

      turn++;
      painted[canvasNumber-1] = true;
      squaresFilled++;
      checkForWinners(content[canvasNumber-1]);

    if(squaresFilled==9){

      location.reload(true);
  }
}

    else{

      alert("THERE IS ALREADY SOMEONE THERE! DUH!");

  }
}

var checkForWinners = function checkForWinners(symbol){
    for(var a = 0; a < winningCombinations.length; a++){

    if(content[winningCombinations[a][0]] ==symbol&&content[winningCombinations[a][1]]==symbol&&content[winningCombinations[a][2]]==symbol){

      alert(symbol + " WON!");
        playAgain();

  }
 }
}

var playAgain = function playAgain(){
   y = confirm("PLAY AGAIN?");
  if(y === true){
  location.reload(true);
}

    else{

      alert("RUN AWAY! RUN AWAY!");
      location.reload(true);
}


}






