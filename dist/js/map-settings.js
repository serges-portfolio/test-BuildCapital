function initMap() {
    var urulu = {lat: 52.407636, lng: 16.932857};
    var map = new google.maps.Map(document.querySelector('#map'), {
        center: {lat: 52.407636, lng: 16.932857},
        scrollwheel: false,
        zoom: 15
    });
    var marker = new google.maps.Marker({
        position: urulu,
        map: map,
        icon: 'assets/marker.svg'
    });
}
