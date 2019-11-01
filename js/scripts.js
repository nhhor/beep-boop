// BUSINESS LOGIC
numberInput = "";

// NUMBER TO RANGE:
numberArray = [];
function numberToRange(numberInput) {
  for (var index = 0; index <= numberInput; index ++) {
    numberArray.push(index);
  }
}


function test(numberArray.forEach(number)) {
  console.log(number);
});

// USER LOGIC

$(document).ready(function(){
  $("#userForm").submit(function(event){
    event.preventDefault();

    var numberInput = $("#userNumber").val();

    numberToRange(numberInput);
    test();

    console.log(numberArray);

    $("#resultList").append("<li>"+numberInput+"</li>");

  });
});
