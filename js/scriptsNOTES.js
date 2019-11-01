
// WORKING CODE BEFORE TESTS:
beepBoopArray.forEach(function(number,index){
  if (number === "I'm sorry, Dave. I'm afraid I can't do that.") {
    if (nameInput === "") {
      $("#resultList").append("<li class='dave'>"+index+": "+number+"</li>");
    }
    else {
      $("#resultList").append("<li class='dave'>"+index+": "+number.slice(0,11)+nameInput+number.slice(-29,number.length)+"</li>");
    }
  }
  else if (number === "Boop!") {
    $("#resultList").append("<li class='boop'>"+index+": "+number+"</li>");
  }
  else if (number === "Beep!") {
    $("#resultList").append("<li class='beep'>"+index+": "+number+"</li>");
  }
  else {
    $("#resultList").append("<li class='normal'>"+index+": "+number+"</li>");
  }
});
