var myIndex = 0;
slide();
function slide() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(slide, 3000);
}
$(document).ready(function()
// dogToggle starts
{
  $("#dogToggle").click(function()
{
  $("#dogShowing").toggle(800);
    $("#dogHidden").toggle(800);
});
$("#dogToggle1").click(function()
{
$("#dogShowing").toggle(800);
  $("#dogHidden").toggle(800);
});
// dogToggle ends
// cctvToggle starts
  $("#cctvToggle").click(function()
{
  $("#cctvShowing").toggle(800);
    $("#cctvHidden").toggle(800);
});
$("#cctvToggle1").click(function()
{
$("#cctvShowing").toggle(800);
  $("#cctvHidden").toggle(800);
});
// cctvToggle ends
// cyberToggle starts
$("#cyberToggle").click(function()
{
$("#cyberShowing").toggle(800);
  $("#cyberHidden").toggle(800);
});
$("#cyberToggle1").click(function()
{
$("#cyberShowing").toggle(800);
$("#cyberHidden").toggle(800);
});
// cyberToggle ends
// electricToggle starts
$("#electricToggle").click(function()
{
$("#electricShowing").toggle(800);
  $("#electricHidden").toggle(800);
});
$("#electricToggle1").click(function()
{
$("#electricShowing").toggle(800);
$("#electricHidden").toggle(800);
});
// electricToggle ends
});
