import 'slick-carousel';
import $ from 'jquery';

const goodsOption = {

  arrows: true,
  prevArrow: '<button type="button" class="testim_slider-btn testim_slider-btn--prev"><div class="testim_slider-btn-body testim_slider-btn-body--prev"></div></button>',
  nextArrow: '<button type="button" class="testim_slider-btn testim_slider-btn--next"><div class="testim_slider-btn-body testim_slider-btn-body--next"></div></button>',

  dots: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  mobileFirst: true,
}

$('.js-slider').slick(goodsOption);
