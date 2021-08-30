//section.front
const front = document.querySelector('section.front');
const btnStartPortfolio = front.querySelector('.start_portfolio');

// sction.aboutMe
const aboutMe = document.querySelector('section.aboutMe');
const aboutMeContainer = aboutMe.querySelectorAll('li');

// section.myWorks
const myWorks = document.querySelector('.myWorks');
const myWorksContents = myWorks.querySelectorAll('.myWorks_contents');
const myWorksEventBg = myWorks.querySelectorAll('.myWorks_eventBg');
const myWorkLinkGitHub = myWorks.querySelectorAll('.myWork_linkGitHub');

// .viewBox
const viewBox = document.querySelectorAll('.viewBox');

// .viewBox > eventMask
const eventMask = document.querySelectorAll('.eventMask');
const eventContents = document.querySelectorAll('.eventContents');

/* -------------------- scroll event 시작 -------------------- */
// .viewBox handler
let viewBoxInnerH = window.innerHeight;
let viewBoxGoal = new Array();
resetViewBoxGoal();
let playScrollEvent = new Array();
for (var i = 0; i < viewBox.length; i++) {
    playScrollEvent[i] = function (i) {
        playEventMask(i);
    }
};
playScrollEvent[1] = function (i) {
    playEventMask(i);
    addStrokevent();
}

// 화면 크기 변경 시 viewBoxInnerH & viewBoxGoal 갱신
window.addEventListener('resize', function () {
    resetViewBoxInnerH();
    resetViewBoxGoal();
});

function resetViewBoxInnerH() {
    viewBoxInnerH = window.innerHeight;
};

function resetViewBoxGoal() {
    let temp = 0;
    for (var i = 0; i < viewBox.length; i++) {
        temp += viewBox[i].offsetHeight;
        viewBoxGoal[i] = temp;
        viewBoxGoal[i] -= viewBox[i].offsetHeight / 2;
    }
};

// scrollBottom이 각 viewBox 도달 시 playScrollEvent(i) 실행
window.addEventListener('scroll', function () {
    let scrollBottom = window.scrollY + viewBoxInnerH;

    for (var i = viewBoxGoal.length; i >= 0; i--) {
        if (scrollBottom >= viewBoxGoal[i]) {
            playScrollEvent[i](i);
            return
        };
    };
});

// .viewBox > .eventMask
for (var i = 0; i < eventMask.length; i++) {
    eventMask[i].style.display = 'inline-block';
    eventMask[i].style.overflow = 'hidden';
    eventContents[i].style.display = 'inline-block';
    eventContents[i].style.transform = 'translateY(100%)';
};

function playEventMask(target) {
    let eventMaskTarget = viewBox[target].querySelectorAll('.eventContents');
    let ePlayTime = 1;
    let eDelayTime = 0.05;

    for (var i = 0; i < eventMaskTarget.length; i++) {
        eventMaskTarget[i].style.transition = 'transform ' + ePlayTime + 's ease ' + eDelayTime * i + 's';
        eventMaskTarget[i].style.transform = 'translateY(0)';
    };
};

/* -------------------- scroll event 끝 -------------------- */


/* -------------------- section.front 시작 -------------------- */
btnStartPortfolio.addEventListener('click', doStartPortfolio);

function doStartPortfolio(){
    sections[1].scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "start",
    });
};

/* -------------------- section.front 끝 -------------------- */

/* -------------------- section.aboutMe 시작 -------------------- */
for (var i = 0; i < aboutMeContainer.length; i++) {
    let path1 = aboutMeContainer[i].querySelector('.cls-1');
    let path2 = aboutMeContainer[i].querySelector('.cls-2');
    let path1StrokeLength = path1.getTotalLength();
    let path2StrokeLength = path2.getTotalLength();

    path1.style.strokeDasharray = path1StrokeLength;
    path1.style.strokeDashoffset = path1StrokeLength;
    path2.style.strokeDasharray = path2StrokeLength;
    path2.style.strokeDashoffset = path2StrokeLength;
};

function addStrokevent() {
    for (var i = 0; i < aboutMeContainer.length; i++) {
        let path1 = aboutMeContainer[i].querySelector('.cls-1');
        let path2 = aboutMeContainer[i].querySelector('.cls-2');

        path1.style.transition = 'all 0.3s ease'
        path1.style.strokeDashoffset = 0;
        path2.style.transition = 'all 1.5s ease 0.3s'
        path2.style.strokeDashoffset = 0;
    };
};
/* -------------------- section.aboutMe 끝 -------------------- */

/* -------------------- section.myWorks 시작 -------------------- */

for (var i = 0; i < myWorksContents.length; i++) {
    bgAniController(i);
};

function bgAniController(target) {
    myWorksContents[target].addEventListener('mouseenter', function (e) {
        let Y = e.offsetY;
        let myHeight = e.target.offsetHeight / 2;

        if (Y >= myHeight) {
            goUpShowBgAnimation(target);
        } else if (Y < myHeight) {
            goDownShowBgAnimation(target);
        };
    });

    myWorksContents[target].addEventListener('mouseleave', function (e) {
        let Y = e.offsetY;
        let myHeight = e.target.offsetHeight / 2;

        if (Y >= myHeight) {
            goDownHideBgAnimation(target);
        } else if (Y < myHeight) {
            goUpHideBgAnimation(target);
        };
    });
};

// Bg show
function goUpShowBgAnimation(target) {
    let tihsTarget = myWorksEventBg[target];

    tihsTarget.style.transition = "none";
    tihsTarget.style.clipPath = "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)";
    tihsTarget.style.backgroundSize = "100%";
    tihsTarget.offsetHeight; //Repaint

    tihsTarget.style.transition = "all 0.5s ease";
    tihsTarget.style.backgroundSize = "110%";
    tihsTarget.style.clipPath = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";
};

function goDownShowBgAnimation(target) {
    let tihsTarget = myWorksEventBg[target];

    tihsTarget.style.transition = "none";
    tihsTarget.style.clipPath = "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)";
    tihsTarget.style.backgroundSize = "100%";
    tihsTarget.offsetHeight; //Repaint

    tihsTarget.style.transition = "all 0.5s ease";
    tihsTarget.style.backgroundSize = "110%";
    tihsTarget.style.clipPath = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";
};

// Bg hide
function goUpHideBgAnimation(target) {
    let tihsTarget = myWorksEventBg[target];

    tihsTarget.style.clipPath = "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)";
};

function goDownHideBgAnimation(target) {
    let tihsTarget = myWorksEventBg[target];

    tihsTarget.style.clipPath = "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)";
};

// link
myWorksContents[1].addEventListener('click', function(){ window.open('../austem/'); });
myWorksContents[2].addEventListener('click', function(){ window.open('../nespresso/'); });
myWorksContents[3].addEventListener('click', function(){ window.open('../3000/'); });
myWorksContents[4].addEventListener('click', function(){ window.open('../iosTravel/'); });

for(var i = 0; i < myWorkLinkGitHub.length; i++){
    myWorkLinkGitHub[i].addEventListener('click', function(e){
        e.stopPropagation();
    })
};

/* -------------------- section.myWorks 끝 -------------------- */