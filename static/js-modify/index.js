require("../../bower_components/zepto/zepto.js");
require("../../bower_components/velocity/velocity.min.js");
require("../../bower_components/swiper/dist/js/swiper.min.js");
require("../js/share.min.js");
window.onload = function(){
    $("#loading").velocity("fadeOut");
    w = $(window).width();
    h = $(window).height();
    $("#audio").attr({"src":"/ford/public/image/background.mp3","autoplay":""});
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
        },
        onSlideChangeEnd: function(swiper){
            if(swiper.activeIndex == 0) {
            }
            else if(swiper.activeIndex == 1) {
            }
        }
    });
}
