$(document).ready(function () {
  // Single Click
  //   Code
  $("#single").click(function () {
    var codeContent = $("#sc p:last");
    var aboutContent = $("#sc p:first");
    var cb = $("#bC a:last");
    var ab = $("#bC a:first");
    alert("You have just successfully executed a JQuery click method");
    console.log("Single Click Method Executed");
    codeContent.removeClass("hide");
    aboutContent.addClass("hide");

    ab.removeClass("hide");
    cb.addClass("hide");
  });
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

  // Double Click
  $("#double").dblclick(() => {
    alert("Great job double clicking");
    console.log("Double Click Method Executed");
    $("#double").addClass("hide");
    $("#dbA").removeClass("hide");
    $("#cA").removeClass("hide");
    $("#sA").addClass("hide");
    $(".dbl").each(function (index, element) {
      // element == this
      $(element).css("backgroundColor", "black");
      if ($(this).is("#HERE")) {
        // $("#bs").text("Stopped at div index #" + index);
        return false;
      }
    });
  });

  $("#dbA").click(() => {
    $("#cA").addClass("hide");
    $("#double").removeClass("hide");
    $("#dbA").addClass("hide");
    $("#sA").removeClass("hide");
  });
});
