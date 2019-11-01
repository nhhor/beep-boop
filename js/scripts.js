// --- BUSINESS LOGIC---

function numberBeepBoop(numberInput) {

  // CREATE RANGE ARRAY FROM 0 TO NUMBER INPUT:
  numberArray = [];
  for (var index = 0; index <= numberInput; index ++) {
    numberArray.push(index);
  }
  console.log("numberArray: ",numberArray);

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
  console.log("beepBoopArray: ",beepBoopArray);

  return beepBoopArray;
}

// USER LOGIC

$(document).ready(function(){
  $("#userForm").submit(function(event){
    event.preventDefault();

    // REMOVE ALL CHILDREN OF RESULT-LIST ON NEW SUBMIT:
    $("#resultList").children().remove();

    // CAPTURE USER'S NUMBER:
    var numberInput = parseInt($("#userNumber").val());

    // CALL BUSINESS LOGIC TO RETURN ARRAY:
    numberBeepBoop(numberInput);

    // RETURN ARRAY TO DOM:
    beepBoopArray.forEach(function(number){
        $("#resultList").append("<li>"+number+"</li>");
      });



  });
});
