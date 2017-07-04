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
  }).disableTouchControl();

  // margin for caption
  function setBannerCaptionMargin() {
    var capMargin = ($(document).width() - $(".h-contacts").width())/2;
    $(".banner-caption").css("margin-left", capMargin);
    $(".top-slider-pagination").css("left", capMargin);
  }
  setBannerCaptionMargin();
  $(window).resize(function () {
    setBannerCaptionMargin();
  });

  var galleryTopConfig = {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        noSwiping: true,
        loop: true
    };
  var galleryTop = new Swiper('#gallery-top-1', galleryTopConfig).disableTouchControl();

  $('.plant-is-switcher').click(function(){
    var activePlantIsContent = "#" + "data-index" +  $(this).data("index");

    $('.plant-is-content').removeClass('active');
    $(activePlantIsContent).addClass('active');

    var galleryName = "#gallery-top" + $(this).data("index");
    var gallery = new Swiper(galleryName, galleryTopConfig).disableTouchControl();
    $('.plant-is-switcher-active').removeClass('plant-is-switcher-active');
    $(this).addClass('plant-is-switcher-active');

  });

    var reviewSwiper = new Swiper('.reviews-slider', {
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      spaceBetween: 0,
      autoplay: 0,
      autoplayDisableOnInteraction: false,
      slidesPerView: 1,
      centeredSlides: true,
      loop: true
    }).disableTouchControl();

    // up button

    $(this).scroll(function() {
      var fadeOutPos = $('.main-title').offset().top;
      if($(this).scrollTop() >= fadeOutPos){
        $('.up-button').fadeIn(300);
      }
      else{
          $('.up-button').fadeOut(300);
      }
    })
    $('.up-button').click(function () {
      $("html, body").animate({ scrollTop: 0 }, "slow");
    })

})

$(document).ready(function() {
  // функция, которая задает группе колонок одинаковую высоту
  function setEqualHeight(columns) {

    var tallestcolumn = 0;

    columns.each(function(i, el) {
        currentHeight = $(el).height();

        if(currentHeight > tallestcolumn) {
          tallestcolumn = currentHeight;
        }
      }

    );

    columns.height(tallestcolumn);
  }

  //Выравнивание по высоте блоков в braces-types

//выпадающее меню info-menu-drop
   $('.menu-link').on('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    var  $this = $(this),
         item = $(this).closest(".menu-item"),
         list = $(".menu-list"),
         links = $(".menu-link"),
         content = item.find(".menu-list-in"),
         otherContent = list.find(".menu-list-in"),
         duration = 100;

    if   (!$this.hasClass('active')) {
         links.removeClass('active');
         $this.addClass('active');

      otherContent.stop(true, true).slideUp(duration);
      content.stop(true, true).slideDown(duration);
      setEqualHeight(content.find("li[class*='col']"));
    } else {
      $this.delay(duration).queue(function () {
         $(this).removeClass('active');
         $(this).dequeue();
       });

      content.stop(true, true).slideUp(duration);
      setEqualHeight(content.find("li[class*='col']"));
    }
    var currentMenu = $this;
    $(window).click(function() {
      setTimeout(function () {
         $(currentMenu).removeClass('active');
       }, 100);
      content.slideUp(100);
  });
  });
  $('.menu-list-in').on('click', function (e){
    e.stopPropagation();
  });
  //offices-map
    $('.btn-offices-link').click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    var  $this = $(this),
         item = $this.closest(".btn-offices-item"),
         list = $(".btn-offices-list"),
         links = list.find(".btn-offices-link");

    if   (!$this.hasClass('active')) {

         links.removeClass('active');
         $this.addClass('active');
    }

    var  address = $(".offices-location"),
         itemPosition = $this.data('results');

         address.filter('.results-item-'+itemPosition)
         .addClass('active')
         .siblings()
         .removeClass('active');
  });

  var   infoBuyItemH6 = $(".info-buy-item>h6"),
        officeAddress = $(".list-office-address"),
        officePhone = $(".office-phone-list");

    // setEqualHeight(infoBuyItemH6);
    // setEqualHeight(officeAddress);
    // setEqualHeight(officePhone);
});



 $(document).mouseup(function (e){

       var  item = $(".menu-item"),
            list = $(".menu-list-in"),
            link = $(".menu-link"),
            duration = 100;

      if (!list.is(e.target) &&
          !link.is(e.target) &&
           list.has(e.target).length === 0) {

         link.delay(duration).queue(function () {
           $(this).removeClass('active');
           $(this).dequeue();
         });

         list.slideUp(duration);
      }
   });
