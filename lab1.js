function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
$(document).on("pagecreate","#pageone",function(){
$("#pageone").bind("swipeleft", function()
{
    $(this).css({
    'background-image': 'url(Images/color.jpg)',
    'background-repeat' : 'no-repeat'
});
});


           $("#pageone").bind("swiperight", function()
{
    $(this).css({
    'background-image': 'url(Images/back2.png)',
    'background-repeat' : 'no-repeat'
});
});
  $.mobile.loading( 'show', { theme: "b", text: "", textonly: false});

  });      



