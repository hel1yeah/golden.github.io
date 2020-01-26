$(document).ready(function () {
  //---------------------------------КНОПКА ВОЗВРАЩЕНИЯ ВВЕРХ---------------------------------
  //следит за тем, сколько пикеселей ушло вверх. При скроле 1700 пикселей появляется кнопка. Если меньше, она пропадает
  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      $('#arrow').fadeIn('slow');
    } else {
      $('#arrow').fadeOut('slow');
    }
  });
});


$(document).ready(function() {
  $('.header__burger').click(function(event) {
    $('.header__burger,.navigator').toggleClass('active')
    $('body').toggleClass('lock');    
  });
  $('.navigator').click(function (event) {
    $('.header__burger,.navigator').toggleClass('active')
    $('body').toggleClass('lock');
  });
});
