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

    // Update the notifications on the same page
    updateNotifications("A photo has been voted");

    fileInput.value = "";
  } else {
    alert("Please choose a file to upload.");
  }
}

function handleImageClick(imageSrc) {
  // Save clicked image to localStorage
  localStorage.setItem('clickedImage', imageSrc);
  
  // Redirect to the notifications page
  window.location.href = 'notifications.html';
}

function updateNotifications(message) {
  var notifications = JSON.parse(localStorage.getItem('notifications')) || [];
  var timestamp = new Date().toLocaleString();

  // Add new notification
  notifications.push({
    message: message,
    timestamp: timestamp
  });

  // Save notifications to localStorage
  localStorage.setItem('notifications', JSON.stringify(notifications));
}
