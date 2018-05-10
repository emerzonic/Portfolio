// Add scrollspy to <body>
$('body').scrollspy({target: ".navbar", offset: 74});

// Add smooth scrolling on all links inside the navbar
$(".nav-link").on('click', function(event) {
   
//   // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {

//     // Prevent default anchor click behavior
    event.preventDefault();

//     // Store hash
    var hash = this.hash;
    console.log(hash);

//     // Using jQuery's animate() method to add smooth page scroll
//     // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 1000, function(){

//     // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });

  }// End if

});



$( ".project" ).mouseover(function() {
    $(this ).addClass( "overlay" );
   
  }).mouseout(function() {
    $( this ).removeClass( "overlay" );
  });