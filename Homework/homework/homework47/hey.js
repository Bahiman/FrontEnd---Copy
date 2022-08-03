$('.rotate').hover(function () {
    $(this).addClass("animate");
    $(this).one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',
        function (e) {

            $(this).removeClass('rotate').addClass('rotated');

        });

});