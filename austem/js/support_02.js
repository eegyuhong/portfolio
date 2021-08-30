/* ------------------------------ map api ------------------------------ */
/* -------------------- 위,경도 -------------------- */
var mapContX0 = 36.75533667792193;
var mapContY0 = 127.29259216920791;
var mapContX1 = 37.49391491717278;
var mapContY1 = 126.65294729866585;
var mapContX2 = 34.76436654933997;
var mapContY2 = 126.45754059862975;

var container = document.getElementById('map');
var options = {
    center: new kakao.maps.LatLng(mapContX0, mapContY0), //원하는 위치 위,경도
    level: 3 //지도 확대 정도
};

var map = new kakao.maps.Map(container, options);

var positions = [{
        content: '<div class="sec02_MapMarker">오스템 [본사]</div>',
        latlng: new kakao.maps.LatLng(mapContX0, mapContY0)
    },
    {
        content: '<div class="sec02_MapMarker">기술연구소[인천]</div>',
        latlng: new kakao.maps.LatLng(mapContX1, mapContY1)
    },
    {
        content: '<div class="sec02_MapMarker">아이비머티리얼즈</div>',
        latlng: new kakao.maps.LatLng(mapContX2, mapContY2)
    }
];

for (var i = 0; i < positions.length; i++) {
    var marker = new kakao.maps.Marker({
        map: map,
        position: positions[i].latlng
    });

    var infowindow = new kakao.maps.InfoWindow({
        content: positions[i].content
    });


    kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow));
    kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));
}

function makeOverListener(map, marker, infowindow) {
    return function () {
        infowindow.open(map, marker);
    };
}

function makeOutListener(infowindow) {
    return function () {
        infowindow.close();
    };
}

/* -------------------- section02 버튼 이벤트 -------------------- */
let sec02Tab = document.querySelector('.sec02_tab');
let sec02TabBtn = sec02Tab.querySelectorAll('li');
let sec02AdrBox = document.querySelector('.sec02_addressBox');
let sec02Adr = sec02AdrBox.querySelectorAll('div');

console.log(sec02TabBtn);

for (var i = 0; i < sec02TabBtn.length; i++) {
    doToggleClass(i);
    panTo(i);
}

function doToggleClass(target) { // 토글 클래스
    sec02TabBtn[target].addEventListener('click', function () {
        for (var i = 0; i < sec02TabBtn.length; i++) {
            sec02TabBtn[i].classList.remove('on');
            sec02Adr[i].classList.remove('on');
        }
        sec02TabBtn[target].classList.add('on');
        sec02Adr[target].classList.add('on');
    });
};

function panTo(target) { // 이도 이동
    sec02TabBtn[target].addEventListener('click', function(){
        var tempX = eval('mapContX'+target);
        var tempY = eval('mapContY'+target);
        var moveLatLon = new kakao.maps.LatLng(tempX, tempY);
        
        map.panTo(moveLatLon);   
    });
};