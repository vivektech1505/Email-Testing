function sendEmail() {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "vivekn1505@gmail.com",
        Password : "1194A8FBA89D2C2E51971CE7CD5F70E77167",
        To : 'vivektech1505@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Contact Form Enquiry",
        Body : "Name : " + document.getElementById("name").value
        +"<br> Email: " + document.getElementById("email").value
        +"<br> Phone : " + document.getElementById("phone").value
        +"<br> Message : " + document.getElementById("message").value 
    }).then(
      message => alert(message)
    );
}