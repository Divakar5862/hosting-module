let wrapper = document.querySelector('.wrapper'),
    signUpLink = document.querySelector('.link .signup-link'),
    signInLink = document.querySelector('.link .signin-link'),
    loginForm = document.querySelector('.form-container.sign-in form'),
    signupForm = document.querySelector('.form-container.sign-up form');

signUpLink.addEventListener('click', () => {
    wrapper.classList.add('animated-signin');
    wrapper.classList.remove('animated-signup');
    signupForm.reset(); 
});

signInLink.addEventListener('click', () => {
    wrapper.classList.add('animated-signup');
    wrapper.classList.remove('animated-signin');
    loginForm.reset(); 
});


loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); 
    const username = loginForm.querySelector('input[type="text"]').value;
    const password = loginForm.querySelector('input[type="password"]').value;

    if (username && password) {
        alert('Login data submitted.'); 
        loginForm.reset(); 
        
    } else {
        alert('Please fill in all fields.'); 
    }
});


signupForm.addEventListener('submit', (event) => {
    event.preventDefault(); 
    const username = signupForm.querySelector('input[type="text"]').value;
    const email = signupForm.querySelector('input[type="email"]').value;
    const password = signupForm.querySelector('input[type="password"]').value;

    if (username && email && password) {
        alert('Signup data submitted.'); 
        signupForm.reset(); 
       
    } else {
        alert('Please fill in all fields.'); 
    }
});
