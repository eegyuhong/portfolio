$(function(){
    //section02
    //level 선언
    var lv_parent_ = $('dd.sec02_txt_level');
    var lv_s = $(lv_parent_).children('span');
    var lv_vlu = $(lv_parent_).children('span.sec02_txt_level_vlu');
    var lv_txt = $(lv_vlu).text() * 1;
    
    // lv_vlu를 lv_txt번( eq(7) )after로 이동
    $(lv_s).eq(lv_txt).after( $(lv_vlu) );

    // lv_vlu 이전 형제는 .sec02_txt_level_icn_black, 다음 형제는 sec02_txt_level_icn_gray 클래스 부여
    $(lv_vlu).prevAll().addClass('sec02_txt_level_icn_black');
    $(lv_vlu).nextAll().addClass('sec02_txt_level_icn_gray');
    //-------------------------------------

    //volume 선언
    var vl_parent = $('dd.sec02_txt_volume')
    var vl_target = $(vl_parent).children('.sec02_txt_volume_icn')
    var vl_ml = $(vl_parent).children('.sec02_txt_volume_vlu').text();
    var vl_mlX = vl_ml.indexOf(" ") + 1;
    var vl_mlY = vl_ml.indexOf("ml");
    vl_ml =  vl_ml.substring(vl_mlX,vl_mlY) * 1;
    var vl_move = 48;

    if(vl_ml == 40){
        vl_move *= 0;
    }else if(vl_ml == 80){
        vl_move *= -1;
    }else if(vl_ml == 150){
        vl_move *= -2;
    }else if(vl_ml == 230){
        vl_move *= -3;
    }else if(vl_ml == 414){
        vl_move *= -4;
    }

    $(vl_target).css("background-position-x",vl_move)
    

    //-------------------------------------
    //btnAddCart 선언
    var qttBtns_ = $('span.sec02_btns');
    $(qttBtns_).on('click',function(){
        doQuantityCalculat(this)
    });

    function doQuantityCalculat(this_){
        var parent_ = $(this_).parent();
        var num_ = $(this_).siblings('span.sec02_btn_num');
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

    
    //-------------------------------------

    //section04
    //sec04_txt_etc
    $('strong.sec04_txt_etc_btn').click(function(){
        $('div.sec04_txt_etc_hide').toggleClass('on');
    });
});