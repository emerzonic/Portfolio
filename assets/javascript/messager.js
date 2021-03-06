 // Initialize Firebase
$('#submit').click(function (e) {
    e.preventDefault();
    const formValues = getFormValues();
    if (allFieldsAreCompleted(formValues)) {
        return processFormSubmission(formValues);
    } else {
        return handleFormErrorFeedbackDisplay();
    }
});

function getFormValues() {
    const name = $('#name').val();
    const email = $('#email').val();
    const message = $('#message').val();
    return { name, email, message };
}

function allFieldsAreCompleted({name, email, message}){
    return (name.length > 0 && email.length > 0 && message.length > 0);
}

function processFormSubmission(formValues) {
    handleFormSuccessFeedbackDisplay();
    emptyInputFields();
    const contactMessage = buildContactMessage(formValues);
    saveContactMessage(contactMessage);
}

function buildContactMessage({name, email, message}) {
    const timeStamp = moment().format('LLLL');
    return {
        senderName: name,
        senderEmail: email,
        SenderMessage: message,
        timeStamp: timeStamp
    };
}

function handleFormSuccessFeedbackDisplay() {
    $('.feedbackMessage').removeClass('errorMessage');
    $('.feedbackMessage').addClass('successMessage');
    $('.feedbackMessage').text('Thank you for your message. I will get back to you as soon as possible.');
}

function emptyInputFields() {
    $('#name').val('').focus();
    $('#email').val('');
    $('#message').val('');
}

function handleFormErrorFeedbackDisplay() {
    $('.feedbackMessage').removeClass('successMessage');
    $('.feedbackMessage').addClass('errorMessage');
    $('.feedbackMessage').text('Please make sure to provide all information in the form.');
}

function saveContactMessage(contactMessage) {
    const database = getDatabaseInstance();
    database.ref().push(contactMessage);
}

function getDatabaseInstance() {
    const config = {
        apiKey: "AIzaSyCFwcRWfD4IFZP2xwllDBtZupuL1C94kWc",
        authDomain: "messagetracker-fdcb7.firebaseapp.com",
        databaseURL: "https://messagetracker-fdcb7.firebaseio.com",
        projectId: "messagetracker-fdcb7",
        storageBucket: "",
        messagingSenderId: "752908261736"
    };
    firebase.initializeApp(config);
    return firebase.database();
}


