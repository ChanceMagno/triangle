

$(document).ready(function(){
  $("form").submit(function() {
    var food = parseInt($("select#question1").val());
    var vacation = parseInt($("select#question2").val());
    var car = parseInt($("select#question3").val());
    var totalScore = car + vacation + food;

    if (food === 0 || vacation === 0 || car === 0) {
      $(".alert-danger").show();

    } else {
      if(totalScore <= 3){
        $(".lindseyLohan").show();
        $(".steveBuscemi, .jamesMarsden").hide();


      } else if ((totalScore > 3) && (totalScore < 7)) {
          $(".jamesMarsden").show();
          $(".steveBuscemi, .lindseyLohan").hide();


      }  else {
          $(".steveBuscemi").show();
          $(".jamesMarsden, .lindseyLohan").hide();

      }
      }


    event.preventDefault();
  });
});
