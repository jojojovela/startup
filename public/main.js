document.addEventListener('DOMContentLoaded', function () {
    // mocked database data 
    let databaseData = [];

    let storedImageData = JSON.parse(localStorage.getItem('imageData')) || [];
    // this reads the username from the localStorage
    const username = localStorage.getItem('username');

    // this displays the username on the main page
    if (username) {
        const usernameDisplay = document.getElementById('usernameDisplay');
        if (usernameDisplay) {
            usernameDisplay.textContent = `Logged in as: ${username}`;
        }
    }

    // mocked data injection into the DOM
    // gets the imageGrid element from main.html
    const imageGrid = document.getElementById('imageGrid');

    storedImageData.forEach(function (data) {
        addDataToDatabaseAndDOM(data);
    });
    

    // this is a function to add data to the mocked database and inser it into the DOM
    function addDataToDatabaseAndDOM(data) {
        // this adds data to the mocked database
        databaseData.push(data);

        const columnsPerRow = 3;

        // this is to check if a new row needs to be created
        if (databaseData.length % columnsPerRow === 1) {
            const newRow = document.createElement('div');
            newRow.className = 'image-row';
            imageGrid.appendChild(newRow);
        }

        // insert data into the DOM 
        const currentRow = imageGrid.lastChild; // this gets the last created row
        const newImage = document.createElement('div');
        const img = document.createElement("img");
        img.setAttribute("src", data.url);
        img.setAttribute("alt", "Uploaded Image");
        img.className = "uploaded-image";
        const id = 'image' + data.id;
        img.setAttribute('id', id);
        img.onclick = () => {
            handleImageClick(data);
        };
        // newImage.innerHTML = `<img src="${data.url}" alt="Uploaded Image" class="uploaded-image" id="image${data.id}" onclick="handleImageClick('image${data.id}')">`;
        newImage.appendChild(img);
        currentRow.appendChild(newImage);
    }
    window.clearImages = function () {
        // Clear the localStorage
        localStorage.removeItem('imageData');

        // Clear the imageGrid content
        imageGrid.innerHTML = '';

        // Clear the displayed images in the UI
        databaseData = [];
    };

    // this is a function to handle the images I want to upload.
    window.uploadImage = function () {
        const fileInput = document.getElementById("fileInput");

        if (fileInput.files.length > 0) {
            // increments it by 1. So to uniquely identify the new image being uploaded.
            const newId = databaseData.length + 1;
            // I am creating a URL that represents the file I selected from the file input element.
            const newImageUrl = URL.createObjectURL(fileInput.files[0]);

            // I am adding data to the mocked database and inserting it into the DOM
            // and it is also creating an object newData with properties id and url, storing the new ID and the 
            // URL created for the image.
            const newData = { id: newId, url: newImageUrl, filename: fileInput.files[0].name };
            // calling the function and adds the new data which is the new ID and URL of the image
            // into the Database
            storedImageData.push(newData);

            // Save updated image data to localStorage
            localStorage.setItem('imageData', JSON.stringify(storedImageData));

            fetch('/api/uploadImage', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newData),
            })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error('Error:', error));

            addDataToDatabaseAndDOM(newData);
            if (clickedImageId === newData.id) {
                sendNotificationToNotificationsPage("A photo has been clicked", newData.id);
            }
        } else {
            alert("Please choose a file to upload.");
        }
        
    };

    // this is in charge of image click and sending notifications
    function handleImageClick(imageData) {
        // this stores the imageId in the local storage under the key 'clickedImage'. 
        // It's saving information about the clicked image 
        localStorage.setItem('clickedImage', imageData.id);

        // call function to send a message with imageId
        sendNotificationToNotificationsPage(`${imageData.filename} has been voted on`, imageData);
    }

    function sendNotificationToNotificationsPage(message, imageData) {
        // Get existing notifications from localStorage
        var notifications = JSON.parse(localStorage.getItem('notifications')) || [];
    
        // Add new notification
        notifications.push({
            message: message,
            imageData: imageData
        });
    
        // Save notifications to localStorage
        localStorage.setItem('notifications', JSON.stringify(notifications));
    
        // Trigger an event to inform the notifications page
        const event = new Event('notificationEvent');
        document.dispatchEvent(event);
    }
    
    function sendNotification(message, imageId) {
        // grabs the existing notifications from the local storage 
        // or can start an empty array if there are none.
        var notifications = JSON.parse(localStorage.getItem('notifications')) || [];

        // add new notification
        notifications.push({
            message: message,
            imageId: imageId
        });

        // Save notifications to localStorage
        localStorage.setItem('notifications', JSON.stringify(notifications));
    }
});