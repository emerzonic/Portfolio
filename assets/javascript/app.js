// Add scrollspy to <body>
$('body').scrollspy({
  target: ".navbar",
  offset: 74
});
$(".nav-link").on('click', function (event) {
  if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 1000, function () {
      window.location.hash = hash;
    });
  }
});

//control the navbar background and padding
$(window).scroll(function () {
  if ($(document).scrollTop() > 500) {
    $('.navbar').addClass('bg-dark');
    $('.fixed-top').css('padding-top', '0.5rem');
  } else {
    if ($('#toggle').attr('aria-expanded') !== 'true') {
      $('.navbar').removeClass('bg-dark');
      $('.fixed-top').css('padding-top', '3rem');
    }
  }
});

//control the navbar background on mobile devices
$('#toggle').click(function () {
  if ($(this).attr('aria-expanded') === 'false') {
    $('.navbar').addClass('bg-dark');
  } else {
    $('.navbar').removeClass('bg-dark');
  }
});