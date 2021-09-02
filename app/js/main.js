$(function(){

$(".header__slider").slick({
    infinity: true,
    fade: true,
    prevArrow: '<img class="slider-arrows slider-arrows-left" src="img/header-arrow_left.svg" alt=""></img>',
    nextArrow: '<img class="slider-arrows slider-arrows-right" src="img/header-arrow_right.svg" alt=""></img>',
    asNavFor: '.header-slider-dost',
})

  $(".header-slider-dost").slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: '.header__slider',
  });

  $(".surf-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<img class="slider-arrows slider-arrows-left" src="img/header-arrow_left.svg" alt=""></img>',
    nextArrow: '<img class="slider-arrows slider-arrows-right" src="img/header-arrow_right.svg" alt=""></img>',
    asNavFor: '.surf-map',
  })

  $(".surf-map").slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.surf-slider',
    focusOnSelect: true,
  })

  $(".holder-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<img class="slider-arrows slider-arrows-left" src="img/header-arrow_left.svg" alt=""></img>',
    nextArrow: '<img class="slider-arrows slider-arrows-right" src="img/header-arrow_right.svg" alt=""></img>',
    infinity: true,
    fade: true,
  })

  $('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="img/sleep-plus.svg" alt=""></div><div class="quantity-button quantity-down"><img src="img/sleep-minus.svg" alt=""></div></div>').insertAfter('.quantity input');
    $('.quantity').each(function() {
      var spinner = $(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity-up'),
        btnDown = spinner.find('.quantity-down'),
        min = input.attr('min'),
        max = input.attr('max');

      btnUp.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue + 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

      btnDown.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

    });

    $(".quantity-button").on("click", function(){
      let summ = $(".nights").val() * $(".summ").data("nights") + ($(".guests").val() - 1) * $(".summ").data("guests");
      $(".summ").html("$" + summ);
    })

    let summ = $(".nights").val() * $(".summ").data("nights") + ($(".guests").val() - 1) * $(".summ").data("guests");
    $(".summ").html("$" + summ);

  
});