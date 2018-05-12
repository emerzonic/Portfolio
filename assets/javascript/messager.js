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

$('#name').val(' ').focus();
$('#email').val(' ');
$('#message').val(' ');

var contactMessage = {
    senderName: name,
    senderEmail: email,
    SenderMessage: message,
    timeStamp: time
};

database.ref().push(contactMessage);
 }); 


