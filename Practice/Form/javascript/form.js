function validation() {
    var firstName = checkFirstName();
    var lastName = checkLastName();
    var phoneNumber = checkPhoneNumber();
    var email = checkEmail();
    var password = checkPassword();
    var gender = checkGender();
    var address = checkAddress();
    var dob = document.getElementById("dateofbirth").valueAsDate.toLocaleDateString('en-GB');
    var time = document.getElementById("time").value;
    var languages = checkLanguages();
    var fieldOfInterest = checkFieldOfInterest();
    var file = document.getElementById("photo");
    if(firstName != false){
        if(lastName!=false){
            if(phoneNumber!=false){
                if(email!=false){
                    if(password!=false){
                        if(gender!=false){
                            if(address!=false){
                                if(dob!=""){
                                    if(time!=""){
                                        if(languages!=false){
                                            if(fieldOfInterest!=false){
                                                if(file.value!= ""){
                                                    var object = {
                                                        result_firstName: firstName,
                                                        result_lastName: lastName,
                                                        result_phoneNumber: phoneNumber,
                                                        result_email: email,
                                                        result_password: password,
                                                        result_gender : gender,
                                                        result_address: address,
                                                        result_dateofbirth: dob,
                                                        result_time: time,
                                                        result_languages: languages,
                                                        result_fieldOfInterest: fieldOfInterest,
                                                        result_file: file
                                                    }
                                                    display(object);
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return false;


    // if (lastName.trim() == "" || !(namePattern.test(lastName))) {
    //     document.getElementById("lastNameInvalid").style.visibility = "visible";
    // }
    // else {
    //     document.getElementById("lastNameInvalid").style.visibility = "hidden";
    //     if (!emailPattern.test(email)) {
    //         document.getElementById("emailInvalid").style.visibility = "visible";

    //     }
    //     else {
    //         document.getElementById("emailInvalid").style.visibility = "hidden";
    //         if (!mobilePattern.test(phoneNumber)) {
    //             document.getElementById("phoneNumberInvalid").style.visibility = "visible";

    //         }
    //         else {
    //             document.getElementById("phoneNumberInvalid").style.visibility = "hidden";
    //             if (password.length < 8) {
    //                 document.getElementById("passwordInvalid").style.visibility = "visible";

    //             }
    //             else {
    //                 document.getElementById("passwordInvalid").style.visibility = "hidden";
    //                 if (!(male.checked == true || female.checked == true || notwishtodisclose.checked == true)) {
    //                     document.getElementById("genderInvalid").style.visibility = "visible";

    //                 }
    //                 else {
    //                     document.getElementById("genderInvalid").style.visibility = "hidden";
    //                     if (address.trim() == "") {
    //                         document.getElementById("addressInvalid").style.visibility = "visible";

    //                     }
    //                     else {
    //                         document.getElementById("addressInvalid").style.visibility = "hidden";
    //                         if (!(tamil.checked || english.checked || french.checked)) {
    //                             document.getElementById("languagesInvalid").style.visibility = "visible";

    //                         }
    //                         else {
    //                             document.getElementById("languagesInvalid").style.visibility = "hidden";
    //                             var selectedOptionsFOI = [];

    //                             for (var i = 0; i < selectBox.options.length; i++) {
    //                                 var option = selectBox.options[i];
    //                                 if (option.selected) {
    //                                     selectedOptionsFOI.push(option.value);
    //                                 }
    //                             }

    //                             if (selectedOptionsFOI.length == 0) {
    //                                 document.getElementById("fieldOfInterestInvalid").style.visibility = "visible";

    //                             }
    //                             else {
    //                                 document.getElementById("fieldOfInterestInvalid").style.visibility = "hidden";

    //                                 // if ( !(file && file['type'].split('/')[0] === 'image')){
    //                                 //     document.getElementById("fileInvalid").style.visibility="visible";

    //                                 // }
    //                                 // else{
    //                                 //     document.getElementById("fileInvalid").style.visibility="hidden";
                                    

                                    


    //                                 // }

    //                             }
    //                         }
    //                     }
    //                 }
    //             }
    //         }
    //     }


    // }
    // return false;
}
// first Name
function checkFirstName() {
    var firstName = document.getElementById("firstName").value;
    var namePattern = /^([a-zA-Z@]+)$/;
    if (firstName.trim() == "") {

        document.getElementById("firstNameInvalid").innerHTML = "First Name can't be empty";
        document.getElementById("firstNameInvalid").style.visibility = "visible";
    }
    else if (!(namePattern.test(firstName))) {

        document.getElementById("firstNameInvalid").innerHTML = "First Name should not contain numbers or special characters";
        document.getElementById("firstNameInvalid").style.visibility = "visible";
    }
    else {
        document.getElementById("firstNameInvalid").style.visibility = "hidden";
        return firstName;
    }
    return false;
}
//last Name
function checkLastName() {
    var lastName = document.getElementById("lastName").value;
    var namePattern = /^([a-zA-Z@]+)$/;
    if (lastName.trim() == "") {

        document.getElementById("lastNameInvalid").innerHTML = "Last Name can't be empty";
        document.getElementById("lastNameInvalid").style.visibility = "visible";
    }
    else if (!(namePattern.test(lastName))) {

        document.getElementById("lastNameInvalid").innerHTML = "Last Name should not contain numbers or special characters";
        document.getElementById("lastNameInvalid").style.visibility = "visible";
    }
    else {
        document.getElementById("lastNameInvalid").style.visibility = "hidden";
        return lastName;
    }
    return false;
}
// Email 
function checkEmail() {
    var email = document.getElementById("email").value;
    var emailPattern = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,20})([.a-z]{2,10})?$/;
    if (email.trim()=="") {

        document.getElementById("emailInvalid").innerHTML = "Email can't be empty";
        document.getElementById("emailInvalid").style.visibility = "visible";
    }
    else if (!emailPattern.test(email)) {

        document.getElementById("emailInvalid").innerHTML = "Enter valid email";
        document.getElementById("emailInvalid").style.visibility = "visible";
    }
    else {
        document.getElementById("emailInvalid").style.visibility = "hidden";
        return email;
    }
    return false;
}
//Phone number
function checkPhoneNumber() {
    var phoneNumber = document.getElementById("phoneNumber").value;
    var mobilePattern = /^[7-9][0-9]{9}$/; // ^[] indicates start and $ indicates end
    if (phoneNumber.trim()=="") {

        document.getElementById("phoneNumberInvalid").innerHTML = "Phone Number can't be empty";
        document.getElementById("phoneNumberInvalid").style.visibility = "visible";
    }
    else if (!mobilePattern.test(phoneNumber)) {

        document.getElementById("phoneNumberInvalid").innerHTML = "Enter valid 10 digit Phone number";
        document.getElementById("phoneNumberInvalid").style.visibility = "visible";
    }
    else {
        document.getElementById("phoneNumberInvalid").style.visibility = "hidden";
        return phoneNumber;
    }
    return false;
}

//password 
function checkPassword() {
    var password = document.getElementById("password").value;
    if(password.trim() == ""){
        document.getElementById("passwordInvalid").innerHTML = "Password can't be empty";
        document.getElementById("passwordInvalid").style.visibility = "visible";
    }
    else if (password.length < 8) {
        document.getElementById("passwordInvalid").innerHTML = "Password must be 8 characters long";
        document.getElementById("passwordInvalid").style.visibility = "visible";
    }
    else {
        document.getElementById("passwordInvalid").style.visibility = "hidden";
        return password;
    }
    return false;

}

//gender
function checkGender() {
    var isPresent = false;
    var gender = document.getElementsByName("gender");
    var i = 0;
    for (; i < gender.length; i++) {
        gender[i].checked = true;
        isPresent = true;
        break;
    }
    if (!(isPresent)) {
        document.getElementById("genderInvalid").innerHTML = "Select any gender";
        document.getElementById("genderInvalid").style.visibility = "visible";
    }
    else {
        document.getElementById("genderInvalid").style.visibility = "hidden";
        return gender[i].value;
    }
    return false;
}
// address
function checkAddress() {
    var address = document.getElementById("address").value;
    if (address.trim() == "") {
        document.getElementById("addressInvalid").innerHTML = "Address can't be empty";
        document.getElementById("addressInvalid").style.visibility = "visible";

    }
    else {
        document.getElementById("addressInvalid").style.visibility = "hidden";
        return address;
    }
    return false;

}
//languages
function checkLanguages() {
    var languagesList = []
    var languages = document.getElementsByName("languages");
    for (i = 0; i < languages.length; i++) {
        if(languages[i].checked == true){
            languagesList.push(languages[i]);
        }
        
    }
    if (languagesList.length == 0) {
        document.getElementById("languagesInvalid").innerHTML = "Select any languages";
        document.getElementById("languagesInvalid").style.visibility = "visible";
    }
    else {
        document.getElementById("languagesInvalid").style.visibility = "hidden";
        return languagesList;
    }
    return false;
}

//field of interest ( select box )
function checkFieldOfInterest() {
    var FOI = document.getElementById("fieldOfInterest");
    var FOIList = [];

    for (var i = 0; i < FOI.options.length; i++) {
        var option = FOI.options[i];
        if (option.selected) {
            FOIList.push(option.value);
        }
    }

    if (FOIList.length == 0) {
        document.getElementById("fieldOfInterestInvalid").innerHTML = "Select any field of interest";
        document.getElementById("fieldOfInterestInvalid").style.visibility = "visible";
        
    }
    else {
        document.getElementById("fieldOfInterestInvalid").style.visibility = "hidden";
        return FOIList;
    }
    return false;
}


function display(result) {
    document.getElementById("form").style.display = "none";
    document.getElementById("table-output").style.display = "block";
    document.getElementById("result_Name").innerHTML = result.result_firstName + " " + result.result_lastName;
    document.getElementById("result_Email").innerHTML = result.result_email;
    document.getElementById("result_PhoneNumber").innerHTML = result.result_phoneNumber;
    document.getElementById("result_Password").innerHTML = result.result_password;
    document.getElementById("result_Gender").innerHTML = result.result_gender;
    document.getElementById("result_Address").innerHTML = result.result_address;
    document.getElementById("result_DateOfBirth").innerHTML = result.result_dateofbirth;
    document.getElementById("result_Time").innerHTML = result.result_time;
    document.getElementById("result_Languages").innerHTML = "<ul>";
    for (i = 0; i < result.result_languages.length; i++) {
        document.getElementById("result_Languages").innerHTML+= "<li>"+ result.result_languages[i].value+"</li>";
    }
    document.getElementById("result_Languages").innerHTML += "</ul>";
    document.getElementById("result_FieldOfInterest").innerHTML = "<ul>";
    for (i = 0; i < result.result_fieldOfInterest.length; i++) {
        document.getElementById("result_FieldOfInterest").innerHTML += "<li>"+ result.result_fieldOfInterest[i]+"</li>";
    }
    document.getElementById("result_FieldOfInterest").innerHTML += "</ul>";

}