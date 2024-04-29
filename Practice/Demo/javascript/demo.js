document.write("<h1>Hello</h1>")
document.write("<h2>World</h2>");
var num = 10;  // number
var name = "Naren"; // name
var flag = true; // flag
document.writeln(num + "<br>");
document.writeln(name + "<br>");
document.writeln(flag + "<br>");
//alert(num); // pop up message
var num1 = 9;
var num2 = 10.5;
document.writeln(num1 + num2 + "Hello" + num2 + num1 + "<br>");
// control statement
if (num1 == 0) {
    document.writeln(0 + "<br>");
}
else if (num1 == 2 || num1 == 3) {
    document.writeln(2 + " or " + 3 + "<br>");

}
else {
    document.writeln(num1 + "<br>");

}
//switch case
var x = 9;
switch (x) {

    case 0:
        document.writeln("<h1>Sunday</h1>");
        break;
    case 1:
        document.writeln("<h1>Monday</h1>");
        break;
    case 2:
        document.writeln("<h1>Tuesday</h1>");
        break;
    case 3:
        document.writeln("<h1>Wednesday</h1>");
        break;
    case 4:
        document.writeln("<h1>Thursday</h1>");
        break;
    case 5:
        document.writeln("<h1>Friday</h1>");
        break;
    case 6:
        document.writeln("<h1>Saturday</h1>");
        break;
    default:
        document.writeln("<h1>Enter correct value</h1>");
}

// for loop - when number of iteration is known
var count;
document.write("2 tables" + "<br>");

for (count = 1; count <= 10; count++) {
    document.write(count + " x 2 = " + count * 2);
    document.write("<br>");
}

//while loop - when condition to break is known
var x = 1;
document.write("<br>While loop <br>")
// Exit when x becomes greater than 4 
while (x <= 4) {
    document.write("Value of x:" + x + "<br />");

    // increment the value of x for 
    // next iteration 
    x++;
}
var x = 1;
document.write("<br>Do While loop <br>")
// Exit when x becomes greater than 4 
do {
    document.write("Value of x:" + x + "<br />");

    // increment the value of x for 
    // next iteration 
    x++;
} while (x <= 4);

//Functions
document.write("<br>Functions <br>")
document.write(addNumber(1, 2));
function addNumber(x, y) {
    return (x + y);
}
//Arrays
document.write("<br>Arrays <br>")
var fruits = ["orange", 1, true]
fruits.push("apple");
for (var i = 0; i < fruits.length; i++) {
    document.write(fruits[i] + "<br>");
}
//Objects
document.write("<br>Objects <br>")
document.write("Object creation using variable<br>")
var car = {
    car_brand: "Lambo",
    car_model: "Aventandor",
    car_price: 35000000,
    //method
    teslaAutoPilot: function () {
        return ("<h2>This is autopilot</h2>");
    }
}
car.fuelType = "Diesel";
document.write(car.car_brand + "<br>")
document.write(car.car_model + "<br>")
document.write(car.car_price + "<br>")
document.write(car.fueltype + "<br>")

document.write(car.teslaAutoPilot() + "<br>")
delete car.car_price;
//creating using constructor
document.write("Object creation using constructor<br>")
function carsTemplate(car_brand, car_model, car_price) {
    this.car_brand = car_brand;
    this.car_model = car_model;
    this.car_price = car_price;
    this.teslaAutoPilot = function () {
        return ("<h2>This is auto</h2>");
    }
}
var car1 = new carsTemplate("BMW", "I5", 450000);
document.write(car1.car_brand + "<br>")
document.write(car1.car_model + "<br>")
document.write(car1.car_price + "<br>")
document.write(car1.teslaAutoPilot() + "<br>")

var str1 = new String();

//DOM manipulations
function buttonClick() {
    alert("Button clicked");
    var output = document.getElementsByClassName("heading2");
    for (var i = 0; i < output.length; i++) {
        output[i].innerHTML = "Hai";
    }
}
function buttonClickText() {
    var text = document.getElementById("text1").value;
    alert("value inside text box is: " + text)
}
function validation() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "username" && password == "password") 
    { 
        alert("valid crendtial"); 
    }
    else {
        alert("Invalid credential");
    }
}
// from radio button
function gender(){
    var male = document.getElementById("male");
    var female = document.getElementById("female");
    if(male.checked == true){
        alert("You are "+male.value);
    }
    else if(female.checked == true){
        alert("You are "+female.value)
    }
    else{
        alert("No gender selected")
    }
}
//from select box
function selectBox(){
    var languages = document.getElementById("languages");
    alert(languages.options[languages.selectedIndex].value)
}
//get element by tag name
function changeStyling(){
    var paragraphs = document.getElementsByTagName("p");
    paragraphs[0].style.color = "red";
    paragraphs[1].style.backgroundColor = "blue";
}

//mouse over and mouse out events
function setNewImage(){
    document.getElementById("image1").src = "./Images/mine.jpg";

}
function setOldImage(){
     document.getElementById("image1").src = "./Images/sea.jpg";
    
}
//validation
function loginValidation(){
    var username = document.getElementById("username1");
    var password = document.getElementById("password1");
    if (username.value.trim() == "") 
    { 
        alert("Blank username is not allowed");
        username.style.border = "solid 3px red";
        document.getElementById("emptyUsername").style.visibility = "visible";

        return false; 
    }
    else if(password.value.trim() == ""){
        alert("Blank password is not allowed");
        return false; 
    }
    else if(password.value.trim().length <8){
        alert("Password is less than 8 characters");
        return false;
    }
    else {
        return true;
    } 
}
// regular expression
/*
		○ \d - numbers
		○ \w - match any word character(a-z, A-Z, 0-9 & _)
		○ \s - matches whitespace and tabs
		○ \t - tabs only

*/
function regex(){
    var username = document.getElementById("username2").value;
    var regex = new RegExp("E00","i");
    var regex = /[a-z 0-9]0[A-Z]0/i;
    var regex = /[^a-b][0-9]+/i; // ^ represents not to be pres et
    
    var mobile = /^([7-9][0-9]{9})$/; // ^[] indicates start and $ indicates end
    var phoneNumber = document.getElementById("phoneNumber").value;
    var email = document.getElementById("email").value;

    var emailPattern = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,20})([.a-z]{2,10})?$/;
    if(regex.test(username) && mobile.test(phoneNumber) && emailPattern.test(email)){
        alert("Valid");
        return true;
    }
    else if (!regex.test(username) && mobile.test(phoneNumber) && emailPattern.test(email)){
        alert("Invalid username");
        return false;
    }
    else if(regex.test(username) && !mobile.test(phoneNumber) && emailPattern.test(email) ){
       
        alert("Invalid mobilenumber");
        return false;
    }
    else if(regex.test(username) && mobile.test(phoneNumber) && !emailPattern.test(email)){
        alert("Invalid email id");
        return false;
    }
    else{
        alert("Invalid");
        return false;
    }
}





