var boughtTypewriter = 0;
var boughtPiano = 0;
var boughtCup = 0;

$(document).ready(function(){
  $("button#typewriter").click(function(){
    boughtTypewriter += 1;
    console.log(boughtTypewriter + " typewriter");
  });
  $("button#piano").click(function(){
    boughtPiano += 1;
    console.log(boughtPiano + " piano");
  });
  $("button#cup").click(function(){
    boughtCup += 1;
    console.log(boughtCup + " cup");
  });
  $("#checkout").click(function(event){
    var name = $("input.firstName").val();
    var address = $("input.address").val();

    $('.firstName').text(name);
    $('.address').text(address);
    $('.cup').text(boughtTypewriter + " typewriter");
    $('.piano').text(boughtPiano + " piano");
    $('.typewriter').text(boughtCup + " cup");

    $("#letter").show();

    event.preventDefault();
  });
});
