$(document).ready(function(){
    $("ui").slice(2).css("color", "lightBlue");

    //Code Click
  $("#codeCss").click(function () {
   
    // alert("You have just successfully executed a JQuery click method");
    console.log("Single Click Method Executed");
    $('#aboutCss').removeClass("hide");
    $("#codeCss").addClass("hide");

    $("#codCss").removeClass("hide");
   $("#mainCss").addClass("hide");
  });
  //About Click
  $("#singleA").click(function () {
    var codeContent = $("#sc p:last");
    var aboutContent = $("#sc p:first");
    var cb = $("#bC a:last");
    var ab = $("#bC a:first");
    codeContent.addClass("hide");
    aboutContent.removeClass("hide");
    ab.addClass("hide");
    cb.removeClass("hide");
  });
    
  });