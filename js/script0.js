var checkboxValues = JSON.parse(localStorage.getItem('checkboxValues')) || {},
 $checkboxes = $("#checkBoxesInput :checkbox");

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

//==================================================
var t = 0;





function myFunction2() {
var $pop = $('#popUp'),
 checkBox = document.getElementById("checkBoxesInput"),
  v = document.getElementById("button").value,
 el = document.getElementById("button");
var x = t;
console.log("1: X = ",x);
if (x<=0){
  console.log("2: X = ",x);
$pop.show();
}
else {
  console.log("1st hide");
  $pop.hide();
}


 $( "#button" ).click(function() {
  console.log("button clicked");
   x =1;

   if (x=1){
     console.log("2nd Hide");
     console.log("3: X = ",x);
     $pop.hide();
   }
 });

/*
if (x != "") {
console.log("done");
}*/

//}






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


function myFunction4() {

    $("#popUp").css("margin-left", "-625px");
    $("#plus").css("margin-left", "0px");

};
