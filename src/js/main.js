$(document).ready( function() { 

// Модальное окно
var button = $('#button');
var modal = $('.modal');
var closeBtn = $('#close-btn');

button.on('click', function(){
modal.addClass('modal-active');
});

closeBtn.on('click', function(){
modal.removeClass('modal-active');
});

// Гамбургер

  $('#btn').click(function() {
    $('#menu').toggleClass('active');
    $('#icon').toggleClass('icon-active');
  });

// Слайдер 
  var sliderOne = $('#slider-one');
  var sliderTwo = $('#slider-two');
  
  sliderOne.slick({
    // arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $('#slider-one__prevBtn'),
    nextArrow: $('#slider-one__nextBtn')
  });

  sliderTwo.slick( {
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: $('#slider-two__prevBtn'),
    nextArrow: $('#slider-two__nextBtn'),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3
        }
        },
        {
        breakpoint: 992,
        settings: {
          slidesToShow: 2
        }
      },
        {
        breakpoint: 720,
        settings: {
          slidesToShow: 1
        }
      },
    ]
  });

// Валидация номера телефона 
  $(".phone").mask('+7 (999) 999-99-99');

// Валидация форм
  $("#hero-form").validetta( {
    errorTemplateClass : 'validetta-bubble',
    bubblePosition: 'bottom',
    bubbleGapTop: 5,
    bubbleGapLeft: 150
  });
  $("#modal-form").validetta( {
    errorTemplateClass : 'validetta-bubble',
    bubblePosition: 'bottom',
    bubbleGapTop: 5,
    bubbleGapLeft: 150
  });
  
// Карта
// Как только будет загружен API и готов DOM, выполняем инициализацию
  ymaps.ready(init);
// Инициализация и уничтожение карты при нажатии на кнопку.
  function init () {
    var myMap;

  $('#map').hover( function () {
    if (!myMap) {
      myMap = new ymaps.Map('map', {
        center: [55.850326, 37.537889],
        zoom: 17,
        scroll: false
      }, {
        searchControlProvider: 'yandex#search'
      });
        var glyphIcon = new ymaps.Placemark([55.850326, 37.537889], {}, {
          preset: 'islands#redGlyphIcon', 
          iconGlyph: 'home',
        });
        myMap.geoObjects
          .add(glyphIcon);
        myMap.behaviors.disable('scrollZoom');
      }
    });
  }


});