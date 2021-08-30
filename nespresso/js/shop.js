$(function(){
    //section01
    //svg 뷰박스 크기 커지면 내부 요소 크기 늘
    

    //section02
    //volume 선언
    var vl_ = $('li.sec02_dep3_volume');
    var vl_len = $(vl_).length;
    
    //volume text 근거로 background-position-x 조정
    for(var i = 0; i < vl_len; i++){
        var target_ = $(vl_.eq(i));
        var ml_ = $(target_).text();
        var x = ml_.indexOf(" ") + 1;
        var y = ml_.indexOf("ml");
        ml_ = ml_.substring(x,y) * 1;

        var vl_bg_x = doVlBackgroundPositionXCalculation(ml_);
        $(target_).children('span').css("background-position-x",vl_bg_x);        
    }

    function doVlBackgroundPositionXCalculation(ml_){
        var x = 48;
        
        if(ml_ == 40){
            x *= 0;
        }else if(ml_ == 80){
            x *= -1;
        }else if(ml_ == 150){
            x *= -2;
        }else if(ml_ == 230){
            x *= -3;
        }else if(ml_ == 414){
            x *= -4;
        }
        return x;
    }

    //level 선언
    var lv_ = $('li.sec02_dep3_level');
    var lv_len = $(lv_).length;

    //level text 근거로 background-position-x 조정
    for(var i = 0; i < vl_len; i++){
        var target_ = $(lv_.eq(i));
        var strong_ = $(target_).text();
        strong_ = strong_.substring(3,4) * 1;
        
        var lv_bg_x = doLvBackgroundPositionXCalculation(strong_);
        $(target_).children('span').css("background-position-x",-lv_bg_x);
    }

    function doLvBackgroundPositionXCalculation(strong_){
        var x = 13;
        var min = 1;
        var max = 11;
        var move = 10; //시작 값(강도 1) background-position-x 이동 횟수

        for(var i = min; i <= max; i++){
            if(strong_ == i){
                x *= move;
                return x;
            }else{
                move--;
            }
        }
    }

    //btnAddCart 선언
    var qttBtns_ = $('span.sec02_dep3_btnAddCart_btns');
    $(qttBtns_).on('click',function(){
        doQuantityCalculat(this)
    });

    function doQuantityCalculat(this_){
        var parent_ = $(this_).parent();
        var num_ = $(this_).siblings('span.sec02_dep3_btnAddCart_num');
        var num_val = $(num_).text() * 1;//현재 수량
        var q_ = doReplaceOnlyNumber( $(this_).text() );
        var a_ = doReplaceOnlyString( $(this_).text() );

        num_val += (q_ * a_);
        doAddClass(parent_)

        if(num_val <= 0){
            num_val = 0;
            doRemoveClass(parent_)
        }else if(num_val > 100){
            num_val = 100;
        }

        num_.text(num_val);
    };

    //숫자만 추출
    function doReplaceOnlyNumber(x){
        return x.replace(/[^0-9]/g,'') * 1;
    };

    //숫자 제거
    function doReplaceOnlyString(x){
        x = x.replace(/[0-9]/g,'');

        if(x == "개 담기"){
            return 1;
        }else if(x == "개 빼기"){
            return -1;
        }
    };

    //addClass
    function doAddClass(this_){
        $(this_).addClass('on');
    };
    //removeClass
    function doRemoveClass(this_){
        $(this_).removeClass('on');
    };


});//jQuery 끝