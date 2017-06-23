$(document).ready(function() {
  var topSwiper = new Swiper('.top-swiper', {
    pagination: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    paginationClickable: true,
    spaceBetween: 0,
    autoplay: 2500,
    autoplayDisableOnInteraction: false,
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
		effect: 'fade'
  });

  // margin for caption
  function setBannerCaptionMargin() {
    var capMargin = ($(document).width() - $(".h-menu").width())/2;
    $(".banner-caption").css("margin-left", capMargin);
    $(".top-slider-pagination").css("left", capMargin);
  }
  setBannerCaptionMargin();
  $(window).resize(function () {
    setBannerCaptionMargin();
  });

  var galleryTop = new Swiper('.gallery-top', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 10,
    });
    var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true
    });
    galleryTop.params.control = galleryThumbs;
    galleryThumbs.params.control = galleryTop;

})
