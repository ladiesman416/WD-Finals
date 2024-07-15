function validateForm() {
    var yourEmail = document.getElementById('yourEmail').value;
    var myEmail = document.getElementById('myEmail').value;
    var yourMessage = document.getElementById('yourMessage').value;

    if (!yourEmail || !validateEmail(yourEmail)) {
        alert("Please enter a valid 'your email' address.");
        return false;
    }
    if (!myEmail || !validateEmail(myEmail)) {
        alert("Please enter a valid 'my email' address.");
        return false;
    }
    if (!yourMessage) {
        alert("Please enter your message.");
        return false;
    }
    alert("Form submitted successfully!");
}

function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
