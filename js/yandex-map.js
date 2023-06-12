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