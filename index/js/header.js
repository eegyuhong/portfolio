// header
const header = document.querySelector('header');
const headerLogo = header.querySelector('h1');
const headerLogoPath = headerLogo.querySelectorAll('.header_logo_path');
const headerMenu = header.querySelector('.header_menu');
const headerMenuPath = headerMenu.querySelectorAll('.header_menu_path');
const headerTrackBar = header.querySelector('.header_trackbar');
const headerNav = header.querySelector('nav');
const headerNavLogo = header.querySelector('.header_nav_logo');
const headerNavLogoPath = headerNavLogo.querySelectorAll('.header_nav_logo_path');
const headerNavClose = headerNav.querySelector('.header_close');
const headerNavclosePath = headerNavClose.querySelectorAll('.header_close_path');
const headerNavHr = headerNav.querySelector('hr');
const headerEventMask = headerNav.querySelectorAll('.header_eventMask');
const headerEventContents = headerNav.querySelectorAll('.header_eventContents');
const headerNavItems = headerNav.querySelectorAll('.header_nav_item');
const headerScrTBg = header.querySelector('.header_scrT_Bg');
const headerScrTBgProgressBar = headerScrTBg.querySelector('.header_scrT_Bg_progressBar');


// section
const sections = document.querySelectorAll('section');

// section.front
const mainFront = document.querySelector('section.front');
const mainAboutMe = document.querySelector('section.aboutMe');

/* -------------------- scroll event 시작 -------------------- */
// 화면 크기 변경 시 headerItem 갱신
let headerItem = {
    scrollH: document.body.scrollHeight,
    innerH: window.innerHeight,
};

window.addEventListener('resize', function () {
    resetHeaderItem();
});

function resetHeaderItem() {
    headerItem.scrollH = document.body.scrollHeight;
    headerItem.innerH = window.innerHeight;
};

window.addEventListener('scroll', function () {
    moveTrackBar();
    showTrackBarScrollAnimate();
    showLogoScrollAnimate();
    showMenuScrollAnimate();
    showHeaderScrTBackgroun();
    showHeaderScrTProgressBar();
});

function moveTrackBar() {
    let Y = window.scrollY;
    let trackH = headerItem.scrollH - headerItem.innerH;
    let result = (Y / trackH) * 900;

    headerTrackBar.style.transform = 'translateY(' + result + '%)'
};

function showTrackBarScrollAnimate() {
    let goal = mainAboutMe.getBoundingClientRect().top;
    let myTop = headerTrackBar.getBoundingClientRect().top;
    let myH = window.getComputedStyle(headerTrackBar).getPropertyValue('height');

    myH = parseInt(myH) / 2;
    myTop += myH;

    if (myTop >= goal) {
        headerTrackBar.style.background = "#3f3f3f"
    } else if (myTop < goal) {
        headerTrackBar.style.background = "#dddd"
    }
}

function showLogoScrollAnimate() {
    let goal = mainAboutMe.getBoundingClientRect().top;
    let myTop = headerLogo.getBoundingClientRect().top;
    let myH = window.getComputedStyle(headerLogo).getPropertyValue('height');

    myH = parseInt(myH) / 2;
    myTop += myH;

    if (myTop >= goal) {
        for (var i = 0; i < headerLogoPath.length; i++) {
            headerLogoPath[i].style.stroke = "#3f3f3f"
        }
    } else if (myTop < goal) {
        for (var i = 0; i < headerLogoPath.length; i++) {
            headerLogoPath[i].style.stroke = "#dddddd"
        }
    }
};

function showMenuScrollAnimate() {
    let goal = mainAboutMe.getBoundingClientRect().top;
    let myTop = headerMenu.getBoundingClientRect().top;
    let myH = window.getComputedStyle(headerMenu).getPropertyValue('height');

    myH = parseInt(myH) / 2;
    myTop += myH;


    if (myTop >= goal) {
        for (var i = 0; i < headerMenuPath.length; i++) {
            headerMenuPath[i].style.stroke = "#808080"
        }
    } else if (myTop < goal) {
        for (var i = 0; i < headerMenuPath.length; i++) {
            headerMenuPath[i].style.stroke = "#dddddd"
        }
    }
};
/* -------------------- scroll event 끝 -------------------- */

/* -------------------- nav logo, menu event 시작 -------------------- */
// logo event
let logoBtnFlag = false;
let logoStrokeLength = new Array();
let getLogoTransition = new Array();
for (var i = 0; i < headerLogoPath.length; i++) {
    logoStrokeLength[i] = headerLogoPath[i].getTotalLength();
    headerLogoPath[i].style.strokeDasharray = logoStrokeLength[i];
    headerLogoPath[i].style.strokeDashoffset = 0;
    getLogoTransition[i] = window.getComputedStyle(headerLogoPath[i]).getPropertyValue('transition');
}

headerLogo.addEventListener('click', function () {
    window.scrollTo({
        behavior: 'smooth',
        left: 0,
        top: 0
    });
})

headerLogo.addEventListener('mouseenter', function () {
    playLogoBtnActiveAnimate();
});

function playLogoBtnActiveAnimate() {
    // console.log('진입');
    let endTimer = null;
    let endSecond = 800; // strokeDashoffset 재생시간

    if (!logoBtnFlag) {
        logoBtnFlag = true;

        for (var i = 0; i < headerLogoPath.length; i++) {
            headerLogoPath[i].style.transition = "none";
            headerLogoPath[i].style.strokeDashoffset = 0;
        };

        headerLogo.offsetHeight; //Repaint

        for (var i = 0; i < headerLogoPath.length; i++) {
            headerLogoPath[i].style.transition = getLogoTransition[i];
            headerLogoPath[i].style.strokeDashoffset = logoStrokeLength[i] * -2;
        };

        endTimer = setTimeout(function () {
            logoBtnFlag = false;
        }, endSecond);
    };
};


// menu event
let menuBtnFlag = false;
let menuStrokeLength = headerMenuPath[0].getTotalLength();
let getMenuTransition = new Array();
for (var i = 0; i < headerMenuPath.length; i++) {
    headerMenuPath[i].style.strokeDasharray = menuStrokeLength;
    headerMenuPath[i].style.strokeDashoffset = 0;
    getMenuTransition[i] = window.getComputedStyle(headerMenuPath[i]).getPropertyValue('transition');
};


headerMenu.addEventListener('mouseenter', function () {
    playMenuBtnActiveAnimate();
});

headerMenu.addEventListener('mouseleave', function () {
    playMenuBtnUnActiveAnimate();
});

function playMenuBtnActiveAnimate() {
    // console.log('진입');
    let endTimer = null;
    let endSecond = 1000; // transform + strokeDashoffset 재생시간

    if (!menuBtnFlag) {
        menuBtnFlag = true;

        for (var i = 0; i < headerMenuPath.length; i++) {
            headerMenuPath[i].style.transition = "none";
            headerMenuPath[i].style.strokeDashoffset = 0;
        };

        headerMenu.offsetHeight; //Repaint

        for (var i = 0; i < headerMenuPath.length; i++) {
            headerMenuPath[i].style.transition = getMenuTransition[i];
            headerMenuPath[i].style.strokeDashoffset = menuStrokeLength * -2;
        };

        headerMenuPath[0].style.transform = 'translateY(-10%)';
        headerMenuPath[2].style.transform = 'translateY(10%)';

        endTimer = setTimeout(function () {
            menuBtnFlag = false;
        }, endSecond);
    };
};

function playMenuBtnUnActiveAnimate() {
    // console.log('진출');

    let set = setInterval(function(){
        if (!menuBtnFlag) {
            // console.log('실행');
            clearInterval(set);

            for (var i = 0; i < headerMenuPath.length; i++) {
                headerMenuPath[i].style.transition = getMenuTransition[i];
            }

            headerMenuPath[0].style.transform = 'translateY(0)';
            headerMenuPath[2].style.transform = 'translateY(0)';
        };
    });
};

/* -------------------- nav logo, menu event 끝 -------------------- */

/* -------------------- nav curtain event 시작 -------------------- */

headerMenu.addEventListener('click', onHeaderNav); //네비게이션 호출
headerNavClose.addEventListener('click', offHeaderNav); //네비게이션 닫기
headerNavLogo.addEventListener('click', offHeaderNav); //네비게이션 닫기


// ----------
let headerNavLogoPathStrokeLength = new Array();
let headerNavclosePathStrokeLength = new Array();

for (var i = 0; i < headerNavLogoPath.length; i++) {
    headerNavLogoPathStrokeLength[i] = headerNavLogoPath[i].getTotalLength();

    headerNavLogoPath[i].style.strokeDasharray = headerNavLogoPathStrokeLength[i];
    headerNavLogoPath[i].style.strokeDashoffset = headerNavLogoPathStrokeLength[i];

};

for (var i = 0; i < headerNavclosePath.length; i++) {
    headerNavclosePathStrokeLength[i] = headerNavclosePath[i].getTotalLength();

    headerNavclosePath[i].style.strokeDasharray = headerNavclosePathStrokeLength[i];
    headerNavclosePath[i].style.strokeDashoffset = headerNavclosePathStrokeLength[i];
};

for (var i = 0; i < headerEventMask.length; i++) {
    headerEventMask[i].style.display = 'inline-block';
    headerEventMask[i].style.overflow = 'hidden';
    headerEventContents[i].style.display = 'inline-block';
    headerEventContents[i].style.transform = 'translateY(100%)';
}

// ----------
function onHeaderNav() {
    doVisibleHeaderNav();
    showHeaderNavAnimate();
    showHeaderNavLogoAnimate();
    showHeaderNavCloseAnimate();
    showHeaderNavHrAnimate();
    showHeaderEventContents();
};

function offHeaderNav() {
    hideHeaderNavAnimate();
    hideHeaderNavLogoAnimate();
    hideHeaderNavCloseAnimate();
    hideHeaderNavHrAnimate();
    hideHeaderEventContents();
    doHiddenHeaderNav();
};

function doVisibleHeaderNav(){
    headerNav.style.visibility = 'visible';
};
function doHiddenHeaderNav(){
    setTimeout(function(){
        headerNav.style.visibility = 'hidden';
    }, 1500);
};

function showHeaderNavAnimate() {
    headerNav.style.transitionTimingFunction = 'cubic-bezier(0.16, 1, 0.3, 1)';
    headerNav.style.transform = 'scaleX(1)';
};

function hideHeaderNavAnimate() {
    setTimeout(function(){
        headerNav.style.transitionTimingFunction = 'cubic-bezier(0.7, 0, 0.84, 0)';
        headerNav.style.transform = 'scaleX(0)';
    }, 200);
};

function showHeaderNavLogoAnimate() {
    setTimeout(function () {
        for (var i = 0; i < headerNavLogoPath.length; i++) {
            headerNavLogoPath[i].style.strokeDashoffset = 0;
        };
    }, 200);
};

function hideHeaderNavLogoAnimate() {
    for (var i = 0; i < headerNavLogoPath.length; i++) {
        headerNavLogoPath[i].style.strokeDashoffset = headerNavLogoPathStrokeLength[i];
    };
};

function showHeaderNavCloseAnimate() {
    for (var i = 0; i < headerNavclosePath.length; i++) {
        headerNavclosePath[i].style.transitionDuration = '0s';
        headerNavclosePath[i].style.strokeDashoffset = headerNavclosePathStrokeLength[i];
    };

    headerNavHr.offsetHeight; //Repaint

    setTimeout(function () {
        for (var i = 0; i < headerNavclosePath.length; i++) {
            headerNavclosePath[i].style.transitionDuration = '0.5s';
            headerNavclosePath[i].style.strokeDashoffset = 0;
        };
    }, 800);
};

function hideHeaderNavCloseAnimate() {
    for (var i = 0; i < headerNavclosePath.length; i++) {
        headerNavclosePath[i].style.strokeDashoffset = -headerNavclosePathStrokeLength[i];
    };
};

function showHeaderNavHrAnimate() {
    setTimeout(function () {
        headerNavHr.style.transform = 'scaleX(1)';
    }, 100);
};

function hideHeaderNavHrAnimate() {
    headerNavHr.style.transform = 'scaleX(0)';
};

function showHeaderEventContents() {
    let delay = 0.2;

    for (var i = 0; i < headerEventContents.length; i++) {
        headerEventContents[i].style.transitionDuration = '0s';
        headerEventContents[i].style.transform = 'translateY(100%)';
    }

    headerNavHr.offsetHeight; //Repaint

    for (var i = 0; i < headerEventContents.length; i++) {
        headerEventContents[i].style.transitionDuration = '1s';
        headerEventContents[i].style.transitionDelay = delay * i + 's';
        headerEventContents[i].style.transform = 'translateY(0)';
    }
};

function hideHeaderEventContents() {
    for (var i = 0; i < headerEventContents.length; i++) {
        headerEventContents[i].style.transitionDelay = '0s';
        headerEventContents[i].style.transform = 'translateY(-100%)';
    }
};

// link event
for (var i = 0; i < headerNavItems.length; i++) {
    goScrollToSections(i);
};

function goScrollToSections(target) {
    headerNavItems[target].addEventListener('click', function () {
        offHeaderNav();

        setTimeout(function () {
            sections[target + 1].scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "start",
            });
        }, 1300);
    });
};
/* -------------------- nav curtain event 끝 -------------------- */

/* -------------------- screen 1129px 시작 -------------------- */
function showHeaderScrTBackgroun(){
    let goal = mainAboutMe.getBoundingClientRect().top;
    let myTop = null;
    let myH = window.getComputedStyle(headerLogo).getPropertyValue('height');

    myH = parseInt(myH) / 2;
    myTop += myH;

    if (myTop >= goal) {
        for (var i = 0; i < headerLogoPath.length; i++) {
            headerScrTBg.style.background = '#fff';
            headerScrTBgProgressBar.style.background = '#3f3f3f';

        }
    } else if (myTop < goal) {
        for (var i = 0; i < headerLogoPath.length; i++) {
            headerScrTBg.style.background = 'transparent';
            headerScrTBgProgressBar.style.background = '#dddddd';
        }
    }
};

function showHeaderScrTProgressBar(){
    let Y = window.scrollY;
    let progressBarW = headerItem.scrollH - headerItem.innerH;
    let result = Y / progressBarW;

    headerScrTBgProgressBar.style.transform = 'scaleX('+result+')';
}





/* -------------------- screen 1129px 시작 -------------------- */