document.addEventListener('DOMContentLoaded', function() {
    var clickedImage = localStorage.getItem('clickedImage');
  
    if (clickedImage) {
      addNotification(clickedImage);
      localStorage.removeItem('clickedImage');
    }
  });
  
  function addNotification(imageSrc) {
    var notificationsContainer = document.getElementById('notificationsContainer');
  
    // Create elements for the notification
    var notificationElement = document.createElement('div');
    notificationElement.className = 'notification';
  
    var notificationText = document.createElement('p');
    notificationText.textContent = 'You clicked on the image: ' + imageSrc;
  
    // Append elements to the container
    notificationElement.appendChild(notificationText);
    notificationsContainer.appendChild(notificationElement);
  }
  