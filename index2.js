var currentRow = 1;
var currentCell = 0;

function uploadImage() {
  var fileInput = document.getElementById("fileInput");
  var imageGrid = document.getElementById("imageGrid");

  if (fileInput.files.length > 0) {
    if (currentCell >= 3) {
      currentRow++;
      currentCell = 0;
    }

    var newImage = document.createElement("img");
    newImage.src = URL.createObjectURL(fileInput.files[0]);
    newImage.alt = "Uploaded Image";
    newImage.className = "uploaded-image";
    newImage.onclick = function () {
      handleImageClick(newImage.src);
    };

    var newCell = document.createElement("td");
    newCell.appendChild(newImage);

    if (currentCell === 0) {
      var gridRow = document.createElement("tr");
      gridRow.id = "row" + currentRow;
      gridRow.className = "image-row";
      imageGrid.appendChild(gridRow);
    }

    document.getElementById("row" + currentRow).appendChild(newCell);

    currentCell++;

    // Update the notifications using localStorage
    updateNotifications("A photo has been voted");

    fileInput.value = "";
  } else {
    alert("Please choose a file to upload.");
  }
}

function handleImageClick(imageSrc) {
  // Additional functionality for handling image clicks can be added here
  console.log("Image clicked:", imageSrc);

  // Save the clicked image information in localStorage
  saveClickedImage(imageSrc);
}

function updateNotifications(message) {
  // Get existing notifications from localStorage
  var notifications = JSON.parse(localStorage.getItem('notifications')) || [];

  // Add the new notification
  notifications.push({
    message: message,
    timestamp: new Date().toISOString(),
  });

  // Save updated notifications back to localStorage
  localStorage.setItem('notifications', JSON.stringify(notifications));
}

function saveClickedImage(imageSrc) {
  // Save the clicked image information in localStorage
  localStorage.setItem('clickedImage', imageSrc);
}
