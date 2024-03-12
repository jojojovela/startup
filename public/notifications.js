document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('notificationEvent', function () {
        // Handle the event and update notifications
        loadNotifications();
    });

    var clearButton = document.getElementById('clearButton');
    if (clearButton) {
        clearButton.addEventListener('click', clearNotifications);
    }
    loadNotifications();
});

// function that loads the notifications
function loadNotifications() {
    var notificationsContainer = document.getElementById('notificationsContainer');
    notificationsContainer.innerHTML = ''; // Clear existing content

    // Get existing notifications from localStorage
    var notifications = JSON.parse(localStorage.getItem('notifications')) || [];

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
    // Clear all notifications from localStorage
    localStorage.removeItem('notifications');

    // Reload notifications
    loadNotifications();
}

