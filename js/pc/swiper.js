//스와이퍼 관련 플러그인

var visual_id = 0;
var sl_timer = 0;
var swiper = new Swiper(".visual_banner", {
  slidesPerView: 1,
  speed: 1000,
  loop:true,
  spaceBetween: 0,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },
  pagination: {
    el: ".swiper-pagination-1",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // 스와이프 시 스와이프에 인덱스 값 가져오기
  on: {
    activeIndexChange: function () {
      visual_id = this.realIndex + 1;
    }
  },
});

//인덱스 값에 맞춰 sector_line 색상 변경 함수
function sl_change(){
  if(visual_id < 3){
    $(".slp").css({"display":"block"});
    $(".slg").css({"display":"none"});
  }
  else {
    $(".slp").css({"display":"none"});
    $(".slg").css({"display":"block"});
  }
}

sl_timer = setInterval("sl_change()", 0);
// 


var swiper = new Swiper(".uc1_sw", {
  speed: 1000,
  loop:true,
  spaceBetween: 0,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination-1",
    clickable: true
  }
});

var swiper = new Swiper(".uc2_sw", {
  speed: 1000,
  loop:true,
  spaceBetween: 0,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination-2",
    clickable: true
  }
});

var swiper = new Swiper(".uc3_sw", {
  speed: 1000,
  loop:true,
  spaceBetween: 0,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination-3",
    clickable: true
  }
});

var swiper = new Swiper(".muc1", {
  speed: 1000,
  loop:true,
  spaceBetween: 0,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination-4",
    clickable: true
  }
});

var swiper = new Swiper(".muc2", {
  speed: 1000,
  loop:true,
  spaceBetween: 0,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination-5",
    clickable: true
  }
});

var swiper = new Swiper(".muc3", {
  speed: 1000,
  loop:true,
  spaceBetween: 0,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination-6",
    clickable: true
  }
});

var swiper = new Swiper(".lb_sw", {
  slidesPerView: 6,
  slidesPerGroup: 1,
  speed: 1000,
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination-3",
    clickable: true
  }
});










