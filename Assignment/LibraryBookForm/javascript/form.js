function presentYear(){
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    document.getElementById('currentYear').innerHTML = currentYear;
}

function checkCategory() {
    var category = document.getElementById("departments");
    var department = "";
    for (var i = 0; i < category.options.length; i++) {
        var option = category.options[i];
        if (option.selected) {
            department = option.value;
            break;
        }
    }
    if (department == "Select") {
        document.getElementById("departmentsInvalid").innerHTML = "Select any category";
        document.getElementById("departmentsInvalid").style.display = "block";
        document.getElementById("departmentsInvalid").style.color = "red";

        
    }
    else {
        document.getElementById("departmentsInvalid").innerHTML = "Valid";
        
        document.getElementById("departmentsInvalid").style.color = "green";
        document.getElementById("departmentsInvalid").style.display = "none";
        return department;
    }
    return false;
}

function checkBookName() {
    var bookName = document.getElementById("bookName").value;
    var namePattern = /^([a-zA-Z@]+)$/;
    if (bookName.trim() == "") {

        document.getElementById("bookNameInvalid").innerHTML = "Book Name can't be empty";
        document.getElementById("bookNameInvalid").style.display = "block";
        document.getElementById("bookNameInvalid").style.color = "red";

    }
    else if (!(namePattern.test(bookName))) {
        document.getElementById("bookNameInvalid").style.color = "red";
        document.getElementById("bookNameInvalid").innerHTML = "Book Name should not contain numbers or special characters";
        document.getElementById("bookNameInvalid").style.display = "block";
    }
    else if (bookName.trim().length>50) {
        document.getElementById("bookNameInvalid").style.color = "red";
        document.getElementById("bookNameInvalid").innerHTML = "Book Name length should not exceed 50 characters";
        document.getElementById("bookNameInvalid").style.display = "block";
    }
    else {
        document.getElementById("bookNameInvalid").innerHTML = "Valid";
        document.getElementById("bookNameInvalid").style.color = "green";

        document.getElementById("bookNameInvalid").style.display = "block";
        return bookName;
    }
    return false;
}

function checkAuthorEmail(){
    var authorEmail = document.getElementById("authorEmail").value;
    var emailPattern = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+)\.([a-z]{2,20})([\.a-z]{2,10})?$/;
    if (authorEmail.trim()=="") {

        document.getElementById("authorEmailInvalid").innerHTML = "Email can't be empty";
        document.getElementById("authorEmailInvalid").style.display = "block";
        document.getElementById("authorEmailInvalid").style.color = "red";

    }
    else if (!emailPattern.test(authorEmail)) {

        document.getElementById("authorEmailInvalid").innerHTML = "Enter valid email";
        document.getElementById("authorEmailInvalid").style.display = "block";
        document.getElementById("authorEmailInvalid").style.color = "red";
    }
    else {
        document.getElementById("authorEmailInvalid").innerHTML = "Valid";

        document.getElementById("authorEmailInvalid").style.display = "block";
        document.getElementById("authorEmailInvalid").style.color = "green";
        return authorEmail;
    }
    return false;
}

function checkAuthorName() {
    var authorName = document.getElementById("authorName").value;
    var namePattern = /^([a-zA-Z@]+)$/;
    if (authorName.trim() == "") {

        document.getElementById("authorNameInvalid").innerHTML = "Author Name can't be empty";
        document.getElementById("authorNameInvalid").style.display = "block";
        document.getElementById("authorNameInvalid").style.color = "red";

    }
    else if (!(namePattern.test(authorName))) {
        document.getElementById("authorNameInvalid").style.color = "red";
        document.getElementById("authorNameInvalid").innerHTML = "Author Name should not contain numbers or special characters";
        document.getElementById("authorNameInvalid").style.display = "block";
    }
    else if (authorName.trim().length > 50) {
        document.getElementById("authorNameInvalid").style.color = "red";
        document.getElementById("authorNameInvalid").innerHTML = "Author Name length should not exceed 50 characters";
        document.getElementById("authorNameInvalid").style.display = "block";
    }
    else {
        document.getElementById("authorNameInvalid").innerHTML = "Valid";
        document.getElementById("authorNameInvalid").style.color = "green";

        document.getElementById("authorNameInvalid").style.display = "block";
        return authorName;
    }
    return false;
}

function checkPublishedYear() {
    var publishedYear = document.getElementById("publishedYear").value;
    if (publishedYear=="" || publishedYear == NaN) {

        document.getElementById("publishedYearInvalid").innerHTML = "Published year can't be empty";
        document.getElementById("publishedYearInvalid").style.display = "block";
        document.getElementById("publishedYearInvalid").style.color = "red";

    }
    else if (publishedYear < 1000 || publishedYear > 2100 ) {
        document.getElementById("publishedYearInvalid").style.color = "red";
        document.getElementById("publishedYearInvalid").innerHTML = "Enter a valid publish year";
        document.getElementById("publishedYearInvalid").style.display = "block";
    }
    else {
        document.getElementById("publishedYearInvalid").innerHTML = "Valid";
        document.getElementById("publishedYearInvalid").style.color = "green";

        document.getElementById("publishedYearInvalid").style.display = "block";
        return publishedYear;
    }
    return false;
}

function checkBookPrice() {
    var bookPrice = document.getElementById("bookPrice").value;
    var bookPricePattern = /^(([0-9]+)\.([0-9]{2}))$/;
    if (bookPrice=="") {

        document.getElementById("bookPriceInvalid").innerHTML = "Book price can't be empty";
        document.getElementById("bookPriceInvalid").style.display = "block";
        document.getElementById("bookPriceInvalid").style.color = "red";

    }
    else if (!bookPricePattern.test(bookPrice)) {
        document.getElementById("bookPriceInvalid").style.color = "red";
        document.getElementById("bookPriceInvalid").innerHTML = "Enter a valid Book price";
        document.getElementById("bookPriceInvalid").style.display = "block";
    }
    else {
        document.getElementById("bookPriceInvalid").innerHTML = "Valid";
        document.getElementById("bookPriceInvalid").style.color = "green";

        document.getElementById("bookPriceInvalid").style.display = "block";
        return bookPrice;
    }
    return false;
}

function resetValues(){
    var category = document.getElementById("departmentsInvalid");
    
    var bookName = document.getElementById("bookNameInvalid");
    var authorEmail = document.getElementById("authorEmailInvalid");
    var authorName = document.getElementById("authorNameInvalid");
    var publishedYear = document.getElementById("publishedYearInvalid");
    var bookPrice = document.getElementById("bookPriceInvalid");
    category.style.display = "none";
    bookName.style.display = "none";
    authorEmail.style.display = "none";
    authorName.style.display = "none";
    publishedYear.style.display = "none";
    bookPrice.style.display = "none";

    document.getElementById("department-Name").innerHTML = "";
    classBookName = document.getElementsByClassName("book-Name"); 
    for(var i=0;i<classBookName.length;i++){
        classBookName[i].innerHTML = "";
    }
    document.getElementById("author-Email").innerHTML = "";
    document.getElementById("author-Name").innerHTML = "";
    document.getElementById("published-Year").innerHTML = "";
    document.getElementById("book-Price").innerHTML = "";
    alert("values reseted successfully");
    
    
}

function validation(){
    var category = checkCategory();
    var bookName = checkBookName();
    var authorEmail = checkAuthorEmail();
    var authorName = checkAuthorName();
    var publishedYear = checkPublishedYear();
    var bookPrice = checkBookPrice();
    if(category!=false && bookName !=false && authorEmail != false && authorName != false && publishedYear != false && bookPrice != false){
        var book = {
            result_category: category,
            result_bookName: bookName,
            result_authorEmail: authorEmail,
            result_authorName: authorName,
            result_publishedYear: publishedYear,
            result_bookPrice: bookPrice
        }
        
        document.getElementById("department-Name").innerHTML = book.result_category;
        classBookName = document.getElementsByClassName("book-Name"); 
        for(var i=0;i<classBookName.length;i++){
            classBookName[i].innerHTML = book.result_bookName;
        }
        document.getElementById("author-Email").innerHTML = book.result_authorEmail;
        document.getElementById("author-Name").innerHTML = book.result_authorName;
        document.getElementById("published-Year").innerHTML = book.result_publishedYear;
        document.getElementById("book-Price").innerHTML = book.result_bookPrice;
        alert("Book details saved successfully");

    }
    return false;
}

function showDetails(){
    
    var content = document.getElementById("content");
    var result = document.getElementById("result");
    content.style.display = "none";
    result.style.display ="block";

}

function home(){
    document.getElementById("content").style.display = "block";
    document.getElementById("result").style.display = "none";
}

