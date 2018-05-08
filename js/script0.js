

$(document).ready(function(){


var $pop = $('#popup');


    $("#close").click(function() {
      $("#popUp").css("margin-left", "-625px");
      $("#plus").css("margin-left", "0px");

    });


	$(document).ready(function() {
  $("#notification-dropdown").hover(function(e) {
    var $btn = $('button', this);
      if (!$btn.hasClass('clicked')) {
        var d = e.type
      //  var g = $btn.hasClass
        console.log("hover type= ",d);

      $btn.css("backgroundColor", e.type == 'mouseenter' ? "#fff" : '#9d9d9d');
      }
  }).click(function() {
    //  $('button', this).addClass('clicked').css("backgroundColor", 'red');
        })
    });


    //}
    //else ;
});


function myFunction6() {

      $pop = $('#popUp');
      $pop.show();

};
