

$(document).ready(function(){
  $("form").submit(function() {
    var side1 = parseInt($("#number1").val());
    var side2 = parseInt($("#number2").val());
    var side3 = parseInt($("#number3").val());

    if (side1 + side2 <= side3 || side2 + side3 <= side1 || side1 + side3 <= side2) {
      $(".notTriangle").show();
      $(".isosceles, .scalene, .equilateral").hide();
      
    } else if (side1 === side2 && side1 === side3 && side2 === side3) {
      $(".equilateral").show();
      $(".isosceles, .scalene, .notTriangle").hide();

    } else if (side1 === side2 && side2 !== side3 || side3 === side2 && side2 !== side1 || side1 === side3 && side1 !== side2) {
       $(".isosceles").show();
       $(".equilateral, .scalene, .notTriangle").hide();

    } else if (side1 !== side2 && side1 !== side3 && side2 !== side3) {
      $(".scalene").show();
      $(".isosceles, .equilateral, .notTriangle").hide();
    }

    event.preventDefault();
  });
});
