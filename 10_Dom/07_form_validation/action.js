let form = document.getElementById('form')
let username = document.getElementById('username')
let email = document.getElementById('email')
let password = document.getElementById('password')
let password2 = document.getElementById('confirm_password')


// onsubmit form event

form.addEventListener('submit',e=>)

// Validate form data here
function validation()
{
    let username_val = username.value.trim()
    let email_val = email.value.trim()
    let password_val = password.value.trim()
    let password2_val = password2.value.trim()

}

// adding listener to it on button

submit_btn.addEventListener('click',function(){
    validation();
})