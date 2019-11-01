// BUSINESS LOGIC



// USER LOGIC
$(document).ready(function(){
  $("#userForm").submit(function(event){
    event.preventDefault();

    var numberInput = $("#userNumber").val();
    $("#resultList").append("<li>"+numberInput+"</li>");

  });
});
