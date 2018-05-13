 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyCFwcRWfD4IFZP2xwllDBtZupuL1C94kWc",
    authDomain: "messagetracker-fdcb7.firebaseapp.com",
    databaseURL: "https://messagetracker-fdcb7.firebaseio.com",
    projectId: "messagetracker-fdcb7",
    storageBucket: "",
    messagingSenderId: "752908261736"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  //Push message to Firebase database
$('#submit').click(function (e) {
    e.preventDefault();
    var name = $('#name').val();
    var email = $('#email').val();
    var message = $('#message').val();
    var time = moment().format('LLLL');
    //validate none of the fields are empty
    if (name.length > 0 && email.length > 0 && message.length > 0) {
        $('.feedbackMessage').removeClass('errorMessage');
        $('.feedbackMessage').addClass('successMessage');
        $('.feedbackMessage').text('Thank you for your message. I will get back to you as soon as possible.');
        $('#name').val('').focus();
        $('#email').val('');
        $('#message').val('');

        var contactMessage = {
            senderName: name,
            senderEmail: email,
            SenderMessage: message,
            timeStamp: time
        };
        database.ref().push(contactMessage);
    } else {
        $('.feedbackMessage').removeClass('successMessage');
        $('.feedbackMessage').addClass('errorMessage');
        $('.feedbackMessage').text('Please make sure to provide all information in the form.');
    }
}); 


