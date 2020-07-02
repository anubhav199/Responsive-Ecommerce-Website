$(document).ready(function(){
    //middle//
    $(".front-show").click(function(){
        $(".front-hide").css("display","block");
        $(".front-show").css("display","none");

    })
    $(".zooming-4").hover(function(){
        $(".zooming-open-4").css("display","block");
        $(".zooming-open-2,.zooming-open-1,.zooming-open-head,.zooming-open-3").css("display","none");
        $(this).css("border","1px solid");
    })
    $(".zooming-4").mouseleave(function(){
        $(this).css("border-color","transparent");
    })
    $(".zooming-3").hover(function(){
        $(".zooming-open-3").css("display","block");
        $(".zooming-open-2,.zooming-open-1,.zooming-open-head,.zooming-open-4").css("display","none");
        $(this).css("border","1px solid");
    })
    $(".zooming-3").mouseleave(function(){
        $(this).css("border-color","transparent");
    })
    $(".zooming").hover(function(){
        $(".zooming-open-head").css("display","block");
        $(".zooming-open-2,.zooming-open-1,.zooming-open-3,.zooming-open-4").css("display","none");
        $(this).css("border","1px solid");
    })
    $(".zooming").mouseleave(function(){
        $(this).css("border-color","transparent");
    })
    $(".zooming-1").hover(function(){
        $(".zooming-open-1").css("display","block");
        $(".zooming-open-head,.zooming-open-2,.zooming-open-3,.zooming-open-4").css("display","none");
        $(this).css("border","1px solid");
    })
    $(".zooming-1").mouseleave(function(){
        $(this).css("border-color","transparent");
    })
    $(".zooming-5").hover(function(){
        $(".zooming-open-2").css("display","block");
        $(".zooming-open-head,.zooming-open-1,.zooming-open-3,.zooming-open-4").css("display","none");
        $(this).css("border","1px solid");
    })
    $(".zooming-5").mouseleave(function(){
        $(this).css("border-color","transparent");
    })
    //pop//
    $(".open-pop-container").click(function(){
        $(".pop-container").css("display","block")
    })
    $(".close-pop").click(function(){
        $(".pop-container").css("display","none")
    })
    //pop//
    //middle//
    //top-content
  $(".menu-bar").click(function(){
    $(".side-bar").css({"width":"30%","display":"block"});
});
$(".menu-bar-1").click(function(){
    $(".side-bar").css({"width":"40%","display":"block"});
});
$(".menu-bar-2").click(function(){
    $(".side-bar").css({"width":"60%","display":"block"});
});
$(".close").click(function(){
    $(".side-bar").css("width","0%");
});
$(window). scroll(function(){
    var scroll = $(window). scrollTop();
    if (scroll > 0) {
    $("#top-containt"). css("background" , "rgb(233, 233, 233)");
    }
    else{
    $("#top-containt"). css("background" , "white");}});
$('.parallax-window').parallax({imageSrc: 'desktop-1.jpg'});



})