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

    // Add unique ID to the image
    newImage.id = "image" + currentRow + "-" + currentCell;

    newImage.onclick = function () {
      handleImageClick(newImage.id);
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

    // Update the notifications on the same page
    updateNotifications("A photo has been uploaded", newImage.id);

    fileInput.value = "";
  } else {
    alert("Please choose a file to upload.");
  }
}

function handleImageClick(imageId) {
  // Save clicked image to localStorage (if needed)
  localStorage.setItem('clickedImage', imageId);

  // You can choose not to redirect to the notifications page here
  // window.location.href = 'notifications.html';
  sendNotification("A photo has been uploaded", imageId);
}

function updateNotifications(message, imageId) {
  var notifications = JSON.parse(localStorage.getItem('notifications')) || [];

  // Add new notification
  notifications.push({
    message: message,
    imageId: imageId
  });

  // Save notifications to localStorage
  localStorage.setItem('notifications', JSON.stringify(notifications));
}
