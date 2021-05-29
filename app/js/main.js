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

  var mixer = mixitup('.gallery__inner',{
    load: {
      filter: '.living'
    }
  });

})