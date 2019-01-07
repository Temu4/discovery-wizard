// Accordion
$(".ui.accordion").accordion();

// Dropdown
$(".dropdown").dropdown();

// Discovery Source changing content
$("#ip").click(function() {
  $("#ip-content").show();
});

$("#ip-range").click(function() {
  $("#ip-range-content").show();
});

$("#cvs").click(function() {
  $("#cvs-content").show();
});

$("#ip").click(function() {
  if ($("#ip-range-content").show()) {
    $("#ip-range-content").hide();
  }
});

$("#ip").click(function() {
  if ($("#cvs-content").show()) {
    $("#cvs-content").hide();
  }
});

$("#ip-range").click(function() {
  if ($("#ip-content").show()) {
    $("#ip-content").hide();
  }
});

$("#ip-range").click(function() {
  if ($("#cvs-content").show()) {
    $("#cvs-content").hide();
  }
});

$("#cvs").click(function() {
  if ($("#ip-content").show()) {
    $("#ip-content").hide();
  }
});

$("#cvs").click(function() {
  if ($("#ip-range-content").show()) {
    $("#ip-range-content").hide();
  }
});
