$(".gnb").hover(
  function(){
    $(".gs_link").css({"display":"block"});
    $(".gnb_sub_bg").css({"display":"block"});
  },
  function(){
    $(".gs_link").css({"display":"none"});
    $(".gnb_sub_bg").css({"display":"none"});
  }
)