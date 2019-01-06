$(".ui.accordion").accordion();

$(".dropdown").dropdown();

$("#target").select(function() {
  $(".button").toggle();
});

$("#target").select(function() {
  alert("Handler for .select() called.");
});
