let main = document.querySelector('main');
let mainBg = document.createElement('div');
let imgBg = document.createElement('div');
let imgArea = document.createElement('img');
let titlArea = document.createElement('p');
let imgCtl = document.createElement('dl');
let imgCtltitl = document.createElement('dt');
let PrevBtn = document.createElement('dd');
let NextBtn = document.createElement('dd');
let sec02ImgsParent = document.querySelector('.sec02_imgs_ul');
let sec02Imgs = sec02ImgsParent.querySelectorAll('li');

main.insertBefore(mainBg, null);
mainBg.classList.add('mainBg');

mainBg.insertBefore(imgBg, null);
imgBg.classList.add('imgBg');

imgBg.insertBefore(imgArea, null);
imgArea.classList.add('imgArea');
// imgArea.src = '../../imgs/activity/activity_03/1.png';
// imgArea.alt = '사진 제목';

imgBg.insertBefore(titlArea, null);
titlArea.classList.add('titlArea');
// titlArea.innerText = '사진 제목 노출 영역';

imgBg.insertBefore(imgCtl , null);
imgCtl.insertBefore(imgCtltitl , null);
imgCtltitl.innerHTML = '이미지 컨트롤 버튼'
imgCtltitl.classList.add('hidden');
imgCtl.insertBefore(PrevBtn , null);
PrevBtn.classList.add('PrevtBtn');
imgCtl.insertBefore(NextBtn , null);
NextBtn.classList.add('NextBtn');

// thumbnail 클릭 시 ----------------------------------------
let xIdx = null;
let scrollLockY = null;

for(var i = 0; i < sec02Imgs.length - 2; i++){// 이벤트 등록
    doImgsClick(i);
}

function doImgsClick(target){
    sec02Imgs[target].addEventListener('click', function(){
        xIdx = target;

        doToggleImgBg();
        doGetUrl(xIdx);
        doGetTitle(xIdx);
        doBtnColorChange(xIdx);

        //스크롤락
        scrollLockY = window.scrollY;
        window.addEventListener('scroll', disableScrolling);
    });
    
};

function doGetUrl(xIdx){
    let url = window.getComputedStyle(sec02Imgs[xIdx]).backgroundImage;
    url = url.substring(5, url.length - 2);
    
    imgArea.src = url;
};

function doGetTitle(xIdx){
    let title = sec02Imgs[xIdx].children[0].children[0].innerText;
    
    imgArea.alt = title;
    titlArea.innerText = title;
};

function doToggleImgBg(){// thumbnail 클릭 시 mainBg 노출
    mainBg.classList.add('on');
};

// PrevBtn / NextBtn 클릭 이벤트
PrevBtn.addEventListener('click', function(){
    xIdx--;

    if(xIdx <= 0){
        xIdx = 0;
    }

    doGetUrl(xIdx);
    doGetTitle(xIdx);
    doBtnColorChange(xIdx);
});
NextBtn.addEventListener('click', function(){
    xIdx++;

    if(xIdx >= sec02Imgs.length - 3){
        xIdx = sec02Imgs.length - 3;
    }

    doGetUrl(xIdx);
    doGetTitle(xIdx);
    doBtnColorChange(xIdx);
});

function doBtnColorChange(xIdx){// first or last 이미지 active 되면 PrevBtn/NextBtn 버튼 감추기
    if(xIdx == 0){
        PrevBtn.classList.add('off')
    }else if(xIdx == sec02Imgs.length - 3){
        NextBtn.classList.add('off')
    }else{
        PrevBtn.classList.remove('off')
        NextBtn.classList.remove('off')
    }
};

// mainBg 클릭 시 mainBg 닫기
mainBg.addEventListener('click', function(event){
    //스크롤락
    window.removeEventListener('scroll', disableScrolling);
    mainBg.classList.remove('on');
    event.stopPropagation();
});

imgBg.addEventListener('click', function(event){
    event.stopPropagation();
});

// mainBg active 중 스크롤 중단
function disableScrolling(){
    window.scrollTo(0, scrollLockY);
}