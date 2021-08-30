$(function(){
    //section02 아이콘_.on 이벤트
    $('p.sec02_right_showbox_ico').click(function(){
        $(this).parent('div.sec02_right_showbox').addClass('on')
        .siblings().removeClass('on');
    });

    //sec04_con_right 스크롤 락
    $('div.sec04_con_right').on('scroll touchmove mousewheel DOMMouseScroll', function(e){
        e.preventDefault();
        e.stopPropagation();
        return false;
    });

    //section04 마우스 휠 이벤트
    var obj_sec04_con = {
        move:0,//이동 횟수
        far:-520,//이동할 거리(px)
        len:$('div.sec04_con').length,
        flag:true,
        slider_bf:100,//슬라이더 시작 값과 동일
        slider_af:0
        //track_h:$('div.track_bar').css('height').substring(0,$('div.track_bar').css('height').indexOf('p'))
    }

    $('div.sec04_con_right').on('mousewheel DOMMouseScroll', function(e){//DOMMouseScroll.detail 파이어폭스
        var E = e.originalEvent;
        var direction = 0;
        
        //파이어폭스.DOMMouseScroll.E.detail
        if(E.detail){
            direction = E.detail * -40;
        }else{
            direction = E.wheelDelta;
        };
        
        if(direction > 0 && obj_sec04_con.move > 0 && obj_sec04_con.flag){//휠 업
            obj_sec04_con.move--;
            
            sec04_con_animate();
            sec04_track_animate();
            
        }else if(direction < 0 && obj_sec04_con.move < obj_sec04_con.len-1 && obj_sec04_con.flag){//휠 다운
            obj_sec04_con.move++;

            sec04_con_animate();
            sec04_track_animate();
        };
    });

    //con 이벤트
    function sec04_con_animate(){
        var temp = 0;
        
        obj_sec04_con.flag = false;
        temp = obj_sec04_con.move * obj_sec04_con.far;

        $('div.sec04_con').clearQueue().animate({top:temp},500,function(){
            $('div.sec04_con').eq(obj_sec04_con.move).addClass('on').siblings().removeClass('on');
            obj_sec04_con.flag = true;
        });
    };

    //section04 track_bar 슬라이더 ui
    $('#slider').slider({
        orientation: "vertical",
        animate:"slow",
        min:0,
        max:4,
        step:1,
        value:100,
        stop:function(e,u){
            obj_sec04_con.move = 4 - u.value;
            sec04_con_animate()
        }
    });

    //sec04_con 이벤트 시 sec04_track 값 변경
    function sec04_track_animate(){
        var temp = 4 - obj_sec04_con.move;
        $("#slider").slider("value",temp);
    };



    // (구)슬라이더 애니메이션 - 슬라이더로 이미지 조절 불가해서 삭제
    // function sec04_track_animate(){
    //     var trackNum = 0;

    //     trackNum = obj_sec04_con.track_h / (obj_sec04_con.len - 1);
    //     trackNum *= obj_sec04_con.move;
        
    //     if(trackNum > 0 && trackNum < obj_sec04_con.track_h){
    //         trackNum -= 32;
    //     }else if(trackNum == obj_sec04_con.track_h){
    //         trackNum -= 64;
    //     };

    //     $('div.track_bar_btn').animate({'top':trackNum+"px"},500);
    // };
}); //jQuery end




