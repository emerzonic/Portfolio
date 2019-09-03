$(document).ready(function () {

  addPolygonStyle();
  addInterneExplorerStyles();

  function addPolygonStyle() {
    if (browserIsSupported()) {
      $('#bg-home').addClass('polygon');
    }
  }

  function browserIsSupported() {
    const supportedBrowsers = ['Chrome', 'Safari', 'Firefox'];
    return checkAnyExist(supportedBrowsers);
  }

  function checkAnyExist(browsers) {
    const agent = getUserAgent();
    return browsers.some(browser => agent.includes(browser));
  }

  function getUserAgent() {
    return window.navigator.userAgent;
  }

  function addInterneExplorerStyles() {
    if (browerIsMicrosoft()) {
      addIESpecificClasses();
    }
  }

  function browerIsMicrosoft() {
    const microsoftBrowsers = ['MSIE', 'Edge'];
    return checkAnyExist(microsoftBrowsers);
  }

  function addIESpecificClasses() {
    $('.logo, .skill-heading').addClass('IE-background');
    $('.skillsGroup').addClass('IE-border-left');
  }

  $('body').scrollspy({
    target: ".navbar",
    offset: 74
  });

  $(".nav-link").on('click', function (event) {
    const hash = this.hash;
    if (hash) {
      scrollToPosition(event, hash);
    }
  });

  function scrollToPosition(event, hash) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 1000, function () {
      window.location.hash = hash;
    });
  }

  $(window).scroll(function () {
    if (pagePassedNavbarPosition()) {
      makeBackgroundDark();
    } else {
      checkToggleButton();
    }
  });

  function pagePassedNavbarPosition() {
    const pageDistanceFromTop = 500;
    const pageTop = getDocumentScrollTop();
    return pageTop > pageDistanceFromTop;
  }

  function getDocumentScrollTop() {
    return $(document).scrollTop();
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

  $(document).scroll(function () {
    animatePageSection();
  });

  function animatePageSection() {
    const mapping = getPagePositionMapping();
    $.each(mapping, function (section, position) {
      const $element = $(section);
      animate($element, position);
    });
  }

  function getPagePositionMapping() {
    const section = {
      about: '.aboutMe',
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

  function pageIsAtCurrentPosition(pagePosition) {
    const pageTop = getDocumentScrollTop();
    return pageTop > pagePosition;
  }
});