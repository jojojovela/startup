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

function loadNotificationsFromServer() {
    fetch('/api/getNotifications')
        .then(response => response.json())
        .then(notifications => {
            updateNotifications(notifications);
        })
        .catch(error => console.error('Error fetching notifications:', error));
}

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
    // Clear notifications on the server
    fetch('/api/clearNotifications', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({}),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Notifications cleared:', data.message);
            // Clear all notifications from localStorage
            localStorage.removeItem('notifications');
            // Reload notifications
            loadNotifications();
        })
        .catch(error => console.error('Error clearing notifications:', error));
}


function displayQuote() {
    fetch('/api/getRandomQuote')  // Use the new endpoint on my server
        .then((response) => response.json())
        .then((data) => {
            const containerEl = document.querySelector('#quote');

            const quoteEl = document.createElement('p');
            quoteEl.classList.add('quote');
            const authorEl = document.createElement('p');
            authorEl.classList.add('author');

            quoteEl.textContent = data.content;
            authorEl.textContent = data.author;

            containerEl.appendChild(quoteEl);
            containerEl.appendChild(authorEl);
        })
        .catch((error) => console.error('Error fetching quote:', error));
}
// Call this function wherever you want to display a quote
displayQuote();

