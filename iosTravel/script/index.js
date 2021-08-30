$(function(){
    /* -------------------- banner 슬라이드 -------------------- */
    var num = 0;

    var autoBanner = setInterval(function(){
        middleGate();
        
    }, 5000);

    function middleGate(){
        num++;
        doBanner();
    }

    function doBanner(){
        var list = $("#bannerList").children("li");
        var len = list.length;
        if(num<0){
            num = len-1;
        }else if(num > len-1){
            num = 0;
        }
        list.eq(num).fadeIn(300);
        list.eq(num).siblings().fadeOut(300);
        
        $("#bannerBullet").children("li").eq(num).addClass("on")
        .siblings().removeClass("on");
    }

    /* prevBtn 클릭 */
    $(".prevBtn").click(function(){
        if(!$(".bannerPlay").hasClass("off")){  
        clearInterval(autoBanner);
        }
        
        num--;   
        doBanner();
        if(!$(".bannerPlay").hasClass("off")){
            autoBanner = setInterval(function(){
                            middleGate();

                            }, 5000);
        }
    });

    /* nextBtn 클릭 */
    $(".nextBtn").click(function(){
        if(!$(".bannerPlay").hasClass("off")){
            clearInterval(autoBanner);
        }
        num++;     
        doBanner();
        
        if(!$(".bannerPlay").hasClass("off")){
            autoBanner = setInterval(function(){
                            middleGate();

                        }, 5000);
        }
    });

    /* bannerBullet 클릭 */
    $("#bannerBullet").children("li").click(function(){
        if(!$(".bannerPlay").hasClass("off")){
            clearInterval(autoBanner);
        }
        
        num = $(this).index();
        doBanner();
        if(!$(".bannerPlay").hasClass("off")){
            autoBanner = setInterval(function(){
                            middleGate();

                        }, 5000);
        }
    });


    /* auto play */
    $(".bannerPlay").click(function(){
        var _this = $(this);
        
        _this.toggleClass("off");
        
        if(_this.hasClass("off")){
            clearInterval(autoBanner);
        
        }else{
            
        autoBanner = setInterval(function(){
                            middleGate();

                        }, 5000);
        }
        
    });

    /* -------------------- tab (이오스추천 / 동,북유럽) -------------------- */
    /* tab 클릭 play */
    $("#event h4").click(function(){
        $(this).addClass("on")
        .siblings("h4").removeClass("on")
        .end().next("div.conts").addClass("on")
        .siblings("div.conts").removeClass("on");
    });

    /* 이벤트 슬라이드 */
    var myPlugin = {
        name: 'debugger',
        params: {
            debugger: false,
        },
        on: {
            
            slideChangeTransitionEnd: function () {
                var idx =0;
                var lastIdx = $(".paging1").children("li").length+1;
                
                if (!this.params.debugger) return;
            
                // console.log('slideChange', this.previousIndex, '->', this.activeIndex);


                if(this.activeIndex == lastIdx ){
                    idx = 0; //마지막에서 next 클릭 시, 스와이퍼로 이동했을 때 마지막에서 처음으로 가면 0이 아니라, 마지막 숫자가 된다. 
                            //index를 0으로 억지 변경
                }else if(this.activeIndex == 0){
                    idx = lastIdx -2; //마지막에 0 됨. index를 마지막으로 변경
                }else{
                    idx = this.activeIndex -1; //나머지는 index에서 하나씩 마이너스
                }

                // console.log("테스트"+idx);
                $(".paging1").children("li").eq(idx).addClass("on").siblings().removeClass("on");
            },
            
        },
    };

    Swiper.use(myPlugin);

    // event 슬라이드 > 이오스 추천
    var swiper1 = new Swiper('.evnt1',{
        loop:true,
        debugger:true,
    });
    $(".prev1").click(function(){
        swiper1.slidePrev();
        if($(".paging1").children("li.on").prev().length !=0){
            $(".paging1").children("li.on").removeClass("on").prev().addClass("on");
        }else{
            $(".paging1").children("li.on").removeClass("on").end().children().last().addClass("on");
        }
        
    });
    $(".next1").click(function(){
        swiper1.slideNext();
        
        if($(".paging1").children("li.on").next().length !=0){
            $(".paging1").children("li.on").removeClass("on").next().addClass("on");
        }else{
            $(".paging1").children("li.on").removeClass("on").end().children().first().addClass("on");
        }
    });
    
    var swiperPlaying1; 
    playingFunc1();
    function playingFunc1(){ 
        swiperPlaying1 = setTimeout(function(){
            $(".next1").trigger("click");
            playingFunc1();
        },3000);
    }

    $(".playing1").click(function(){
        
        if( $(this).data("play") == "0" ){
            clearTimeout(swiperPlaying1);
            $(this).data("play", "1");
            $(this).css("background-position","0 0");
            
        }else{
            playingFunc1();
            $(this).data("play", "0");
            $(this).css("background-position","0 -1.1rem");
        }
    });

    $(".paging1").children("li").click(function(){
        $(this).addClass("on").siblings("li").removeClass("on");
        swiper1.slideTo($(this).index()+1);
    });
    

    // event 슬라이드 > 동/북유럽 추천
    var swiper2 = new Swiper('.evnt2',{
        loop:true
    });
    $(".prev2").click(function(){
        
        swiper2.slidePrev();
        if($(".paging2").children("li.on").prev().length !=0){
            $(".paging2").children("li.on").removeClass("on").prev().addClass("on");
        }else{
            $(".paging2").children("li.on").removeClass("on").end().children().last().addClass("on");
        }
        
    });
    $(".next2").click(function(){
        swiper2.slideNext();
        
        if($(".paging2").children("li.on").next().length !=0){
            $(".paging2").children("li.on").removeClass("on").next().addClass("on");
        }else{
            $(".paging2").children("li.on").removeClass("on").end().children().first().addClass("on");
        }
    });
    
    var swiperPlaying2; 
    playingFunc2();
    function playingFunc2(){ 
        swiperPlaying2 = setTimeout(function(){
            $(".next2").trigger("click");
            playingFunc2();
        },3500);
    }

    $(".playing2").click(function(){
        
        if( $(this).data("play") == "0" ){
            clearTimeout(swiperPlaying2);
            $(this).data("play", "1");
            $(this).css("background-position","0 0");
            
        }else{
            playingFunc2();
            $(this).data("play", "0");
            $(this).css("background-position","0 -1.1rem");
        }
    });

    $(".paging1").children("li").click(function(){
        $(this).addClass("on").siblings("li").removeClass("on");
        swiper1.slideTo($(this).index()+1);
    });


    //공지사항
    $("#notice01>dl").children("dt").click(function(e){
        e.preventDefault();
        $(this).addClass("on").siblings("dt").removeClass("on");
        $(this).siblings("dd.on").removeClass("on");
        $(this).next("dd").addClass("on").next("dd.more").addClass("on");
    });
    //공지사항 banner
    var swiper3 = new Swiper('.bnr',{
        autoplay: {
            delay: 2500,
            disableOnInteraction: false, /*자동으로 작동되는 환경에서 마우스로 화면을 스왑을 하면, 작동할지 여부*/
        },
        loop:true,
        pagination: {
            el: '.swiper-pagination',
        },
    });
    var playing3_flag=true;
    $(".playing3").click(function(){
                    //swiper1.
        if(playing3_flag){
            swiper3.stop();
            playing3_flag = false;
        }else{
            swiper3.start();
            playing3_flag = true;
        }
                
        
    });
});