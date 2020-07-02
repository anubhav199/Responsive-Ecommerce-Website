$(document).ready(function(){
    $("#button-hidder").click(function(){
        $(this).hide();
        $("#button-hidder-1").show();
    });
    $("#button-hidder-1").click(function(){
        $("#button-hidder").show();
        $(this).hide();
    });
    $(".edit").click(function(){
        $(".hide-for-front").css("display","none");
        $(".show-for-front").css("display","block");
    });
    $(".call-back").click(function(){
        $(".hide-for-front").css("display","block");
        $(".show-for-front").css("display","none");
    });
    $("#button-hidder").click(function(){
        $("#collapseTwo,#payment-option").collapse("hide");
    });
    $("#phone-pe-hidder").click(function(){
        $("#debit,#net-banking,#cash").collapse("hide");
    })
    $("#debit-hidder").click(function(){
        $("#phonepe,#net-banking,#cash").collapse("hide");
    })
    $("#net-banking-hidder").click(function(){
        $("#phonepe,#cash,#debit").collapse("hide");
    })
    $("#cash-hidder").click(function(){
        $("#phonepe,#net-banking,#debit").collapse("hide");
    })

    $(window). scroll(function(){
        var scroll = $(window). scrollTop();
        if (scroll > 0) {
        $("#top-containt"). css("background" , "rgb(233, 233, 233)");
        }
        else{
        $("#top-containt"). css("background" , "white");}});
    $('.parallax-window').parallax({imageSrc: 'desktop-1.jpg'});
})
    