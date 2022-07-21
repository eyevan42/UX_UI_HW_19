var rotateDegrees= 0;
$("#img1").click(function(){
    rotateDegrees +=90;
    $("#img1 img").css("transform","rotate("+ rotateDegrees +"deg)");
});