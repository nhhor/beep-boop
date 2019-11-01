// --- BUSINESS LOGIC---

// NUMBER TO RANGE:
function numberBeepBoop(numberInput) {
  numberArray = [];
  for (var index = 0; index <= numberInput; index ++) {
    numberArray.push(index);
  }
  console.log(numberArray);



  return numberArray;
}

// USER LOGIC

$(document).ready(function(){
  $("#userForm").submit(function(event){
    event.preventDefault();

    var numberInput = $("#userNumber").val();

    // CALL BUSINESS LOGIC TO RETURN ARRAY:
    numberBeepBoop(numberInput);

    // RETURN ARRAY TO DOM:
    numberArray.forEach(function(number){
        $("#resultList").append("<li>"+number+"</li>");
      });



  });
});
