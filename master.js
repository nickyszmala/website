$(function(){
  var colors = ["000000", "304356"];
  var randomIndex = Math.floor(Math.random() * colors.length);
  // console.log(randomIndex);
  $("body").css({
    backgroundColor: '#' + colors[randomIndex]
  });
});