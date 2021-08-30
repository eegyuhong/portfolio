let sec01 = document.querySelector('.sec01');
let sec01Icomore = sec01.querySelector('.ico_more');
let sec02 = document.querySelector('.sec02');
let sec02ConBox = sec02.querySelectorAll('.sec02_conBox');
let sec03 = document.querySelector('.sec03');
let sec03ShowBox = sec03.querySelector('.sec03_showBox');
let sec03Cons = sec03.querySelectorAll('.sec03_cons');
let sec03BtnPrev = sec03.querySelector('.sec03_conBtn_prev');
let sec03BtnNext = sec03.querySelector('.sec03_conBtn_next');
let sec03Dot = sec03.querySelectorAll('.sec03_conNav');
let sec04 = document.querySelector('.sec04');

/* ------------------------------ section01 ------------------------------ */
/* -------------------- sec01Icomore 애니메이션 -------------------- */
doGoDownIcoMore();
doGoUpIcoMore();

setInterval(function () {
    doGoDownIcoMore();
    doGoUpIcoMore();
}, 2000);

function doGoDownIcoMore() {
    sec01Icomore.style.transform = 'translateY(4.8rem)';
};

function doGoUpIcoMore() {
    setTimeout(function () {
        sec01Icomore.style.transform = 'translateY(0)';
    }, 1000)
};

/* ------------------------------ section02 ------------------------------ */
/* -------------------- sec02IcoMore 애니메이션 -------------------- */
for (var i = 0; i < sec02ConBox.length; i++) {
    let from = window.getComputedStyle(sec02ConBox[i]).transform;
    let to = doFindDirection(from);
    let target = doFindTarget(i);

    sec02ConBox[i].addEventListener('mouseenter', function () {
        sec02ConBox[target].style.transform = to;
    })

    sec02ConBox[i].addEventListener('mouseleave', function () {
        sec02ConBox[target].style.transform = from;
    })
}

function doFindDirection(from) {
    if (from == 'matrix(1, 0, 0, 1, 0, 0)') {
        from = 'translateY(8rem)';
    } else if (from == 'matrix(1, 0, 0, 1, 0, 80)') {
        from = 'translateY(0)';
    }
    return from;
}

function doFindTarget(target) {
    if (i == 0) {
        target = 2;
    } else if (i == 1) {
        target = 3;
    } else if (i == 2) {
        target = 0;
    } else if (i == 3) {
        target = 1;
    }
    return target;
}
/* ------------------------------ section03 ------------------------------ */
/* -------------------- sec03 banner ctl -------------------- */
let sec03Item = {
    idx: 0,
    p_idx: 0,
    len: sec03Cons.length - 1,
    dir: 0,
    moveing: false,
    doPrepend: function (x) {
        for(var i = 0; i < x; i++){
            sec03Cons = sec03.querySelectorAll('.sec03_cons');
            sec03ShowBox.insertBefore(sec03Cons[3], sec03Cons[0]);
        }
    },
    doAppend: function (x) {
        for(var i = 0; i < x; i++){
            sec03Cons = sec03.querySelectorAll('.sec03_cons');
            sec03ShowBox.insertBefore(sec03Cons[0], null);
        }
    },
    doPrev: function (x) {
        let lft = x * -100;
        let set = 0;
        if(!sec03Item.moveing){
            stop_autoplay();

            sec03Item.moveing = true;
            sec03ShowBox.style.transform = 'translateX('+lft+'%)'
            sec03Item.doPrepend(x);
            set = setInterval(function(){
                lft = lft + x;
                sec03ShowBox.style.transform = 'translateX('+lft+'%)'
                if(lft >= 0){
                    clearInterval(set);
                    sec03Item.moveing = false;
                    sec03Item.doIdx(x * -1);
                }
            });

            start_autoplay();
        };
    },
    doNext: function (x) {
        let lft = 0;
        let set = 0;
        if(!sec03Item.moveing){
            stop_autoplay();

            set = setInterval(function(){
                sec03Item.moveing = true;
                lft = lft - x;
                sec03ShowBox.style.transform = 'translateX('+lft+'%)'
                if(lft <= x * -100){
                    clearInterval(set);
                    sec03Item.doAppend(x);
                    sec03ShowBox.style.transform = 'translateX(0)'
                    sec03Item.moveing = false;
                    sec03Item.doIdx(x);
                };
            });

            start_autoplay();
        };
    },
    dotClick: function (target) {
        sec03Dot[target].addEventListener("click", function(){
            sec03Item.dir = target - sec03Item.p_idx;

            if(sec03Item.dir > 0){
                sec03Item.doNext( sec03Item.dir );
            }else if(sec03Item.dir < 0){
                sec03Item.doPrev( sec03Item.dir * -1);
            }

            sec03Item.p_idx = sec03Item.idx;
        });
    },
    doIdx: function(x) {
        sec03Item.idx += x;
        
        if(sec03Item.idx > sec03Item.len){
            sec03Item.idx = 0;
            }else if(sec03Item.idx < 0){
            sec03Item.idx = sec03Item.len;
        };

        sec03Dot[sec03Item.idx].classList.add('on');
        sec03Dot[sec03Item.p_idx].classList.remove('on');

        sec03Item.p_idx = sec03Item.idx;
        
    },
}

for(var i =0; i <= sec03Item.len; i++){
    sec03Item.dotClick(i);
};

sec03BtnPrev.addEventListener('click', function(){
    sec03Item.doPrev(1);
});

sec03BtnNext.addEventListener('click', function(){
    sec03Item.doNext(1);
});

//banner 자동재생
var autoplay_ = null;
start_autoplay()

function start_autoplay(){
    autoplay_ = setInterval(function(){
        sec03Item.doNext(1);
    },3000);
};

function stop_autoplay(){
    if(autoplay_ != null){
        clearInterval(autoplay_);
    }
}