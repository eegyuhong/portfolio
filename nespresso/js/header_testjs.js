//curtain_call 클릭 시 curtain에 .on 추가/삭제하는 토글 버튼
//.on 있으면 삭제, 없으면 추가
var curtain_call = document.getElementsByClassName('curtain_call')[0];

curtain_call.addEventListener('click', function(e){
    var curtain = document.getElementsByClassName('curtain')[0];
    curtain.classList.toggle('on');
});

curtain_call.onclick


var header = document.querySelector('header');
var curtain = header.querySelector('div.curtain');
var curtain_call = header.querySelector('p.curtain_call');







//curtain dep1 클릭 시 dep2 노출
const dep1 = document.getElementsByClassName('.curtain_dep1_')[0];
const dep2 = document.querySelectorAll('.curtain_dep2');
console.log(dep1);


dep1.addEventListener('click',function(e){
    console.log(e.target)
});
