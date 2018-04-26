var clicked = 0;

$(document).ready(function(){
    $("#con2").click(function(){
      alert ($("nav").hide(500);)
      clicked = clicked + 1
    });
    $("#con3").click(function(){
      $("nav").hide(500);
      clicked = clicked + 1
    });
    $("#con4").click(function(){
      $("nav").hide(500);
      clicked = clicked + 1
    });
    $("#con5").click(function(){
      $("nav").hide(500);
      clicked = clicked + 1
    });
});
//----------------------makes nave bar disappar------------//
$(window).scroll(
    {
        previousTop: 0
    },
    function () {
    var currentTop = $(window).scrollTop();
    if (currentTop > this.previousTop) {
      if (clicked = 1) {
          $("nav").hide(500);
          clicked = clicked - 1
      } else {
          $("nav").show(500);
          clicked = clicked - 1
      }
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

    $("#con4").mouseenter(function(){
      $("#con4").animate({opacity: '0.5'},200);
    });
    $("#con4").mouseleave(function(){
      $("#con4").animate({opacity: '1'},200);
    });

    $("#con5").mouseenter(function(){
      $("#con5").animate({opacity: '0.5'},200);
    });
    $("#con5").mouseleave(function(){
      $("#con5").animate({opacity: '1'},200);
    });
});

//--------------controlling how nav appers-------------//
