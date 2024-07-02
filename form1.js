function displayData() {
    var firstName=document.getElementById("firstName").value;
    var lastName=document.getElementById("lastName").value;
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    var confirmPassword=document.getElementById("confirmPassword").value;
    var gender=document.querySelector('input[name="gender"]:checked');
    var country=document.getElementById("country").value;
    var phoneNumber=document.getElementById("phoneNumber").value;
    var acceptTerms=document.getElementById("acceptterms").checked;
    var errorMessage="";
    
    if(!firstName || !lastName || !email || !password || !confirmPassword || !gender || !country || !phoneNumber || !acceptTerms){
        errorMessage += "Please fill in all fields.\n";
    }

    if(!/(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}/.test(password)){
        errorMessage+="Password must contain at least one capital letter, one number, one special character, and be at least 8 characters long."
    }

    if(phoneNumber.length!==10){
        errorMessage+="Phone number must be exactly 10 digits.\n";
    }

    if(password!==confirmPassword){
        errorMessage+="Passwords do not match.\n";
    }

    if(!acceptTerms){
        errorMessage+="Please accept the terms and conditions.\n";
    }

    if(errorMessage){
        alert(errorMessage);
        return false;
    }

    return true;
}