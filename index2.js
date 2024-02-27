var currentRow = 1;
var currentCell = 0;

function uploadImage() {
  var fileInput = document.getElementById("fileInput");
  var imageGrid = document.getElementById("imageGrid");
  var notificationsContainer = document.getElementById("notificationsContainer");

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
      handleImageClick(newImage.src, notificationsContainer);
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
    updateNotifications("A photo has been voted", notificationsContainer);

    fileInput.value = "";
  } else {
    alert("Please choose a file to upload.");
  }
}

function handleImageClick(imageSrc, notificationsContainer) {
  // Additional functionality for handling image clicks can be added here
  console.log("Image clicked:", imageSrc);

  // Update the notifications on the same page
  updateNotifications("You clicked on the image: " + imageSrc, notificationsContainer);
}

function updateNotifications(message, notificationsContainer) {
  // Create elements for the notification
  var notificationElement = document.createElement("div");
  notificationElement.className = "notification";

  var notificationText = document.createElement("p");
  notificationText.textContent = message;

  // Append elements to the container
  notificationElement.appendChild(notificationText);
  notificationsContainer.appendChild(notificationElement);
}
