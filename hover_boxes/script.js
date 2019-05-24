$(".move-button").on("click", function() {
  console.log("I work uwu");
});

function hideCards() {
  $("#card-1").removeClass("showme");
  $("#card-2").removeClass("showme");
  $("#card-3").removeClass("showme");
}

$(document).ready(function() {
  $("#card-1").addClass("showme");
});

$("#right").on("click", function() {
  if ($("#card-2").hasClass("showme")) {
    hideCards();
    $("#card-1").addClass("showme");
  } else {
    hideCards();
    $("#card-2").addClass("showme");
  }
});

$("#left").on("click", function() {
  if ($("#card-3").hasClass("showme")) {
    hideCards();
    $("#card-1").addClass("showme");
  } else {
    hideCards();
    $("#card-3").addClass("showme");
  }
});
