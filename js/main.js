window.onload = function() {
//header
  $(".sub_box, .sub").hide();

  $(".hd .menu > ul li").on({mouseenter:function(){
    $(".sub_box, .sub").stop().slideDown(200);
  }})//mouseenter

  $(".hd .menu > ul").on({mouseleave:function(){
    $(".sub_box, .sub").stop().slideUp();
  }})//mouseleave
//m_header
w=$(window).width();
h=$(window).height();

$(".m_menu").css("width", w*.85);
$(".m_menu").css("height", h);
$(".close_bt").css("width", w);
$(".close_bt").css("height", h);

$(window).resize(function(){
  w=$(window).width();
  h=$(window).height();
  $(".m_menu").css("width", w*.85);
  $(".m_menu").css("height", h);
  $(".close_bt").css("width", w);
  $(".close_bt").css("height", h);
});
$(".close_bt").hide();
$(".m_menu").hide();
$(".m_menu .m_sub").hide();

$(".menu_bt").click(function(){
  $(".close_bt").show();
  $('.m_menu').stop().fadeIn(300);
});
$('.close_bt').click(function(){
  $(this).hide();
  $('.m_menu').stop().fadeOut(200);
  $('.m_main').css({background:"#fff","border-bottom":"1px solid #2c2a29"});
  $('.m_main p').css("color","#222");
  $('.m_main').find(".svg-inline--fa").css("color","#222")
  $('.m_main').find(".svg-inline--fa").css({transform: "rotate(0deg)"});
  $('.m_main').siblings('.m_sub').stop().slideUp(300);
});

$('.m_main').click(function(){
  $('.m_main').css({background:'#fff',"border-bottom":"1px solid #2c2a29"})
  $(this).css({background:'#b80618',"border-bottom":"0px"})
  $('.m_main p').css("color","#222");
  $('.m_main').find(".svg-inline--fa").css("color","#222");
  $('.m_main').find(".svg-inline--fa").css({transform: "rotate(0deg)"});
  $(this).find(".svg-inline--fa").css("color","#ebebeb");
  $(this).find(".svg-inline--fa").animate({rotate: '180deg'}, 100);
  $(this).children("p").css({color:"#ebebeb"});
  $('.m_main').siblings('.m_sub').stop().slideUp();
  $(this).siblings('.m_sub').stop().slideDown(300);
});
//section
w=$(window).width();
h=$(window).height();
$(".sec").css("width", w);
$(".sec .wrap").css("width", w);
$(".slide").css("width", w);
$(".slide").css("height", h-100);
$(".slide li").css("width", w);
$(".slide li").css("height", h-100);
$(window).resize(function(){
  w=$(window).width();
  h=$(window).height();
  $(".sec").css("width", w);
  $(".sec .wrap").css("width", w);
  $(".slide").css("width", w);
  $(".slide").css("height", h-100);
  $(".slide li").css("width", w);
  $(".slide li").css("height", h-100);
});
$(function() {
  $('.slide').slide();
});

$(".event .eventbox .img").hover(function(){
  $(this).css("background-size","105%");
},function(){
  $(this).css("background-size","100%");
});
$("#circles").hide();
//popup
$('.pop .pop_bt').click(function(){
  $('.popup').hide();
});
//.card
    if($(window).width() <= 920) {
      $(window).scroll(function(){
        h=$(window).height();
        if ($(window).scrollTop()>(h*3-500)){
          $(".card .txt").animate({opacity:1}, 1500);
        }
      });//scroll
    };
}
