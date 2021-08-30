$(function(){
    //section04 클릭 이벤트
    $('div.sec04_topMenu').find('li').click(function(){
        $(this).addClass('on').siblings().removeClass('on');
        
        var idx = $(this).index();
        $('div.sec04_showBox').children().eq(idx).addClass('on').siblings().removeClass('on');
    });

    //section05 prev/next 버튼 클릭
    var cons_ = $('div.sec05_conBox').children('ul');
    var sec05_flag = true;
    
    function doNext(){
        sec05_flag = false;
        $(cons_).stop().animate({"left":-320},500,function(){
            $(cons_).children("li").first().appendTo( $(cons_) );
            $(cons_).css("left",0);
            sec05_flag = true;
        });
    };

    function doPrev(){
        sec05_flag = false;
        $(cons_).children("li").last().prependTo( $(cons_) );
        $(cons_).css("left",-320);
        $(cons_).stop().animate({"left":0},500,function(){
            sec05_flag = true;
        });
    };

    $('dd.sec05_btn_prev').click(function(){
        doPrev();
    });
    $('dd.sec05_btn_next').click(function(){
        doNext();
    });

    //section05 마우스휠 이벤트
    $('div.sec05_conBox').on('scroll touchmove mousewheel DOMMouseScroll', function(e){
        e.preventDefault();
        e.stopPropagation();
        return false;
    });

    $('div.sec05_conBox').on('mousewheel DOMMouseScroll', function(e){//DOMMouseScroll.detail 파이어폭스
        var E = e.originalEvent;
        var direction = 0;
        
        //파이어폭스.DOMMouseScroll.E.detail
        if(E.detail){
            direction = E.detail * -40;
        }else{
            direction = E.wheelDelta;
        };
        
        if(direction > 0 && sec05_flag){//휠 업
            doPrev();
        }else if(direction < 0 && sec05_flag){//휠 다운
            doNext();
        };
    });
});//jQuery 끝

// prev(), next()