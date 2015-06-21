require("../../bower_components/zepto/zepto.js");
require("../../bower_components/zeptojs/src/touch.js");
require("../../bower_components/velocity/velocity.min.js");
require("../../bower_components/swiper/dist/js/swiper.min.js");
window.onload = function(){
    share = 0;

    var share_msg = function(msg) {    
        $.post("/wx/portal/wxconfig/",{
            "url":location.href
        },function(data){
            wx.config(data);
            wx.ready(function(){
                wx.onMenuShareTimeline({
                    link:"",
                    imgUrl:"",
                    title:msg,
                });
                wx.onMenuShareAppMessage({
                    link:"",
                    imgUrl:"",
                    title:msg,
                    desc:'微行者联盟强势出征！知豆有多懂你，一测便知！'
                });
            });
            wx.error(function(res){
                $.get("/wx/portal/update_access_token/",function(data){
                    $.post("/wx/portal/wxconfig/",{
                        "url":location.href
                    },function(data){
                        wx.config(data);
                        wx.ready(function(){
                            wx.onMenuShareTimeline({
                                link:"",
                                imgUrl:"",
                                title:msg,
                            });
                            wx.onMenuShareAppMessage({
                                link:"",
                                imgUrl:"",
                                title:msg,
                                desc:'微行者联盟强势出征！知豆有多懂你，一测便知！'
                            });
                        });
                    });
                });
            });
        });
    };
    msg = '赶快叫小伙伴儿一起来测测吧！';
    share_msg(msg);
    $("#loading").velocity("fadeOut");
    w = $(window).width();
    h = $(window).height();
    $("#audio").attr({"src":"/public/image/background.mp3","autoplay":""});
    on = false;
    $(".music").on("tap",function(){
        if(on) {
            on = false;
            document.getElementById("audio").pause();
            $(".music").removeClass("music-play");
        }
        else {
            on = true;
            document.getElementById("audio").play();
            $(".music").addClass("music-play");
        }
    });
    var swiper = new Swiper('.swiper-container', {
        direction:'vertical',
        lazyLoading:true,
        onInit: function() {
            $(".p1-text").show();
            setTimeout(function(){
                $(".p1-car1").show();
            },3000);
            setTimeout(function(){
                $(".p1-car2").show();
            },4000);
            setTimeout(function(){
                $(".p1-car3").show();
            },5000);
            setTimeout(function(){
                $(".p1-car4").show();
            },6000);
            setTimeout(function(){
                $(".p1-car5").show();
            },7000);
            setTimeout(function(){
                $(".p1-car6").show();
            },8000);
            setTimeout(function(){
                $(".p1-car7").show();
            },9000);
        },
        onSlideChangeEnd: function(swiper){
            if(swiper.activeIndex == 0) {
                $(".p1-text").show();
                setTimeout(function(){
                    $(".p1-car1").show();
                },3000);
                setTimeout(function(){
                    $(".p1-car2").show();
                },4000);
                setTimeout(function(){
                    $(".p1-car3").show();
                },5000);
                setTimeout(function(){
                    $(".p1-car4").show();
                },6000);
                setTimeout(function(){
                    $(".p1-car5").show();
                },7000);
                setTimeout(function(){
                    $(".p1-car6").show();
                },8000);
                setTimeout(function(){
                    $(".p1-car7").show();
                },9000);
            }
            else if(swiper.activeIndex == 1) {
                $(".p2-car").show();
                setTimeout(function(){
                    $(".p2-text").show();
                },1000);
            }
            else if(swiper.activeIndex == 2) {
                $(".p3-car").show();
                $(".p3-ele").show();
                setTimeout(function(){
                    $(".p3-text").show();
                },1000);
            }
            else if(swiper.activeIndex == 3) {
                $(".p4-car").show();
                setTimeout(function(){
                    $(".p4-bottom").show();
                },500);
                setTimeout(function(){
                    $(".p4-text").show();
                },1500);
            }
            else if(swiper.activeIndex == 4) {
                $(".p5-car").show();
                setTimeout(function(){
                    $(".p5-text").show();
                },1000)
            }
            else if(swiper.activeIndex == 5) {
                $(".p6-car").show();
                $(".p6-background").show();
                setTimeout(function(){
                    $(".p6-text").show(); 
                },1000);
            }
            else if(swiper.activeIndex == 6) {
                $(".p7-car").show();
                setTimeout(function(){
                    $(".p7-text").show(); 
                },1000);
            }
            else if(swiper.activeIndex == 7) {
                $(".p8-car").show();
                setTimeout(function(){
                    $(".p8-people").show();
                },1000);
                setTimeout(function(){
                    $(".p8-text").show();
                },2000);
            }
            else if(swiper.activeIndex == 8) {
                $(".p9-cars").show();
                setTimeout(function(){
                    $(".p9-text").show(); 
                },1000);
            }
        }
    });
    var changeActive = function(num) {
        $(".p9-car"+num).css({
            "background-image":"url('/public/image/p9-car"+num+"-light.png')"
        });
        $(".p9-text").velocity({
            "opacity":"0"
        },1000);
        setTimeout(function(){
            $(".p9-text").css({
                "background-image":"url('/public/image/p9-text-share.png')"
            });
            $(".p9-text").velocity({
                "opacity":"1"
            },1000);
            $(".share-background").css({
                "background-image":"url('/public/image/share"+num+".png')"
            });
            $(".share-box").show();
        },1000);
    };
    $(".sure").on("tap",function(){
        $(".share-line").show();
    });
    $(".share-line").on("tap",function(){
        $(".share-line").hide();
        $(".share-box").hide();
    });
    $(".p9-car1").on("tap",function(){
        changeActive("1");
        msg = '豆豆测出我有如“钢铁侠”般智能！？你也来测测！';
        share_msg(msg);
    });
    $(".p9-car2").on("tap",function(){
        changeActive("2");
        msg = '豆豆测出我有如“美国队长”般靠谱！？你也来测测！';
        share_msg(msg);
    });
    $(".p9-car3").on("tap",function(){
        changeActive("3");
        msg = '豆豆测出我有如“绿巨人”般骁勇！你也来测测！';
        share_msg(msg);
    });
    $(".p9-car4").on("tap",function(){
        changeActive("4");
        psg = '豆豆测出我有如“快银”般矫健！你也来测测！';
        share_msg(msg);
    });
    $(".p9-car5").on("tap",function(){
        changeActive("5");
        msg = '豆豆测出我有如“黑寡妇”般高冷！你也来测测！';
        share_msg(msg);
    });
    $(".p9-car6").on("tap",function(){
        changeActive("6");
        msg = '豆豆测出我有如“雷神”般迅猛！你也来测测！';
        share_msg(msg);
    });
    $(".p9-car7").on("tap",function(){
        changeActive("7");
        msg = '豆豆测出我有如“绯红女巫”般迷幻！你也来测测！`';
        share_msg(msg);
    });
}
