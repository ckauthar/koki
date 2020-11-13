var username = document.getElementById('username');
var password = document.getElementById('password');

username.addEventListener('input', function(event) {
    var currentValue = event.target.value;
    currentValue = currentValue.toUpperCase();
    console.log(currentValue);
    username.value = currentValue;
});

username.addEventListener('focus', function() {
    console.log('Element Focused');
});

username.addEventListener('blur', function() {
    console.log('Element Lost Focused');
});

LoginForm.addEventListener('submit', function(e) {
    alert('Submit Button Clicked');
    e.preventDefault();
})