var currentRow = 1; // Variable to keep track of the current row
var currentCell = 0; // Variable to keep track of the current cell in the row

function uploadImage() {
  var fileInput = document.getElementById("fileInput");
  var imageGrid = document.getElementById("imageGrid");

  // Check if a file is selected
  if (fileInput.files.length > 0) {
    // Check if a new row needs to be created
    if (currentCell >= 3) {
      currentRow++;
      currentCell = 0;
    }

    // Create a new image element
    var newImage = document.createElement("img");
    newImage.src = URL.createObjectURL(fileInput.files[0]);
    newImage.alt = "Uploaded Image";

    // Create a new table cell and append the image
    var newCell = document.createElement("td");
    newCell.appendChild(newImage);

    // Check if a new row needs to be created in the grid
    if (currentCell === 0) {
      var gridRow = document.createElement("tr");
      gridRow.id = "row" + currentRow; // Assign an id to the row for future reference
      imageGrid.appendChild(gridRow);
    }

    // Append the new cell to the grid
    document.getElementById("row" + currentRow).appendChild(newCell);

    // Increment the current cell
    currentCell++;

    // Clear the file input for convenience
    fileInput.value = "";
  } else {
    alert("Please choose a file to upload.");
  }
}