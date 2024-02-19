//Check which dates are currently a valid input (Tomorrow and beyond)
function checkDate() {
    var today = new Date();
    var dd = String(today.getDate() + 1).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

    var futureDate = yyyy + '-' + mm + '-' + dd;
    
    document.getElementById("projectDate").setAttribute("min", futureDate);
}

//Email confirmation by checking that the inputted data is the same.
function checkEmails() {
    var email = document.getElementsByName("emails").value;
    var confirmEmail = document.getElementsByName("confirm_email").value;
    if (email !== confirmEmail) {
        alert("Emails do not match");
        return false;
    } else {return true}
}

//Assigns the entered data for use in displaying information to the user via a pop-up.
function validateForm() {
    var formData = {
        date: document.getElementsByName("projectDate")[0].value,
        duration: document.getElementsByName("duration")[0].value,
        firstName: document.getElementsByName("names")[0].value,
        email: document.getElementsByName("emails")[0].value,
        phone: document.getElementsByName("ukTelephone")[0].value,
        contactMethod: document.getElementsByName("contactMethod")[0].value,
        description: document.getElementsByName("txtAr")[0].value
    };

    // Construct the message for the pop-up
    var message = "Form data:\n\n";
    i = 0;
    for (var key in formData) {
        if (formData.hasOwnProperty(key)) {
            if(i == 1) {
                message += key + ": " + formData[key] + " minutes\n";
            } else {
                message += key + ": " + formData[key] + "\n";
            }
        }
        i++;
    }

    var yourEmail = "To: 230075926@aston.ac.uk";
    message += "\n" + yourEmail;

    // Ask the user to confirm
    var confirmation = confirm(message);
    
    // If user confirms, return true to submit the form, otherwise return false
    return confirmation;
}
