// lat: 纬度     lng: 经度     zoom 越大越详细

var map;
function initMap() {

    // 设置中心点
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 38.042014, lng: 114.518306},
        zoom: 15,
        // 设置样式,可以在 https://snazzymaps.com 里面找
        // styles: [
        //     {
        //         "featureType": "water",
        //         "elementType": "geometry",
        //         "stylers": [
        //             {
        //                 "color": "#e9e9e9"
        //             },
        //             {
        //                 "lightness": 17
        //             }
        //         ]
        //     },
        //     {
        //         "featureType": "landscape",
        //         "elementType": "geometry",
        //         "stylers": [
        //             {
        //                 "color": "#f5f5f5"
        //             },
        //             {
        //                 "lightness": 20
        //             }
        //         ]
        //     },
        //     {
        //         "featureType": "road.highway",
        //         "elementType": "geometry.fill",
        //         "stylers": [
        //             {
        //                 "color": "#ffffff"
        //             },
        //             {
        //                 "lightness": 17
        //             }
        //         ]
        //     },
        //     {
        //         "featureType": "road.highway",
        //         "elementType": "geometry.stroke",
        //         "stylers": [
        //             {
        //                 "color": "#ffffff"
        //             },
        //             {
        //                 "lightness": 29
        //             },
        //             {
        //                 "weight": 0.2
        //             }
        //         ]
        //     },
        //     {
        //         "featureType": "road.arterial",
        //         "elementType": "geometry",
        //         "stylers": [
        //             {
        //                 "color": "#ffffff"
        //             },
        //             {
        //                 "lightness": 18
        //             }
        //         ]
        //     },
        //     {
        //         "featureType": "road.local",
        //         "elementType": "geometry",
        //         "stylers": [
        //             {
        //                 "color": "#ffffff"
        //             },
        //             {
        //                 "lightness": 16
        //             }
        //         ]
        //     },
        //     {
        //         "featureType": "poi",
        //         "elementType": "geometry",
        //         "stylers": [
        //             {
        //                 "color": "#f5f5f5"
        //             },
        //             {
        //                 "lightness": 21
        //             }
        //         ]
        //     },
        //     {
        //         "featureType": "poi.park",
        //         "elementType": "geometry",
        //         "stylers": [
        //             {
        //                 "color": "#dedede"
        //             },
        //             {
        //                 "lightness": 21
        //             }
        //         ]
        //     },
        //     {
        //         "elementType": "labels.text.stroke",
        //         "stylers": [
        //             {
        //                 "visibility": "on"
        //             },
        //             {
        //                 "color": "#ffffff"
        //             },
        //             {
        //                 "lightness": 16
        //             }
        //         ]
        //     },
        //     {
        //         "elementType": "labels.text.fill",
        //         "stylers": [
        //             {
        //                 "saturation": 36
        //             },
        //             {
        //                 "color": "#333333"
        //             },
        //             {
        //                 "lightness": 40
        //             }
        //         ]
        //     },
        //     {
        //         "elementType": "labels.icon",
        //         "stylers": [
        //             {
        //                 "visibility": "off"
        //             }
        //         ]
        //     },
        //     {
        //         "featureType": "transit",
        //         "elementType": "geometry",
        //         "stylers": [
        //             {
        //                 "color": "#f2f2f2"
        //             },
        //             {
        //                 "lightness": 19
        //             }
        //         ]
        //     },
        //     {
        //         "featureType": "administrative",
        //         "elementType": "geometry.fill",
        //         "stylers": [
        //             {
        //                 "color": "#fefefe"
        //             },
        //             {
        //                 "lightness": 20
        //             }
        //         ]
        //     },
        //     {
        //         "featureType": "administrative",
        //         "elementType": "geometry.stroke",
        //         "stylers": [
        //             {
        //                 "color": "#fefefe"
        //             },
        //             {
        //                 "lightness": 17
        //             },
        //             {
        //                 "weight": 1.2
        //             }
        //         ]
        //     }
        // ]
    });

    // 标记附近的点
    var data = [
        {
            position: {lat: 38.0431137, lng: 114.5119533},
            map: map,
            title:'北国商城',      // 当鼠标移上去所显示的标题
            icon:'../images/image41-1.jpeg'       // 由于没有合适的 icon ，所以先用图片代替
        },
        {
            position: {lat: 38.0409276, lng: 114.5229074},
            map: map,
            title:'河北省博物馆'      // 当鼠标移上去所显示的标题
        }
    ];
    for(var i = 0;i<data.length;i++){
        var marker = new google.maps.Marker(data[i]);
    }

}