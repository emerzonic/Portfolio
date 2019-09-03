$(document).ready(function () {
  //add polygon if browser support it
  debugger
  if (browserIsSupported()) {
    $('#bg-home').addClass('polygon');
  }

  if (browerIsMicrosoft()) {
    addIESpecificClasses();
  }

  $('body').scrollspy({
    target: ".navbar",
    offset: 74
  });

  $(".nav-link").on('click', function (event) {
    if (this.hash) {
      scrollToPosition(event);
    }
  });

  $(window).scroll(function () {
    if ($(document).scrollTop() > 500) {
      makeBackgroundDark();
    } else {
      if (!toggleButtonIsExpended()) {
        makeBackgroundLight();
      }
    }
  });

  $(document).scroll(function () {
    animatePageSection();
  });

  $('#toggle').click(function () {
    if ($(this).attr('aria-expanded') === 'false') {
      $('.navbar').addClass('bg-dark');
    } else {
      $('.navbar').removeClass('bg-dark');
    }
  });


  $(document).on('scroll', function () {
    $('.project-div').each(function () {
      if ($(document).scrollTop() >= $(this).position().top - 650) {
        $(this).find('.image-card').css('margin', '0rem');
      }
    })
  })
});

function browserIsSupported() {
  const agent = getUserAgent();
  return (agent.includes("Chrome") || agent.includes("Safari") || agent.includes("Firefox"));
}

function addIESpecificClasses() {
  $('.logo, .skill-heading').addClass('IE-background');
  $('.skillsGroup').addClass('IE-border-left');
}
function getUserAgent() {
 return window.navigator.userAgent;
}

function scrollToPosition(event) {
  event.preventDefault();
  const hash = this.hash;
  $('html, body').animate({
    scrollTop: $(hash).offset().top
  }, 1000, function () {
    window.location.hash = hash;
  });
}

function browerIsMicrosoft() {
  const agent = getUserAgent();
  return agent.includes("MSIE") || agent.includes('Edge');
}

function makeBackgroundDark() {
  $('.navbar').addClass('bg-dark');
  $('.fixed-top').css('padding-top', '0.5rem');
}

function toggleButtonIsExpended() {
  return $('#toggle').attr('aria-expanded');
}

function makeBackgroundLight() {
  $('.navbar').removeClass('bg-dark');
  $('.fixed-top').css('padding-top', '3rem');
}

function animatePageSection() {
  const mapping = getPagePositionMapping();
  $.each(mapping, function(section, position){
      const $element =  $(section);
      animate($element, position);
  });
}

function getPagePositionMapping() { 
  const section = {
    about:   '.aboutMe',
    social: '.social-div',
    skill: '.mySkills',
    projects: '.myProjects',
    contact: '.myContact',
  };

 return {
    [section.about]: 360,
    [section.social]: 720,
    [section.skill]: 1250,
    [section.projects]: 1575,
    [section.contact]: 5888,
  };
 }

function animate(element, pagePosition) {
  if (pageIsAtCurrentPosition(pagePosition)) {
    element.addClass('show-element');
  }
}

function pageIsAtCurrentPosition(pagePosition) {
  return $(document).scrollTop() > pagePosition;
}