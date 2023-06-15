$(document).ready(function () {

    //Слайдер "До" и "После"

    (function($) {
        var $dragMeFirst = $("#drag-first"),
            $containerFirst = $("#before_and_after-pictures__first"),
            $viewAfterFirst = $("#view-after-first"),
            $dragMeSecond = $("#drag-second"),
            $containerSecond = $("#before_and_after-pictures__second"),
            $viewAfterSecond = $("#view-after-second");
        $dragMeFirst.draggable({
            containment: "parent",
            drag: function() {
                $viewAfterFirst.css({
                    width : parseFloat($(this).css('left'))
                });
            }
        });
        $dragMeSecond.draggable({
            containment: "parent",
            drag: function() {
                $viewAfterSecond.css({
                    width : parseFloat($(this).css('left'))
                });
            }
        });
        $containerFirst.on("click", function(event) {
            var eventLeft = event.pageX - $containerFirst.offset().left - 15;
            animateTo(eventLeft, $dragMeFirst, $viewAfterFirst);
        });
        $containerSecond.on("click", function(event) {
            var eventLeft = event.pageX - $containerSecond.offset().left - 15;
            animateTo(eventLeft, $dragMeSecond, $viewAfterSecond);
        });
        $( window ).on( "resize", function() {
            animateTo("50%", $dragMeFirst, $viewAfterFirst);
            animateTo("50%", $dragMeSecond, $viewAfterSecond);
        } );
        animateTo("50%", $dragMeFirst, $viewAfterFirst);
        animateTo("50%", $dragMeSecond, $viewAfterSecond);
        function animateTo(_left, dragMe, viewAfter) {
            dragMe.animate({
                left: _left
            }, 'slow', 'linear');
            viewAfter.animate({
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

        const swiperWorkFirst = new Swiper('#work_gallery__first', {
            slidesPerView: 3,
            centeredSlides: true,
            loop: true,
            spaceBetween: 30,
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        });

        const swiperWorkSecond = new Swiper('#work_gallery__second', {
            slidesPerView: 2,
            loop: true,
            spaceBetween: 30,
            pagination: {
                el: '#rigid_ppu__carousel-pagination',
                clickable: true
            },
            navigation: {
                nextEl: '#rigid_ppu__carousel-next',
                prevEl: '#rigid_ppu__carousel-prev',
            }
        });

        const swiperRigidPpu = new Swiper('#rigid_ppu__carousel', {
            slidesPerView: 2,
            loop: true,
            spaceBetween: 30,
            pagination: {
                el: '#rigid_ppu__carousel-pagination',
                clickable: true
            },
            navigation: {
                nextEl: '#rigid_ppu__carousel-next',
                prevEl: '#rigid_ppu__carousel-prev',
            }
        });

        $('.accordion-item').accordion({
            collapsible: true,
            active: false,
            heightStyle: 'content',
            header: '.accordion-header'
        });
    })(jQuery);
});