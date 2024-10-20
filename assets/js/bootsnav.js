// Get the elements
const navbarToggler = document.getElementById('navbar-toggler');
const navbarMenu = document.getElementById('navbar-menu');

// Toggle the 'open' class when the hamburger is clicked
navbarToggler.addEventListener('click', function () {
  navbarMenu.classList.toggle('open');
});
