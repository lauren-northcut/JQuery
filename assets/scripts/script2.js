$(document).ready(() => {
  $("#button").click(() => {
    // button area
    var ajaxB = $("#cS a:first");
    var getB = $("#cS a:last");
    // content area
    var ajaxL = $("#ajaxArea p:last");
    var ajaxF = $("#ajaxArea p:first");

    ajaxF.addClass("hide");
    ajaxL.removeClass("hide");
    ajaxB.removeClass("hide");
    getB.addClass("hide");
    $.ajax({
      method: "GET",
      url: "https://www.boredapi.com/api/activity",
    }).done(function (response) {
      console.log("Testing");
      console.log(response.activity);
      const theData = response.activity;
      $("#placement").text(theData);
    });
  });


  
  $("#btn").click(() => {
    // button area
    var getB2 = $("#getArea2 a:last");
    var GetB = $("#getArea2 a:first");
    // content area
    var getL = $("#cS2 p:first");
    var getF = $("#cS2 p:last");

    getF.removeClass("hide");
    getL.addClass("hide");
    getB2.addClass("hide");
    GetB.removeClass("hide");
    $.get("https://api.ipify.org?format=json", (data) => {
      console.log(data);
      var info = data.ip;
      console.log(info);
      $("#place").text(info);
    });
  });

  // about ajax
  $("#abtn").click(() => {
    $("#abt").addClass("hide");
    $("#button").removeClass("hide");
    $("#a2").addClass("hide");
    $("#a1").removeClass("hide");
  });


  // about get
  $("#gbtn").click(() => {
    $("#gbtn").addClass("hide");
    $("#btn").removeClass("hide");
    $("#g2").addClass("hide");
    $("#g1").removeClass("hide");
  });
});
