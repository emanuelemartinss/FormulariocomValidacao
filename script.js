const form = document.querySelector('#formRegister');

const userNameError = document.querySelector('#usernameError');
const emailError = document.querySelector('#emailError');
const phoneError = document.querySelector('#phoneError');
const passwordError = document.querySelector('#passwordError');
const password2Error = document.querySelector('#password2Error');
const checkboxError = document.querySelector('#contractError');

form.addEventListener('submit', (e) => {

    e.preventDefault();
    const username = form['username'].value;
    const email = form['email'].value;
    const phone = form['phone'].value;
    const password = form['password'].value;
    const password2 = form['password2'].value;
    const checkbox = form['checkbox'].checked;

    console.info(username, email, phone, password );


    if (username === '') {
        userNameError.textContent = 'Username is required';
        } else {
        userNameError.textContent = '';
        }
         
        if (!email.includes("@")) {
        emailError.textContent = 'Email is required';
        } else {
        emailError.textContent = '';
        }
         
        if (phone === '') {
        phoneError.textContent = 'Phone is required';
    } else if (!(phone.length ==="11")){
        phoneError.textContent = "Phone must be at exact 11 caracters";
        }
         
        if (password === '') {
        passwordError.textContent = 'Password is required';
        } else {
        passwordError.textContent = '';
        }
         
        if (password2 === '') {
        password2Error.textContent = 'Password is required';
        } else {
        password2Error.textContent = '';
        }
         
        if (password !== password2) {
        password2Error.textContent = 'Password do not match';
        } else {
        password2Error.textContent = '';
        }
         
        if (checkbox === '') {
        checkboxError.textContent = 'Please check the box';
        } else {
        checkboxError.textContent = '';
        }
         
        return false;
        })
        