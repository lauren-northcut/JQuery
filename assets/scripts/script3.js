$(document).ready(function(){

    //Code Click - CSS (slice)
  $("#codeCss").click(function () {
    $("ui").slice(2).css("color", "lightBlue");

    // alert("You have just successfully executed a JQuery click method");
    $('#aboutCss').removeClass("hide");
    $("#codeCss").addClass("hide");

    $("#codCss").removeClass("hide");
   $("#mainCss").addClass("hide");
  });




  //About Click - CSS (slice)
  $("#aboutCss").click(function () {
    $('#aboutCss').addClass("hide");
    $("#codeCss").removeClass("hide");

    $("#codCss").addClass("hide");
   $("#mainCss").removeClass("hide");
  });
  

  // Code Click - CSS (ancestor)


  // About Click - CSS (ancestor)
    
  });