$(document).ready(function(){
    //filtter-toggler//
    $(".filter-toggler").click(function(){
      $("#small-left-sider").toggle();
    })
     //filtter-toggler//
    //for one to two hundred page//
    $(".open-content-one-hundred").click(function(){
      $(".show-two-hundred-page").css("display","block");
      $(".hide-front-page,.show-three-hundred-page,.show-four-hundred-page,.show-five-hundred-page,.show-six-hundred-page").css("display","none");
    });
    //one to two hundred page end//

    //for one to three hundred page//
    $(".open-content-two-hundred").click(function(){
      $(".show-three-hundred-page").css("display","block");
      $(".hide-front-page,.show-two-hundred-page,.show-four-hundred-page,.show-five-hundred-page,.show-six-hundred-page").css("display","none");
    });
    //one to three hundred page end//

    //for one to four hundred page//
    $(".open-content-three-hundred").click(function(){
      $(".show-four-hundred-page").css("display","block");
      $(".hide-front-page,.show-two-hundred-page,.show-three-hundred-page,.show-five-hundred-page,.show-six-hundred-page").css("display","none");
    });
    //one to four hundred page end//

     //for one to five hundred page//
     $(".open-content-four-hundred").click(function(){
      $(".show-five-hundred-page").css("display","block");
      $(".hide-front-page,.show-two-hundred-page,.show-three-hundred-page,.show-four-hundred-page,.show-six-hundred-page").css("display","none");
    });
    //one to five hundred page end//

    //for one to six  hundred page//
    $(".open-content-five-hundred").click(function(){
    $(".show-six-hundred-page").css("display","block");
    $(".hide-front-page,.show-two-hundred-page,.show-three-hundred-page,.show-four-hundred-page,.show-five-hundred-page").css("display","none");
    });
    //one to six hundred page end//

       //for one to two hundred small page//
       $(".open-small-content-one-hundred").click(function(){
        $(".show-two-hundred-small-page").css("display","block");
        $(".for-small-devices,.show-three-hundred-small-page,.show-four-hundred-small-page,.show-five-hundred-small-page,.show-six-hundred-small-page").css("display","none");
      });
      //one to two hundred small page end//
  
      //for one to three hundred page//
      $(".open-small-content-two-hundred").click(function(){
        $(".show-three-hundred-small-page").css("display","block");
        $(".for-small-devices,.show-two-hundred-small-page,.show-four-hundred-small-page,.show-five-hundred-small-page,.show-six-hundred-small-page").css("display","none");
      });
      //one to three hundred page end//
  
      //for one to four hundred page//
      $(".open-small-content-three-hundred").click(function(){
        $(".show-four-hundred-small-page").css("display","block");
        $(".for-small-devices,.show-two-hundred-small-page,.show-three-hundred-small-page,.show-five-hundred-small-page,.show-six-hundred-small-page").css("display","none");
      });
      //one to four hundred page end//
  
       //for one to five hundred page//
       $(".open-small-content-four-hundred").click(function(){
        $(".show-five-hundred-small-page").css("display","block");
        $(".for-small-devices,.show-two-hundred-small-page,.show-three-hundred-small-page,.show-four-hundred-small-page,.show-six-hundred-small-page").css("display","none");
      });
      //one to five hundred page end//
  
      //for one to six  hundred page//
      $(".open-small-content-five-hundred").click(function(){
      $(".show-six-hundred-small-page").css("display","block");
      $(".for-small-devices,.show-two-hundred-small-page,.show-three-hundred-small-page,.show-four-hundred-small-page,.show-five-hundred-small-page").css("display","none");
      });
      //one to six hundred page end//

   //for pagination//
   $(document).on('click', '.prev', function () {
    //1- get first element to check if it has class 'active', 
    // to prevent class 'active' from moving to prev button on click,
    // if explanation isn't clear try removing if(){} to see it.
          const first = $(this).siblings().first();
          if (!first.hasClass('active')) {
    //2- search <li>'s to get the one that has 'active' class.
            const active = $(this).siblings('.active');
    //3- get the previous item of the <li class"active"> to move to.
            const prevItem = active.prev();
    //4- get href of the item to redirect to.
            const link = prevItem.children('a').prop('href');
    //5- remove 'active' class from the current <li> and give it to prev <li>.
            active.removeClass('active');
            prevItem.addClass('active');
    //6- redirect to href of the new <li>.
            window.location.href = link;
            }
});
$(document).on('click', '.next', function () {
  const last = $(this).siblings().last();
  if (!last.hasClass('active')) {
    const active = $(this).siblings('.active');
    const nextItem = active.next();
    const link = nextItem.children('a').prop('href');
    active.removeClass('active');
    nextItem.addClass('active');
    window.location.href = link;
  }
});


//for single slider
$('.single-slider').slick({
    dots: false,
    infinite:false,
    autoplaySpeed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
          dots: false
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  }); 
  //on scroll plugin//
  AOS.init({
    once:true,
    duration:1000,
  });
  //on scroll plugin//

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
});