
//==================================================
var t = 0;

var $pop = $('#popUp');

$('#C4').click(function(){
  var errr = $(this);
  console.log("Which Button ",errr);

    if ($(this).attr('data-once')!='already_clicked' ){
        //your code here

var  checkBox = document.getElementById("checkBoxesInput"),
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


    }
    else ;
});
$("#close").click(function() {
  $("#popUp").css("margin-left", "-625px");
  $("#plus").css("margin-left", "0px");

});
function myFunction6() {

      $pop = $('#popUp');
      $pop.show();

};
function myFunction4() {

    $("#popUp").css("margin-left", "-625px");
    $("#plus").css("margin-left", "0px");

};
