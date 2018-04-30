var checkboxValues = JSON.parse(localStorage.getItem('checkboxValues')) || {},
    $checkboxes = $("#checkbox-container :checkbox");

$checkboxes.on("change", function(){
  $checkboxes.each(function(){
    checkboxValues[this.id] = this.checked;
  });

  localStorage.setItem("checkboxValues", JSON.stringify(checkboxValues));
});

// On page load
$.each(checkboxValues, function(key, value) {
  $("#" + key).prop('checked', value);

});

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


	$(document).ready(function() {
  $("#notification-dropdown").hover(function(e) {
    var $btn = $('button', this);
    if (!$btn.hasClass('clicked')) {
      $btn.css("backgroundColor", e.type == 'mouseenter' ? "#fff" : '#9d9d9d');
    }
  }).click(function() {
    $('button', this).addClass('clicked').css("backgroundColor", 'red');

  })


});
};
