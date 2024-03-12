document.addEventListener('DOMContentLoaded', function () {
  var loginForm = document.querySelector('form');
  if (loginForm) {
      loginForm.addEventListener('submit', function (event) {
          event.preventDefault();

          var usernameInput = document.getElementById('name');
          var username = usernameInput.value;

          // Save the username to localStorage
          localStorage.setItem('username', username);

          // Redirect to the main page (you can adjust the URL as needed)
          window.location.href = 'main.html';
      });
  }
});
