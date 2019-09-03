$(document).ready(function () {
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
    if (pagePassedNavbarPosition()) {
      makeBackgroundDark();
    } else {
      checkToggleButton();
    }
  });

  $(document).scroll(function () {
    animatePageSection();
  });

  $('#toggle').click(function () {
    if (toggleButtonIsExpended()) {
      $('.navbar').removeClass('bg-dark');
    } else {
      $('.navbar').addClass('bg-dark');
    }
  });

  $(document).on('scroll', function () {
    animateProjectImages();
  })
});

function browserIsSupported() {
  const agent = getUserAgent();
  return (agent.includes("Chrome") || agent.includes("Safari") || agent.includes("Firefox"));
}

function getUserAgent() {
  return window.navigator.userAgent;
 }

 function browerIsMicrosoft() {
  const agent = getUserAgent();
  return agent.includes("MSIE") || agent.includes('Edge');
}

function addIESpecificClasses() {
  $('.logo, .skill-heading').addClass('IE-background');
  $('.skillsGroup').addClass('IE-border-left');
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

function pagePassedNavbarPosition() {
  const pageDistanceFromTop = 500;
  return $(document).scrollTop() > pageDistanceFromTop;
}

function makeBackgroundDark() {
  $('.navbar').addClass('bg-dark');
  $('.fixed-top').css('padding-top', '0.5rem');
}

function checkToggleButton() {
  if (!toggleButtonIsExpended()) {
    makeBackgroundLight();
  }
}

function toggleButtonIsExpended() {
  return $('#toggle').attr('aria-expanded') === 'true';
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

function animateProjectImages() {
  $('.project-div').each(function () {
    if (scrollingIsAtCurrentImage($(this))) {
      $(this).find('.image-card').css('margin', '0rem');
    }
  });
}

function scrollingIsAtCurrentImage(projectElement) {
  const pageTop = getDocumentScrollTop();
  const currentPositionFromTop = projectElement.position().top
  const offset = 650;
  return (pageTop >= (currentPositionFromTop - offset));
}

function getDocumentScrollTop() {
  return $(document).scrollTop();
}

function pageIsAtCurrentPosition(pagePosition) {
  const pageTop = getDocumentScrollTop();
  return pageTop > pagePosition;
}

