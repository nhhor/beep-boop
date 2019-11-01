// --- BUSINESS LOGIC---

function numberBeepBoop(numberInput) {
  // CREATE RANGE ARRAY FROM 0 TO NUMBER INPUT:
  numberArray = [];
  for (var index = 0; index <= numberInput; index ++) {
    numberArray.push(index);
  }

  // ITERATE OVER NUMBERARRAY TO REPLACE 3S, 2S, AND 1S:
  beepBoopArray = [];
  numberArray.forEach(function(number){
    if (number.toString().includes("3") === true) {
      beepBoopArray.push("I'm sorry, Dave. I'm afraid I can't do that.");
    }
    else if (number.toString().includes("2") === true) {
      beepBoopArray.push("Boop!");
    }
    else if (number.toString().includes("1") === true) {
      beepBoopArray.push("Beep!");
    }
    else {
      beepBoopArray.push(number);
    }
  });

  return beepBoopArray;
}

// USER LOGIC

$(document).ready(function(){
  $("#userForm").submit(function(event){
    event.preventDefault();

    // CAPTURE USER'S NUMBER (AND NAME):
    var numberInput = parseInt($("#userNumber").val());
    var nameInput = $("#userName").val();

    // FUNCTION RETURNS ARRAY TO DOM WHEN CALLED:
    function printArray(array){
      // REMOVE ALL CHILDREN OF RESULT-LIST ON (NEW) SUBMIT:
      $("#resultList").children().remove();

      array.forEach(function(number,index){
        if (number === "I'm sorry, Dave. I'm afraid I can't do that.") {
          if (nameInput === "") {
            $("#resultList").append("<li class='dave'>"+": "+number+"</li>");
          }
          else if (index % 3 === 0) {
            $("#resultList").append("<li class='dave'>"+": "+number.slice(0,11)+nameInput+number.slice(-29,number.length)+"</li>");
          }
          else {
            $("#resultList").append("<li class='dave'>"+": "+number+"</li>");
          }
        }
        else if (number === "Boop!") {
          $("#resultList").append("<li class='boop'>"+": "+number+"</li>");
        }
        else if (number === "Beep!") {
          $("#resultList").append("<li class='beep'>"+": "+number+"</li>");
        }
        else {
          $("#resultList").append("<li class='normal'>"+": "+number+"</li>");
        }
      });
    };


    setTimeout(() => {
      $("#delay1").fadeIn(1000);
      $(".initialSpaceSection").slideUp(500);
      $(".resultSection").slideUp(500);
    }, 500);

    setTimeout(() => {
      $("#delay2").fadeIn(1000);
      $(".resultSection").slideDown();
    }, 1000);

    setTimeout(() => {
      $("#delay3").fadeIn(1000);
      $(".remixButton").fadeIn(2000);
    }, 1500);

    setTimeout(() => {

    // CALL PRINTARRAY FUNCTION TO DISPLAY IN DOM FOR BEEPBOOPARRAY:
    printArray(numberBeepBoop(numberInput));
    $("body").css("background","linear-gradient(0deg, rgba(0,128,128,.5) 0%, rgba(255,255,255,0) 3%, rgba(255,255,255,0) 60%, rgba(0,128,128,0.5) 100%)");

    // REVERSE DOM DISPLAY OF ARRAY:
    $(".remixButton").click(function(){
      // printArray(beepBoopArray.reverse());
      printArray(numberBeepBoop(numberInput).reverse());
      $("body").css("background","linear-gradient(0deg, rgba(255,128,128,.5) 0%, rgba(255,255,255,0) 3%, rgba(255,255,255,0) 60%, rgba(255,128,128,0.5) 100%)");
    });
    $("#delay1").fadeOut();
    $("#delay2").fadeOut();
    $("#delay3").fadeOut();
  }, 3000);

  });
});
