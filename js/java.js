
//----------------------makes nave bar disappar------------//
$(window).scroll(
    {
        previousTop: 0
    },
    function () {
    var currentTop = $(window).scrollTop();
    if (currentTop < this.previousTop) {
        $("nav").show(800);
    } else {
        $("nav").hide(800);
    }
    this.previousTop = currentTop;
});

//-------------------------end of nav bar disappar----------//
