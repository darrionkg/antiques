$(document).ready(function(){
  $("button#typewriter").click(function(){
    var boughtTypewriter = 1;
    console.log(boughtTypewriter);
  });
  $("button#piano").click(function(){
    var boughtPiano = 1;
    console.log(boughtPiano);
  });
  $("button#cup").click(function(){
    var boughtCup = 1;
    console.log(boughtCup);
  });
  $("#checkout").click(function(event){
    var name = $("input.firstName").val();
    var address = $("input.address").val();

    $('.firstName').text(name);
    $('.address').text(address);

    $("#letter").show();

    event.preventDefault();
  });
});
