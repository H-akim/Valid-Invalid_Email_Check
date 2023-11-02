var email_field = document.getElementById("email_field");
var email_label = document.getElementById("email_label");
var email_error = document.getElementById("email_error");

email_field.addEventListener("keyup", ()=>{
    email_label.style.bottom = "45px";
    if(!email_field.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/) ){
        email_error.innerHTML = "Please enter a valid email";
        email_field.style.borderBottomColor = "red";
        email_error.style.top = "120%";
        return false;
    }
    email_error.innerHTML = "";
    email_field.style.borderBottomColor = "green";
    email_error.style.top = "100%";
    return true;
})





