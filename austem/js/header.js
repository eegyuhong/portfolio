window.onload = function () {
    let header = document.querySelector('header');
    let headerBg = document.createElement('div'); // headerBg 로 사용할 div 생성
    let headerCurtain = document.createElement('div'); // header mouseenter/leave 시 배경으로 사용할 div 생성

    let hdScrollitem = {
        top: 0,
        prevTop: 0,
        curtainDst: 0,
    }

    /* ------------------------------ header scroll ------------------------------ */
    window.addEventListener('scroll', function (e) {
        hdScrollitem.top = window.scrollY;
        doHeaderSlide()
        doChangeHdBgColor()
        hdScrollitem.prevTop = hdScrollitem.top;
    });


    /* ------------------------------ header slide 이벤트------------------------------ */
    function doHeaderSlide() {
        let temp = 0;

        temp = (hdScrollitem.top - hdScrollitem.prevTop) * -1;
        hdScrollitem.curtainDst += temp;

        if (hdScrollitem.curtainDst >= 0) {
            hdScrollitem.curtainDst = 0;
        } else if (hdScrollitem.curtainDst <= -80) {
            hdScrollitem.curtainDst = -80;
        }

        header.style.top = hdScrollitem.curtainDst / 10 + 'rem';
    };

    /* ------------------------------ header backgroun-color 변경 ------------------------------ */
    let hdSec01Height = document.querySelector('.sec01').offsetHeight - 80;

    header.prepend(headerBg); // 배경 div를 header의 firstChild 로 추가
    headerBg.className = 'headerBg';

    function doChangeHdBgColor() {
        let temp = 0;

        temp = hdScrollitem.top - hdSec01Height;
        if (temp >= 80) {
            temp = 80;
        } else if (temp <= 0) {
            temp = 0;
        }

        headerBg.style.height = temp / 10 + 'rem'
    };


    /* ------------------------------ headerCurtain 애니메이션 ------------------------------ */
    let headerActive = null;

    header.prepend(headerCurtain); // 배경 div를 header의 firstChild 로 추가
    headerCurtain.className = 'headerCurtain';

    header.addEventListener('mouseenter', function () {
        headerCurtain.style.height = 32 + 'rem';
        doStartHeaderActive();
    });

    header.addEventListener('mouseleave', function () {
        doStopHeaderActive();
        headerCurtain.style.height = 0;
        header.style.height = 8 + 'rem';
    });

    // header 딜레이 100ms로 인해 빠르게 mouseleave 시 Bg 없이 nav만 노출 됨
    // nav만 노출 방지하기 위해 clearTimeout 적용
    function doStartHeaderActive() {
        headerActive = setTimeout(function () { // headerCurtain와 header의 (css)transition duration 맞추기 위해 사용
            header.style.height = 32 + 'rem';
        }, 100); // header 80px -> 320px 0.3s, headerCurtain 0px -> 320px 0.4s :::: 80px 당 0.1s
    };

    function doStopHeaderActive() {
        if (headerActive != null) {
            clearTimeout(headerActive);
        }
    };
};