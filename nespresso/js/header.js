$(function(){
    //header, 스크롤 위치로 color 변경
    $(window).scroll(function(){
        var scr_top = $(window).scrollTop();
        var curtain_logo = $('div.header_show').children('h1').children().children('img');
        var curtain_call_btn = $('p.curtain_call').children().children('img');
        var curtain = $('div.curtain');
        var pointY = $('section.sec01').innerHeight();
        pointY -= 64; // 메뉴 top 값 64를 뺌
        
        if(!pointY){
            pointY = -1;
        }

        if(scr_top > pointY){
            if(!curtain.hasClass('on')){
                $(curtain_logo).css("float","right");
                $(curtain_call_btn).css("float","right");
            };
        }else if(scr_top <= pointY){
            $(curtain_logo).css("float","left");
            $(curtain_call_btn).css("float","left");
        }
    });
    

    //curtain 호출
    $('p.curtain_call').click(function(){
        var curtain_call_btn = $('p.curtain_call').children().children('img');
        var scr_top = $(window).scrollTop();
        
        if( !$('div.curtain').hasClass('on') ){
            $('div.curtain').toggleClass('on');
            $(curtain_call_btn).css("float","left")
        }else{
            $('div.curtain').toggleClass('on');
            if(scr_top > 916){
                $(curtain_call_btn).css("float","right");
            }else if(scr_top <= 916){
                $(curtain_call_btn).css("float","left");
            }
        };
        
    });
    

    //dep2 호출
    $('li.curtain_dep1').click(function(){
        $(this).toggleClass('on');
        $(this).siblings().removeClass('on');
    });

    
}); //end