document.addEventListener('DOMContentLoaded', function () {
  var loginForm = document.getElementById('loginForm');
  if (loginForm) {
      loginForm.addEventListener('submit', function (event) {
          event.preventDefault();

          var usernameInput = document.getElementById('username');
          var passwordInput = document.getElementById('passwordInput');
          var username = usernameInput.value;
          var password = passwordInput.value;

          fetch('/api/auth/login', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({ username: username, password: password }),
          })
          .then(response => {
              if (!response.ok) {
                  throw new Error('Network response was not ok');
              }
              return response.json();
          })
          .then(data => {
              console.log('Login response:', data);
              // Redirect to the main page if login is successful
              window.location.href = 'main.html';
          })
          .catch(error => {
              console.error('Error during login:', error);
              alert('Login failed. Please check your username and password.');
          });
      });

      var createAccountBtn = document.getElementById('createAccountBtn');
      if (createAccountBtn) {
          createAccountBtn.addEventListener('click', function (event) {
              event.preventDefault();
              window.location.href = 'create_account.html';
          });
      }
  }
});
