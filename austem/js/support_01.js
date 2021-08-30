let sec02 = document.querySelector('.sec02');
let sec02SrchParent = sec02.querySelector('.sec02_search');
let sec02Srch = sec02SrchParent.querySelectorAll('input')[0];
let sec02Btn = sec02SrchParent.querySelectorAll('input')[1];

//section02 ----------------------------------------
sec02Btn.addEventListener('click', activSrch);

function activSrch(){
    sec02Srch.classList.toggle('on');
};