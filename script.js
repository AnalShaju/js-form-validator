function time(){
    nameInput.value = '';
    emailInput.value = '' ;
    setTimeout(function(){
    message.textContent = '';
    message.className = '';
}, 3000);
}
const nameInput  = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const submitBtn  = document.querySelector('#submitBtn');
const message    = document.querySelector('#message');

submitBtn.addEventListener('click', function() {
    const name  = nameInput.value;
    const email = emailInput.value;
    if (name === ''){
        message.textContent = 'Name cannot be empty';
        message.className = 'error';
        time();
        return;
    }
    if (name.length < 3){
        message.textContent = 'Name to short';
        message.className = 'error';
        time();
        return;
    }
    if(email === ''){
        message.textContent = 'Email cannot be empty';
        message.className = 'error';
        time();
        return;
    }
    if(!email.includes('@')){
        message.textContent = 'Email is invalid';
        message.className = 'error';
        time();
        return;
    }
    message.textContent = 'Form submitted successfully!';
    message.className = 'success';
    time();
});
   