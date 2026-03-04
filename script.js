function onSubmitPressed(event) {
    // Stops the default submission so we can show the alert first
    event.preventDefault();

    alert("Thank you for booking with us. You will receive an email shortly with all the details.");
    
    // Optionally, clear the form
    document.getElementById("contactForm").reset();
}