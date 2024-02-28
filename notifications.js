document.addEventListener('DOMContentLoaded', function () {
  // Load notifications from localStorage
  loadNotifications();

  // Handle click events on notifications
  var notificationsContainer = document.getElementById('notificationsContainer');
  notificationsContainer.addEventListener('click', function (event) {
    if (event.target.tagName === 'IMG') {
      var clickedImageId = event.target.id;
      var clickedImageSrc = document.getElementById(clickedImageId).src;

      // Handle the clicked image as needed
      alert('Image Clicked: ' + clickedImageSrc);
    }
  });

  // Attach click event to the clear button
  var clearButton = document.getElementById('clearButton');
  if (clearButton) {
    clearButton.addEventListener('click', clearNotifications);
  }
});

function loadNotifications() {
  var notificationsContainer = document.getElementById('notificationsContainer');
  notificationsContainer.innerHTML = ''; // Clear existing content

  // Get existing notifications from localStorage
  var notifications = JSON.parse(localStorage.getItem('notifications')) || [];

  // Iterate through notifications and create elements
  notifications.forEach(function (notification) {
    var notificationElement = document.createElement('div');
    notificationElement.className = 'notification';

    var notificationText = document.createElement('p');
    notificationText.textContent = notification.message;

    notificationElement.appendChild(notificationText);
    notificationsContainer.appendChild(notificationElement);
  });
}

function clearNotifications() {
  // Clear notifications in localStorage
  localStorage.removeItem('notifications');

  // Reload the notifications
  loadNotifications();
}
