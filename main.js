document.addEventListener('DOMContentLoaded', function () {
    // Mocked database data (replace with actual server calls)
    let databaseData = [];

    // Read username from localStorage
    const username = localStorage.getItem('username');

    // Display the username on the main page
    if (username) {
        const usernameDisplay = document.getElementById('usernameDisplay');
        if (usernameDisplay) {
            usernameDisplay.textContent = `Logged in as: ${username}`;
        }
    }

    // Mocked data injection into the DOM
    const imageGrid = document.getElementById('imageGrid');

    // Function to add data to the mocked database and inject it into the DOM
    function addDataToDatabaseAndDOM(data) {
        // Add data to the mocked database
        databaseData.push(data);

        const columnsPerRow = 3;

        // Check if a new row needs to be created
        if (databaseData.length % columnsPerRow === 1) {
            const newRow = document.createElement('div');
            newRow.className = 'image-row';
            imageGrid.appendChild(newRow);
        }

        // Inject data into the DOM (you can customize this based on your DOM structure)
        const currentRow = imageGrid.lastChild; // Get the last created row
        const newImage = document.createElement('div');
        newImage.innerHTML = `<img src="${data.url}" alt="Uploaded Image" class="uploaded-image" id="image${data.id}" onclick="handleImageClick('image${data.id}')">`;

        currentRow.appendChild(newImage);
    }

    // Function to handle image upload
    window.uploadImage = function () {
        const fileInput = document.getElementById("fileInput");

        if (fileInput.files.length > 0) {
            const newId = databaseData.length + 1;
            const newImageUrl = URL.createObjectURL(fileInput.files[0]);

            // Example usage: Add data to the mocked database and inject it into the DOM
            const newData = { id: newId, url: newImageUrl };
            addDataToDatabaseAndDOM(newData);
        } else {
            alert("Please choose a file to upload.");
        }
    };

    // Additional code for handling image click and sending notifications
    function handleImageClick(imageId) {
        // Save clicked image to localStorage (if needed)
        localStorage.setItem('clickedImage', imageId);

        // Notify the notifications page
        sendNotificationToNotificationsPage("A photo has been voted", imageId);
    }

    function sendNotificationToNotificationsPage(message, imageId) {
        // Use the postMessage API to send a message to the notifications page
        window.opener.postMessage({
            type: 'imageClicked',
            message: message,
            imageId: imageId
        }, '*');
    }

    function sendNotification(message, imageId) {
        var notifications = JSON.parse(localStorage.getItem('notifications')) || [];

        // Add new notification
        notifications.push({
            message: message,
            imageId: imageId
        });

        // Save notifications to localStorage
        localStorage.setItem('notifications', JSON.stringify(notifications));
    }
});
