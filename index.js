const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


//Error Function
function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

//Success Function
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}


//valid email
function checkEmail(input){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value)){
        showSuccess(input);
    }else{
        showError(input, 'Email is not valid');
    }
}
// Check required feilds
function checkRequired(inputarr){
    inputarr.forEach(function(input) {
        if (input.value.trim() === ''){
            showError(input , `${firstLet(input)} is required`);
        } else {
            showSuccess(input);
        }
    });
}
// username and password length
function chechLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${firstLet(input)} must be atleast ${min} characters`);
    } else if(input.value.length > max){
        showError(input, `${firstLet(input)} must be less than ${max} characters`);
    }else {
        showSuccess(input);
    }
}

// password match
function checkPassword(input1, input2){
    if(input1.value !== input2.value){
        showError(input2 , 'Password do not match');
    }
}



// get first letter and capatalise it 
function firstLet(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}



//event listener
 form.addEventListener('submit', function(e){
 e.preventDefault();

   
    checkRequired([username, email , password , password2]);
    chechLength(username , 4 , 15);
    chechLength(password , 4 , 8);
    chechLength(password2 , 4 , 8);
    checkEmail(email);
    checkPassword(password , password2);
});