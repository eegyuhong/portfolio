let sec02 = document.querySelector('.sec02');
let sec02TabParent = sec02.querySelector('.sec02_tab');
let sec02Tabs = sec02TabParent.querySelectorAll('li');
let sec02MapParent = sec02.querySelector('.sec02_map');
let sec02Maps = sec02MapParent.querySelectorAll('p');
let sec02ListParent = sec02.querySelector('.sec02_lists');
let sec02Lists = sec02ListParent.querySelectorAll('.sec02_list');

/* ------------------------------ section02 ------------------------------ */


for(var i = 0; i < sec02Tabs.length; i++){
    doTabClick(i);
    doMapZoom(i);
}

function doTabClick(target){
    sec02Tabs[target].addEventListener('click', function(){
        for(var i = 0; i < sec02Tabs.length; i++){
            sec02Tabs[i].classList.remove('on');
            sec02Maps[i].classList.remove('on');
            sec02Lists[i].classList.remove('on');
        }
        this.classList.add('on');
        sec02Maps[target].classList.add('on');
        sec02Lists[target].classList.add('on');
    });
};

function doMapZoom(target){
    sec02Tabs[target].addEventListener('click', function(){
        if(!target){ // sec02Tabs[0] 클릭 시
            sec02MapParent.style.backgroundPosition = '0 0';
            sec02MapParent.style.backgroundSize = '100%';
        }else if(target){// sec02Tabs[1] 클릭 시
            sec02MapParent.style.backgroundPosition = '100% 20%';
            sec02MapParent.style.backgroundSize = '250%';
        }
    });
};

