// //최상단 페이지로 이동하는 버튼
var sch_bottom = 0; 
var sch = 0;

// #main에 bottom 값
sch_bottom = $(".main").height() - $(window).height();

$(".top_btn").click(function(){
  $("html").animate({"scrollTop": 0}, 1000);
})

$(window).scroll(function () {
  sch = $(window).scrollTop();
  if(sch > 100){
    $(".top_btn").css({"display":"flex"});
  }
  else {
    $(".top_btn").css({"display":"none"});
  }
}); 

$(window).scroll(function () {
  sch_mv = $(window).scrollTop();
  if(sch_mv > sch_bottom){
    $(".top_btn").addClass("stop")
  }
  else {
    $(".top_btn").removeClass("stop")
  }
}); 



