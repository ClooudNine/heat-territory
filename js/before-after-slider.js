$(document).ready(function () {
    (function($) {
        var $dragMe = $(".dragme"),
            $container = $(".before_and_after__container-item"),
            $viewAfter = $(".view-after");
        $dragMe.draggable({
            containment: "parent",
            drag: function() {
                $viewAfter.css({
                    width : parseFloat($(this).css('left'))
                });
            }
        });
        $container.on("click", function(event) {
            var eventLeft = event.pageX - $container.offset().left - 15;
            animateTo(eventLeft);
        });
        $( window ).on( "resize", function() {
            animateTo("50%");
        } );
        animateTo("50%");
        function animateTo(_left) {
            $dragMe.animate({
                left: _left
            }, 'slow', 'linear');
            $viewAfter.animate({
                width: _left
            }, 'slow', 'linear');
        }
    })(jQuery);
});