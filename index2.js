function uploadImage() {
  var fileInput = document.getElementById("fileInput");
  var imageGrid = document.getElementById("imageGrid");

  // Check if a file is selected
  if (fileInput.files.length > 0) {
    // Create a new image element
    var newImage = document.createElement("img");
    newImage.src = URL.createObjectURL(fileInput.files[0]);
    newImage.alt = "Uploaded Image";

    // Create a new table cell and append the image
    var newCell = document.createElement("td");
    newCell.appendChild(newImage);

    // Append the new cell to the grid
    var gridRow = document.createElement("tr");
    gridRow.appendChild(newCell);
    imageGrid.appendChild(gridRow);

    // Clear the file input for convenience
    fileInput.value = "";
  } else {
    alert("Please choose a file to upload.");
  }
}