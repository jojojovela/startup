document.addEventListener('DOMContentLoaded', function () {
    // Load notifications from localStorage
    loadNotifications();

    // Handle messages sent from the main page
    window.addEventListener('message', function (event) {
        if (event.data.type === 'imageClicked') {
            // Handle the notification as needed
            handleImageNotification(event.data.message);
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

function handleImageNotification(message) {
    // Handle the notification for an image click
    var notificationsContainer = document.getElementById('notificationsContainer');

    var notificationElement = document.createElement('div');
    notificationElement.className = 'notification';

    var notificationText = document.createElement('p');
    notificationText.textContent = message;

    notificationElement.appendChild(notificationText);
    notificationsContainer.appendChild(notificationElement);
}
