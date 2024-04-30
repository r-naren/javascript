function validation(){
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var male = document.getElementById("male");
    var female = document.getElementById("female");
    var notwishtodisclose = document.getElementById("notwishtodisclose");
    var tamil = document.getElementById("tamil");
    var english = document.getElementById("english");
    var french = document.getElementById("french");
    var address = document.getElementById("address").value;
    var selectBox= document.getElementById("fieldOfInterest");
    var file = document.getElementById("photo");
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
            if(!emailPattern.test(email)){
                document.getElementById("emailInvalid").style.visibility="visible";
    
            }
            else{
                document.getElementById("emailInvalid").style.visibility="hidden";
                if(!mobilePattern.test(phoneNumber)){
                    document.getElementById("phoneNumberInvalid").style.visibility="visible";
        
                }
                else{
                    document.getElementById("phoneNumberInvalid").style.visibility="hidden";
                    if(password.length < 8){
                        document.getElementById("passwordInvalid").style.visibility="visible";
            
                    }
                    else{
                        document.getElementById("passwordInvalid").style.visibility="hidden";
                        if(!(male.checked == true || female.checked == true || notwishtodisclose.checked == true)){
                            document.getElementById("genderInvalid").style.visibility="visible";
                
                        }
                        else{
                            document.getElementById("genderInvalid").style.visibility="hidden";
                            if(address.trim() == ""){
                                document.getElementById("addressInvalid").style.visibility="visible";
                    
                            }
                            else{
                                document.getElementById("addressInvalid").style.visibility="hidden";
                                if(!(tamil.checked || english.checked || french.checked)){
                                    document.getElementById("languagesInvalid").style.visibility="visible";
                        
                                }
                                else{
                                    document.getElementById("languagesInvalid").style.visibility="hidden";
                                    var selectedOptionsFOI = [];
  
                                    for (var i = 0; i < selectBox.options.length; i++) {
                                        var option = selectBox.options[i];
                                        if (option.selected) {
                                            selectedOptionsFOI.push(option.value);
                                        }
                                    }

                                    if (selectedOptionsFOI.length == 0) {
                                        document.getElementById("fieldOfInterestInvalid").style.visibility="visible";
                            
                                    }
                                    else{
                                        document.getElementById("fieldOfInterestInvalid").style.visibility="hidden";

                                        // if ( !(file && file['type'].split('/')[0] === 'image')){
                                        //     document.getElementById("fileInvalid").style.visibility="visible";
                                
                                        // }
                                        // else{
                                        //     document.getElementById("fileInvalid").style.visibility="hidden";
                                        var object = {
                                            result_firstName : firstName ,
                                            result_lastName : lastName ,
                                            result_phoneNumber: phoneNumber,
                                            result_email: email,
                                            result_password: password,
                                            result_male : male ,
                                            result_female: female,
                                            result_notwishtodisclose: notwishtodisclose,
                                            result_tamil : tamil ,
                                            result_english : english ,
                                            result_french : french ,
                                            result_address : address ,
                                            result_dateofbirth : document.getElementById("dateofbirth").value,
                                            result_time : document.getElementById("time").value,

                                            result_selectBox: selectBox,
                                            result_file : file
                                        }
                                        
                                        display(object);
                                        
                                        // }
                                        
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

function display(result){
    document.getElementById("form").style.display = "none";
    document.getElementById("result_Name").innerHTML = result.result_firstName+" "+result.result_lastName;
    document.getElementById("result_Email").innerHTML = result.result_email;
    document.getElementById("result_PhoneNumber").innerHTML = result.result_phoneNumber;
    document.getElementById("result_Password").innerHTML = result.result_password;
    if(result.result_male.checked == true){
        document.getElementById("result_Gender").innerHTML = result.result_male.value;
    }
    else if(result.result_female.checked == true){
        document.getElementById("result_Gender").innerHTML = result.result_female.value;
    }
    else if(result.result_notwishtodisclose.checked == true){
        document.getElementById("result_Gender").innerHTML = result.result_notwishtodisclose.value;
    }
    document.getElementById("result_Address").innerHTML = result.result_address;
    document.getElementById("result_DateOfBirth").innerHTML = result.result_dateofbirth;
    document.getElementById("result_Time").innerHTML = result.result_time;

    document.getElementById("table-output").style.display = "block";
}