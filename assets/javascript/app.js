$(document).ready(function () {

  //dont add polygon if browser don't support it
  var agent = window.navigator.userAgent;
  if (agent.includes("Chrome") || agent.includes("Safari") || agent.includes("Firefox")) {
    $('#bg-home').addClass('polygon')
  }

  if (agent.includes("MSIE") || agent.includes('Edge')) {
    $('.logo, .skill-heading').addClass('IE-background')
    $('.skillsGroup').addClass('IE-border-left')
  }


  // Add scrollspy to page body
  $('body').scrollspy({
    target: ".navbar",
    offset: 74
  });


  //controls the page scroll when the nav link is clicked
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


  //Select and  animate
  $(window).scroll(function () {
    //select the elements to animate
    var aboutTitle = $('.aboutMe'),
      socialTitle  = $('.social-div'),
      skillTitle   = $('.mySkills'),
      skillsContent   = $('.skills-content'),
      projectTitle = $('.myProjects'),
      contactTitle = $('.myContact'),

      //get the scroll position to animate
      aboutPosition   = 360,
      socialPosition  = 730,
      skillPosition   = 1250,
      skillContPosition   = 1255,
      projectPosition = 1575,
      contactPosition = 2909;

    animate(aboutTitle, aboutPosition);
    animate(socialTitle, socialPosition);
    animate(skillTitle, skillPosition);
    animate(skillsContent, skillContPosition);
    animate(projectTitle, projectPosition);
    animate(contactTitle, contactPosition);
  });


  //controls animation base on page scroll position
  function animate(element, pagePosition) {
    if ($(document).scrollTop() > pagePosition) {
      element.removeClass('hide-element')
        .addClass('show-element');;
    } else {
      element.addClass('hide-element')
        .removeClass('show-element');
    }
  }

  //control the navbar background on mobile devices
  $('#toggle').click(function () {
    if ($(this).attr('aria-expanded') === 'false') {
      $('.navbar').addClass('bg-dark');
    } else {
      $('.navbar').removeClass('bg-dark');
    }
  });


})