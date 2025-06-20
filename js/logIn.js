const userInput = document.querySelector('#user');
const mailInput = document.querySelector('#mail');
const passwordInput = document.querySelector('#password');
const logInBtn = document.querySelector('#logIn');
const form = document.querySelector('#form');


// userInput.value= 'dipto';
// mailInput.value = 'abc@gmail.com';
// passwordInput.value = '123456';




logInBtn.addEventListener('click', function(event) {
    event.preventDefault();
    console.log("Button clicked");
    if (userInput.value=="") {
        alert("Please enter user name");
        
    }else if (mailInput.value=="") {
        alert("Please enter email");
    }else if (passwordInput.value=="") {
        alert("Please enter password");
    }else{
        if (userInput.value !== "dipto") {
            alert("User name is incorrect");
        }else if (mailInput.value !== "abc@gmail.com") {
            alert("Email is incorrect");
        }else if (passwordInput.value !== "123456") {
            alert("Password is incorrect");
        }else{
            window.location.href = "../pages/dashboard.html"; 
        }
    }

});