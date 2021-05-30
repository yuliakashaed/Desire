$(function () {

  $(".header__btn").on('click', function () {
    $('.rightside-menu').removeClass('rightside-menu--close');
  })
  $(".rightside-menu__close").on('click', function () {
    $('.rightside-menu').addClass('rightside-menu--close');
  });

  $('.top__slider').slick({
    item: 10,
    dots: true,
    arrows: false,
  });

   
  $('.contact-slider').slick({
    slidesToShow: 10,
    slidesToScroll: 10,
    dots: true,
    arrows: false,
  });

  $('.article-slider__box').slick({
   prevArrow: '<button type="button" class="article-slider__arrow article-slider__arrowleft"><img src="images/arrow-slide-left.svg" alt="arrow-left"></button>',
   nextArrow: '<button type="button" class="article-slider__arrow  article-slider__arrowright"><img src="images/arrow-slide-right.svg" alt="arrow-left"></button>',

  });




  var mixer = mixitup('.gallery__inner',{
    load: {
      filter: '.living'
    }
  });

})