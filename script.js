const output =  document.getElementById('output');
const passwrd = document.getElementById('password');
const confirmPasswrd = document.getElementById('cpassword');

function validatePassword(){
    if(passwrd.value != confirmPasswrd.value) {
        output.innerHTML = "Passwords Don't Match";
    } else {
        output.innerHTML = "";
    }
}

passwrd.onchange = validatePassword;
confirmPasswrd.onkeyup = validatePassword;
