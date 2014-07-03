$(function(){
  var colors = ["000000", "454545"];
  var randomIndex = Math.floor(Math.random() * colors.length);
  console.log(randomIndex);
  $("body").css({
    backgroundColor: '#' + colors[randomIndex]
  });
});