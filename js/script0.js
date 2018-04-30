function myFunction2() {
var $pop = $('#popUp'),
		  $agree = $('#agree');

$pop.show();

    $("#popUp").css("margin-left", "0px");
    $("#plus").css("margin-left", "-625px");


  $("#close").click(function() {
    $("#popUp").css("margin-left", "-625px");
    $("#plus").css("margin-left", "0px");

  });
	$("#submitB").click(function() {
		$("#popUp").css("margin-left", "-625px");
		$("#plus").css("margin-left", "0px");

	});

}

$(document).scroll(function() {
  var scroll = $(this).scrollTop();
  if (scroll >= 150) {
    $("#popUp").css("margin-left", "-505px");
    $("#plus").css("margin-left", "0px");
}
});
