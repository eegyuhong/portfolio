$(function(){
    //section02
    var qttBtns_ = $('span.sec02_products_qttBtns');
    
    //.sec02_products_qttBtn_top, _up, _down, _bottom 클릭
    $(qttBtns_).on("click",function(){
        doQuantityCalculat(this);
        doPriceSumCalculat(this);
        doCartPriceSumCalculat()
        doCartTaxCalculat()
        doCartTotalCalculat()
    });

    $(qttBtns_).on("mousedown",function(){
        doBgcolorChangeBrown(this);
    });
    $(qttBtns_).on("mouseup mouseout",function(){
        doBgcolorChangeWhite(this)
    });

    //.sec02_products_remove 클릭
    var remove_ = $('li.sec02_products_remove');

    $(remove_).on("click",function(){
        var products_ = $(this).closest('li.sec02_dep1_products');
        var category_ = $(this).closest('li.sec02_category');

        doRemoveProducts(products_);
        doRemoveCategory(category_);
        doCartPriceSumCalculat()
        doCartTaxCalculat()
        doCartTotalCalculat()
        doAlertCartEmpty()
        doTitlQuantityCalculat()
    });
    $(remove_).on("mousedown",function(){
        doBgcolorChangeBrown(this);
    });
    $(remove_).on("mouseup mouseout",function(){
        doBgcolorChangeWhite(this)
    });
    
    //장바구니 수량 계산
    function doTitlQuantityCalculat(){
        var titl_ = $('h1.sec01_titl').children('span');
        var products_= $('li.sec02_dep1_products');
        var products_len = $(products_).length;

        $(titl_).text(products_len);
    };

    //수량 계산
    function doQuantityCalculat(this_){
        var count_ = $(this_).siblings('span.sec02_products_qttBtn_count');
        var count_val = $(count_).text() * 1;//현재 수량
        var temp = count_val;
        var products_ = $(this_).closest('li.sec02_dep1_products');
        var category_ = $(this_).closest('li.sec02_category');
        var q_ = doReplaceOnlyNumber( $(this_).text() );
        var a_ = doReplaceOnlyString( $(this_).text() );

        count_val += (q_ * a_);

        if(count_val <= 0){
            var result = confirm("제품을 장바구니에서 삭제하시겠습니까?")
            if(result){
                doRemoveProducts(products_);
                doRemoveCategory(category_);
                doCartPriceSumCalculat()
                doCartTaxCalculat()
                doCartTotalCalculat()
            }else{
                count_val = temp;
            }
        }else if(count_val > 100){
            alert("제품별 최대 100개까지 구매할 수 있습니다.")
            count_val = 100;
        }

        count_.text(count_val);
    };


    //금액(단가 * 수량) 계산
    function doPriceSumCalculat(this_){
        var price_ = $(this_).parent().siblings('.sec02_products_price').text();
        var priceSum_ = $(this_).parent().siblings('.sec02_products_priceSum');
        var _count = $(this_).siblings('span.sec02_products_qttBtn_count').text() * 1;
        
        price_ = doReplaceOnlyNumber( price_ );
        price_ *= _count;
        price_ = doThousandsOfCommas(price_) + "원";
        priceSum_.text(price_);
    }

    //숫자만 추출
    function doReplaceOnlyNumber(x){
        return x.replace(/[^0-9]/g,'') * 1;
    };

    //숫자 제거
    function doReplaceOnlyString(x){
        x = x.replace(/[0-9]/g,'');

        if(x == "개 추가"){
            return 1;
        }else if(x == "개 빼기"){
            return -1;
        }
    };

    //천 단위(숫자) 콤마
    function doThousandsOfCommas(x){
        return x.toLocaleString('ko-KR');
    };

    //제품 삭제
    function doRemoveProducts(products_){
        products_.remove();
    };

    //카테고리 삭제
    function doRemoveCategory(category_){
        var category_len = $(category_).find('li.sec02_dep1_products').length;
        
        if(category_len == 0){
            category_.remove();
        }
    };

    //소계 계산
    function doCartPriceSumCalculat(){
        var _priceSum = $('li.sec02_products_priceSum');
        var _priceSum_len = _priceSum.length;
        var sum_ = $('dd.sec02_summary_sum');
        var val = 0;
        var temp = 0;

        for(var i = 0; i < _priceSum_len; i++){
            temp = $(_priceSum[i]).text();
            temp = doReplaceOnlyNumber(temp);
            val += temp;
        }

        val = doThousandsOfCommas(val) + "원";

        $(sum_).text(val);
    }
    //부가세(포함) 계산
    function doCartTaxCalculat(){
        var sum_ = $('dd.sec02_summary_sum').text();
        var tax_ = $('dd.sec02_summary_tax')

        sum_ = doReplaceOnlyNumber(sum_);
        tax_val = sum_ * 0.11;
        tax_val = doThousandsOfCommas(tax_val) + "원";
        
        $(tax_).text(tax_val);
    }
    //합계 계산
    function doCartTotalCalculat(){
        var sum_ = $('dd.sec02_summary_sum').text();
        var delivery_ = $('dd.sec02_summary_delivery').text();
        var total_ = $('dd.sec02_summary_total').children('strong');
        var total_val = 0;

        sum_ = doReplaceOnlyNumber(sum_);
        delivery_ = doReplaceOnlyNumber(delivery_);
        total_val = sum_ + delivery_;
        total_val = doThousandsOfCommas(total_val);

        $(total_).text(total_val+"원");
    }

    //배경색 변경 - 브라운
    function doBgcolorChangeBrown(this_){
        $(this_).css("background-color","#8F7247");
    };
    //배경색 변경 - 화이트
    function doBgcolorChangeWhite(this_){
        $(this_).css("background-color","#fff");
    };

    function doAlertCartEmpty(){
        var area_ = $('ul.sec02_area');        
        var parent_ = $(area_).closest('div.centerBox');
        var category_ = $(area_).children('li.sec02_category').length;

        var div_ = $('<div class="sec02_doAlertCartEmpty"></div>');
        var p_alert = $('<p>장바구니에<br>담긴 상품이 없습니다.</p>');
        var p_btn = $('<p><a href="#">제품 보러가기 &gt;</a></p>');

        if(category_ == 0){
            $(parent_).append(div_)
            $('div.sec02_doAlertCartEmpty').append(p_alert).append(p_btn);
            doHiddenSummaryBtn();
        }
    }

    //sec02_summary & sec02_btn_buy 숨기기
    function doHiddenSummaryBtn(){
        $('div.sec02_summary').css("display","none");
        $('p.sec02_btn_buy').css("display","none");
    }
});

