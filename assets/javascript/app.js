$(document).ready(function () {

  //dont add polygon if browser don't support it
  var agent = window.navigator.userAgent;
  console.log(agent)
  if (agent.includes("Chrome") || agent.includes("Safari") || agent.includes("Firefox")) {
    $('#bg-home').addClass('polygon')
  }

  if (agent.includes("MSIE")||agent.includes('Edge')) {
    $('.logo, .skill-heading').addClass('IE-background')
    $('.skillsGroup').addClass('IE-border-left')
  }


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
      $('#home-link-item').removeClass('d-none');
      $('.fixed-top').css('padding-top', '0.5rem');
    } else {
      if ($('#toggle').attr('aria-expanded') !== 'true') {
        $('.navbar').removeClass('bg-dark');
        $('#home-link-item').addClass('d-none');
        $('.fixed-top').css('padding-top', '3rem');
      }
    }
  });


  //control the social icons animations
  $(window).scroll(function () {
    if ($(document).scrollTop() > 730) {
      $('.contact-div').removeClass('hide-element');
      $('.contact-div').addClass('show-element');
    } else {
      $('.contact-div').addClass('hide-element');
      $('.contact-div').removeClass('show-element');
    }
  });


  //control the social icons animations
  $(window).scroll(function () {
    if ($(document).scrollTop() > 360) {
      $('.aboutMe').removeClass('hide-element').addClass('show-element');;
    } else {
      $('.aboutMe').addClass('hide-element').removeClass('show-element');
    }
  });


  $(window).scroll(function () {
    if ($(document).scrollTop() > 1250) {
      $('.mySkills').removeClass('hide-element').addClass('show-element');;
    } else {
      $('.mySkills').addClass('hide-element').removeClass('show-element');
    }
  });

  $(window).scroll(function () {
    if ($(document).scrollTop() > 1575) {
      $('.myProjects').removeClass('hide-element').addClass('show-element');;
    } else {
      $('.myProjects').addClass('hide-element').removeClass('show-element');
    }
  });

  $(window).scroll(function () {
    if ($(document).scrollTop() > 2909) {
      console.log($(window).width())
      $('.myContact').removeClass('hide-element').addClass('show-element');;
    } else {
      $('.myContact').addClass('hide-element').removeClass('show-element');
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


})