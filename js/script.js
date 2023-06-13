$(document).ready(function () {

    //Слайдер "До" и "После"

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

        //Подключение Яндекс.Карт

        ymaps.ready(init);
        var myMap;

        function init(){
            myMap = new ymaps.Map ("contacts__map", {
                center: [55.687441, 37.288007],
                zoom: 15
            });

            myPlacemark = new ymaps.Placemark([55.687441, 37.288007], {
                hintContent: 'Территория тепла',
                balloonContent: 'Одинцово, ул. Говорова 18А'
            });
            myMap.geoObjects.add(myPlacemark);
        }

        // Галерея изображений

        const swiper = new Swiper('#work_gallery__first', {
            slidesPerView: 3,
            spaceBetween: 30,
            direction: 'horizontal',
            loop: true,
            centeredSlides: true,
            pagination: {
                el: '.swiper-pagination',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        });

        $('#faq__answers').accordion({
            heightStyle: 'content',
            header: '.accordion-item > .accordion-header'
        });
    })(jQuery);
});