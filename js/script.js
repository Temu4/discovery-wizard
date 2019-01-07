// Accordion
$(".ui.accordion").accordion();

// Dropdown
$(".dropdown").dropdown();


//********************** Steps clicked actions *****************
//for Discovery Source
$(".link.step.source").click(function () {
  $(".link.step.source").css("color", "green");
  $(".label.source").addClass("green");
  $(".accordion > .content.source").toggle();
});
//for Discovery Options
$(".link.step.options").click(function () {
  $(".link.step.options").css("color", "green");
  $(".label.options").addClass("green");
  $(".accordion > .content.options").toggle();
});
//for Discovery Data Input
$(".link.step.data").click(function () {
  $(".link.step.data").css("color", "green");
  $(".label.data").addClass("green");
});


//********************** Discovery Source changing content *****************
//Show content for IP 
$("#ip").click(function () {
  $("#ip-content").show();
});
//Show content for IP Range 
$("#ip-range").click(function () {
  $("#ip-range-content").show();
});
//Show content for CVS
$("#cvs").click(function () {
  $("#cvs-content").show();
});

//IP Toggle 
$("#ip").click(function () {
  if ($("#ip-range-content").show()) {
    $("#ip-range-content").hide();
  }
});

$("#ip").click(function () {
  if ($("#cvs-content").show()) {
    $("#cvs-content").hide();
  }
});

//IP Range Toggle 
$("#ip-range").click(function () {
  if ($("#ip-content").show()) {
    $("#ip-content").hide();
  }
});

$("#ip-range").click(function () {
  if ($("#cvs-content").show()) {
    $("#cvs-content").hide();
  }
});

//CVS Toggle 
$("#cvs").click(function () {
  if ($("#ip-content").show()) {
    $("#ip-content").hide();
  }
});

$("#cvs").click(function () {
  if ($("#ip-range-content").show()) {
    $("#ip-range-content").hide();
  }
});


// Show/hide Selected Options by checking SNMP checkbox
let showContentSelectOptions = function () {
  if ($("input:checked")) {
    $(".accordion > .content.selected-options").toggle();
  }
};

$("#snmp").on("click", showContentSelectOptions);


// Show/hide Read Community input field by choosing SNMP version
//v1-v2
let showContentV1 = function () {
  if ($("input:checked")) {
    $("#v1-segment").show();
  }
};

$("#v1").on("click", showContentV1);
$("#v2").on("click", showContentV1);

//v-3
let showContentV3 = function () {
  if ($("input:checked")) {
    $("#v3-segment").show();
  }
};

$("#v3").on("click", showContentV3);


let Submit = function () {
  alert("Unfortunately, I didn't complete it!")
}