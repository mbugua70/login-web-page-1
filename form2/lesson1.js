let passwordReg = /^[\w@-]{8,20}$/;
let emailReg1 = /(^[a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})$/;
let emailReg2 = /^\d{8}$/;

let emailEl = document.getElementById("email-input");
let pwdEl = document.getElementById("password-input");
let feedOne = document.getElementById("pwd-feedback");
let feedTwo = document.getElementById("email-feedback");
let msgPwd;

function checkPwd() {
    if (passwordReg.test(pwdEl.value)) {
        pwdEl.className = 'valid';
        feedOne.className = 'valid';

    } else {
        pwdEl.className = 'invalid';
        feedOne.className = 'invalid';

    }
}

function checkEml() {
    if (emailReg1.test(emailEl.value) || emailReg2.test(emailEl.value)) {
        emailEl.className = 'valid';
        feedTwo.className = 'valid';
    } else {
        emailEl.className = 'invalid';
        feedTwo.className = 'invalid';
    }
}


emailEl.addEventListener("keyup", checkEml, false);
pwdEl.addEventListener("keyup", checkPwd, false);