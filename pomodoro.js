$(document).ready(function(){
 var min = 24;
var sec = 59;
var over;

var isWorking = true; ///NEW VARIABLE TO MONITOR WHETHER IT'S WORK TIME OR BREAK TIME

var brmin = 4;
var brsec = 59;

//start of work session for pomodoro
function xyz() {
  //alert('is')
  if (isWorking) { ///during worktime

    $(".circle").addClass("wow "); //FOR STARTING WORK ANIMATION

    document.getElementById("abc").innerHTML = min + ":" + sec;

    sec--;

    if (sec < 0 && min == 0) {

      min = 24;
      sec = 59; //SETTING DEFAULT VALUES FOR WORK SESSION SO THATAFTER BREAK WHEN  START IS PRESSED AGAIN,WORK SESSION IS THIS MUCH.
      document.getElementById("abc").innerHTML = "Break Time!";
      $(".circle").removeClass("wow"); //FOR STOPPING WORK ANIMATION

      isWorking = false; //FOR GOING TO BREK SESSION

    }

    if (sec < 0 && min != 0) {
      sec = 59;
      min--;
      if (min == 0 && sec > 0) {
        sec = 60;
        sec--;
      }
    }

  } else if (!isWorking) { ////during breaktime
    $(".circle").addClass("no"); //FOR STARTING BREAK ANIMATION

    document.getElementById("abc").innerHTML = brmin + ":" + brsec;
    //INITIALLY
    brsec--;

    if (brsec < 0 && brmin == 0) {
      //WHEN SECOND AND MINUTE BOTH ARE ZERO

      brmin = 4;
      brsec = 59; //AFTER setting these values for break session I want to end program flow here only.
      document.getElementById("abc").innerHTML = "Start Again!";
      isWorking = true;
      $(".circle").removeClass("wow no"); //REMOVE BOTH ANIMATIONS

      clearInterval(over); //STOP TICKING EVERY SECOND I.E CLEARING 1000MS INTERVAL

    }
    if (brsec < 0 && brmin != 0) {
      brsec = 59; //WHEN SEC IS ZERO AND MINUTE NOT ZERO YET
      brmin--;
      if (brmin == 0 && brsec > 0) {
        brsec = 60; /*WHEN MINUTE ZERO BUT SECOND IS STILL NOT ZERO*/
        brsec--;
      }
    }

  } //end of break!

} //end of whole session

$("#start").click(function() {

  over = setInterval(xyz, 1000);
}); //FOR STARTING ANY SESSION AND SETTING INTERVAL TO 1SEC,I.E CODE WILL GET EXCUTED EVERY SECOND UNTIL CLEARINTERVAL IS USED.

$("#pause").click(
  function() {
    clearInterval(over); //FOR CLEARING INTERVAL OF 1 SEC,IT WILL HELP TO PAUSE

    $(".circle").removeClass("no"); //FOR REMOVING BREAK ANIMATION
    $(".circle").removeClass("wow");
    //FOR REMOVING WORK ANIMATION
  }); //FOR STOPPING ANY SESSION

$("#reset").click(function() {
  min = 24;
  sec = 59; //FOR RESETTING BACK TO ORIGINAL POMODORO LENGTH
  brmin = 4;
  brsec = 59;
  clearInterval(over);
  document.getElementById("abc").innerHTML = min + 1 + ":" + "00";
  $(".circle").removeClass("no wow");
  isWorking = true; //FOR GOING TO WORK SESSION AGAIN
});

$("#decbreak").click(function() {
  if (brmin > 0)
    brmin--; //FOR DECREASING BREAK SESSION

  document.getElementById("brek").innerHTML = brmin + 1;
});

$("#incbreak").click(function() {

  if (brmin <= 49) //MAXIMIMUM VALUE FOR BREAK SESSION
    brmin++; //FOR INCREASING BREAK SESSION
  document.getElementById("brek").innerHTML = brmin + 1;
});

$("#decwork").click(function() {

  if (min > 0)
    min--; //FOR DECREASING WORK SESSION
  document.getElementById("work").innerHTML = min + 1;
});

$("#incwork").click(function() {

  if (min < 249) //MAXIMUM VALUE OF WORKING SESSION
    min++; //FOR INCREASING WORK SESSION
  document.getElementById("work").innerHTML = min + 1;
});
 
});
