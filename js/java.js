var clicked = 0;
//----------------------makes nave bar disappar------------//
$(window).scroll(
    {
        previousTop: 0
    },
    function () {
    var currentTop = $(window).scrollTop();
    if (currentTop > this.previousTop) {
        $("nav").hide(500);
    } else {
        $("nav").show(500);
    }
    this.previousTop = currentTop;
});
//-------------------------color change of navs----------//
$(document).ready(function(){
    $("#con1").mouseenter(function(){
      $("#con1").animate({opacity: '0.5'},200);
    });
    $("#con1").mouseleave(function(){
      $("#con1").animate({opacity: '1'},200);
    });
    $("#con2").mouseenter(function(){
      $("#con2").animate({opacity: '0.5'},200);
    });
    $("#con2").mouseleave(function(){
      $("#con2").animate({opacity: '1'},200);
    });
    $("#con3").mouseenter(function(){
      $("#con3").animate({opacity: '0.5'},200);
    });
    $("#con3").mouseleave(function(){
      $("#con3").animate({opacity: '1'},200);
    });
});
