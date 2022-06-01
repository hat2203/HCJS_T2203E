let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 21.0288058, lng: 105.7804978 },
        zoom: 18,
    });
}

window.initMap = initMap;