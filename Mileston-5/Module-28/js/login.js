document.getElementById('btn-submit').addEventListener('click', function(){

    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // console.log(email);
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    // console.log(password);

    if(email === 'johurul@gmail.com' && password === 'joy123'){
        // console.log('valid');
        window.location.href = 'bank.html';
    }
    else{
        // console.log('Invalid');
        alert('Invalid user or password ')
    }

    
})