function validation(){
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var male = document.getElementById("male");
    var female = document.getElementById("female");
    var notwishtodisclose = document.getElementById("notwishtodisclose");
    
    var address = document.getElementById("address").value;
    var fieldOfInterest = document.getElementById("fieldOfInterest").value;
    var mobilePattern = /^[7-9][0-9]{9}$/; // ^[] indicates start and $ indicates end
    var emailPattern = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,20})([.a-z]{2,10})?$/;
    
    
    if(firstName.trim() == "" ){
        document.getElementById("firstNameInvalid").style.visibility="visible";
        return false;
    }
    else{
        document.getElementById("firstNameInvalid").style.visibility="hidden";
        if(lastName.trim() == ""){
            document.getElementById("lastNameInvalid").style.visibility="visible";
    
        }
        else{
            document.getElementById("lastNameInvalid").style.visibility="hidden";
            if(emailPattern.test(email)){
                document.getElementById("emailInvalid").style.visibility="visible";
    
            }
            else{
                document.getElementById("emailInvalid").style.visibility="hidden";
                if(mobilePattern.test(phoneNumber)){
                    document.getElementById("phoneNumberInvalid").style.visibility="visible";
        
                }
                else{
                    document.getElementById("phoneNumberInvalid").style.visibility="hidden";
                    if(password.length < 8){
                        document.getElementById("passwordInvalid").style.visibility="visible";
            
                    }
                    else{
                        document.getElementById("passwordInvalid").style.visibility="hidden";
                        if(male.checked == true || female.checked == true || notwishtodisclose.checked == true){
                            document.getElementById("genderInvalid").style.visibility="visible";
                
                        }
                        else{
                            document.getElementById("genderInvalid").style.visibility="hidden";
                            if(address.trim() == ""){
                                document.getElementById("addressInvalid").style.visibility="visible";
                    
                            }
                            else{
                                document.getElementById("addressInvalid").style.visibility="hidden";
                                document.querySelectorAll('input[type="checkbox"]');
                                var isChecked = false;

                                checkboxes.forEach(function(checkbox) {
                                    if (checkbox.checked) {
                                        isChecked = true;
                                    }
                                });
                                if (!isChecked) {
                                    document.getElementById("languagesInvalid").style.visibility="visible";
                        
                                }
                                else{
                                    document.getElementById("languagesInvalid").style.visibility="hidden";
                                    if(fieldOfInterest.selectedIndex == -1){
                                        document.getElementById("fieldOfInterestInvalid").style.visibility="visible";
                            
                                    }
                                    else{
                                        document.getElementById("fieldOfInterestInvalid").style.visibility="hidden";
                                        return true;
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
}