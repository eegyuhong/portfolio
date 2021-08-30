$(function(){

    /* -------------------- nav -------------------- */
    /* 웹 <--> 테블릿/모바일 전환 시 */
    var screenX = window.matchMedia("(max-width: 959px)")
    screenX.addListener(myResponsive);
    
    function myResponsive(){
        if( screenX.matches ){
            console.log("웹 -> 태블릿/모바일");
        }else{
            console.log("태블릿/모바일 -> 웹");
            //테블릿. 모바일 nav close
            doNavClose(1);
        }
        //전체 슬라이드 up
        $("ul.dep1").find(".dep2").slideUp(0).find(".dep3").slideUp(0);
    }
    
    /* 테블릿. 모바일 nav 호출 */
    $("p.direct_nav").click(function(){                
        if( !$("header>.centerBox>.bg").hasClass("on") ){
            $("header>.centerBox>.bg").addClass("on");
            $(this).nextAll("nav").css("display","block").animate({"left":0},300);
        }
    });

    /* 테블릿. 모바일 nav close */
    $(".close_nav").click(function(){
        doNavClose(300);
    });

    function doNavClose(x){
        $("nav").animate({"left":"-30rem"},x,function(){
            $("header>.centerBox>.bg").removeClass("on");
            $("ul.dep1").find(".dep2").slideUp().find(".dep3").slideUp();
        });
    };

    /* dep click 애니메이션 (태블릿/모바일만 작동) */
    $("header nav").find("ul").children("li").children("a").on('click',function(){
        if( screenX.matches ){
            console.log("태블릿/모바일");
            $(this).next("ul").slideToggle().find("ul").slideUp();
        $(this).parent("li").siblings().children("ul").slideUp().find("ul").slideUp();
        }
    });

    /* dep hover 애니메이션 (웹만 작동) */
    $("header nav").find("ul").children("li").hover(function(){
        if( !screenX.matches ){
            console.log("웹");
            $(this).children("ul").slideToggle(0).find("ul").slideUp(0);
            $(this).siblings().children("ul").slideUp(0).find("ul").slideUp(0);
        }
    });

    /*------------------search -------------------*/
    $(".toggleSrch").click(function(){
        $(this).next().slideToggle(300);
    });
    $(".toggleSrch").next().find(".close").click(function(){
        $(this).parent().parent().slideUp(300);
    });

    /*------------------ language -------------------*/
    $("#util").click(function(){
        $(this).toggleClass("on");
        $(this).children("dd.off").slideToggle(300);
    });

    /*------------------- quick 메뉴 ---------------------*/
    function scrollFunc(){
        var height = $(window).height();
        var footer_top = $("footer").offset().top - height;
        var scT = $(window).scrollTop();
        
        if( footer_top <= scT ){
            $("p.scroll_top").addClass("on");
        }else{
            $("p.scroll_top").removeClass("on");
        }
    }

    $(window).scroll(function(){
        scrollFunc();
    });

    /*------------------- family 메뉴 ---------------------*/
    $(".family").children("dt").click(function(){
        $(this).toggleClass("on");
        $(this).nextAll("dd").slideToggle(300);
    });

    /*------------------- news ---------------------*/
    /*------------------- showBox로 보기 ---------------------*/
    var tgItem_ = {
        h1 : $(".news_showBox>span")
        ,h2 : $(".news_showBox>h3>a")
        ,time : $(".news_showBox>.news_showBox_time>time")
        ,p : $(".news_showBox>.news_showBox_txt")
    }

    $(".news_list_page").children("li").click(function(){
        var itme_ = {
            span : $(this).children('span').text()
            ,spanCalss : $(this).children('span').attr("class")
            ,h2 : $(this).children('h2').children("a").text()
            ,time : $(this).children('time').text()
            ,timeAttr : $(this).children('time').attr("datetime")
            ,p : $(this).children('p').text()
        }
        tgItem_.h1.html(itme_.span);
        tgItem_.h1.attr("class",itme_.spanCalss)
        tgItem_.h2.html(itme_.h2);
        tgItem_.time.html(itme_.time);
        tgItem_.time.attr("datetime",itme_.timeAttr)
        tgItem_.p.html(itme_.p);
    })
    /*------------------- news control ---------------------*/
    var newsCtl = {
        idx : 0
        ,p_idx : 0
        ,len : $(".list_control_dot").length - 1
        ,dir : 0
        ,doIdx : function(x){
            newsCtl.idx += x;

            if(newsCtl.idx < 0){
                newsCtl.idx = newsCtl.len;
            }else if(newsCtl.idx > newsCtl.len){
                newsCtl.idx = 0;
            }

            $(".list_control_dot").eq(newsCtl.idx).addClass("on").siblings().removeClass("on");
            newsCtl.p_idx = newsCtl.idx;
        }
        /* 요소 배치 변경 함수 */
        ,doAppend : function(x){
            for(var i = 0; i < x; i++){
                $(".news_list").children("ul").first().appendTo( $(".news_list") );
            }
        }
        ,doPrepend : function(x){
            for(var i = 0; i < x; i++){
                $(".news_list").children("ul").last().prependTo( $(".news_list") );
            }
        }
        /* 요소 이동 함수 */
        ,doPrev : function(x){
            var lft = x * -100;
            newsCtl.doPrepend(x);
            $(".news_list").css("left",lft+"%");
            $(".news_list").stop().animate({"left":0},500);
        }
        ,doNext : function(x){
            var lft = x * -100;
            $(".news_list").stop(false, true).animate({"left":lft+"%"},500 ,function(){
                newsCtl.doAppend(x);
                $(".news_list").css("left",0);
            });
        }
    };

    $(".list_control_btnPrev").click(function(){
        stop_autoplay()
        newsCtl.doIdx(-1);
        newsCtl.doPrev(1);
        start_autoplay()
    });

    $(".list_control_btnNext").click(function(){
        stop_autoplay()
        newsCtl.doIdx(1);
        newsCtl.doNext(1);
        start_autoplay()
    });

    $(".list_control_dot").click(function(){
        stop_autoplay()
        newsCtl.idx = $(this).index() - 2;
        newsCtl.dir = newsCtl.idx - newsCtl.p_idx;

        if(newsCtl.dir > 0){
            newsCtl.doIdx(0);
            newsCtl.doNext(newsCtl.dir);
        }else if(newsCtl.dir < 0){
            newsCtl.dir *= -1;
            newsCtl.doIdx(0);
            newsCtl.doPrev(newsCtl.dir);
        }

        newsCtl.p_idx = newsCtl.idx;
        start_autoplay()
    });

    //슬라이드 자동재생
    var autoplay_ = null;
    start_autoplay()
    
    function start_autoplay(){
        autoplay_ = setInterval(function(){
            newsCtl.doIdx(1);
            newsCtl.doNext(1);
        },3000);
    };

    function stop_autoplay(){
        if(autoplay_ != null){
            clearInterval(autoplay_);
        }
    }

});