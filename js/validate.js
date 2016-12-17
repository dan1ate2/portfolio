// validates the contact form
function validateContactForm() {
    // document.getElementById("").value;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var re; // regular expression

    // validate name
    // can have single spaces, " ' " or " - "
    if (name == "") {
        alert("The Name field cannot be left blank.");
        document.getElementById("name").focus();
        return false;
    }
    else {
        re = new RegExp(/^([a-zA-Z\'\-]+)(\s[a-zA-Z\'\-]+){0,5}$/);

        if (!re.test(name)) {
            alert("You have entered an invalid name." + 
                "\nOnly words, single spaces, \" ' \" and \" - \" are allowed.");
            document.getElementById("name").select();
            return false;
        }
    }

    // validate email
    // '@' and '.' required
    // can have longer domain prefixes e.g. '.scu.edu.au'
    if (email == "" && chosenContact == document.getElementById("email").value) {
        alert("An email is required.");
        document.getElementById("email").focus();
        return false;
    }
    else if (!email == "") {
        re = new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}(\.[a-zA-Z]{2,3})*$/);

        if (!re.test(email)) {
            alert('You have entered an invalid email.');
            document.getElementById("email").select();
            return false;
        }
    }

    // validate phone
    // validate phone number
    // 12 characters including spaces, only digits
    if (phone == "") {
        alert("A phone or mobile number is required" + 
                "\nMust be 8 or more digits, no spaces allowed.");
        document.getElementById("phone").focus();
        return false;
    }
        else if (!phone == "") {
        //re = new RegExp(/^\d{4}\s\d{3}\s\d{3}$/)
        re = new RegExp(/^\d{8,}$/)

        if (!re.test(phone)) {
            alert("You have entered an invalid phone number." + 
                "\nMust be 8 or more digits, no spaces allowed.");
            document.getElementById("phone").select();
            return false;
        }
    }

} // end of validateContactForm