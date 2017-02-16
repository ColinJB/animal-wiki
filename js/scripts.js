$(document).ready(function(event){

  $(".radio").change(function(){
    var animal = $("input:radio[name=animal]:checked").val();

    if (animal === "snake") {
      $("#snakeInfo").show();
      $("#pigsInfo").hide();
      $("#donkeyInfo").hide();
    } else if (animal === "pig"){
      $("#pigsInfo").show();
      $("#snakeInfo").hide();
      $("#donkeyInfo").hide();
    } else {
      $("#donkeyInfo").show();
      $("#snakeInfo").hide();
      $("#pigsInfo").hide();
    }
  });
});
