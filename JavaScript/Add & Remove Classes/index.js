var mainHeading = document.getElementById("main-heading");

var btn = document.getElementById('btn-click');

var sidebar = document.getElementById('sdiebar');

var toggleButton = document.getElementById('toggle-icon');

mainHeading.classList.add('big');

toggleButton.addEventListener('click', function() {
    if(sidebar.classList.contains('show')) {
        sidebar.classList.remove('show');
        sidebar.classList.add('hide');
    }
});

