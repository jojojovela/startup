document.addEventListener('DOMContentLoaded', function () {
    let storedCommentData = JSON.parse(localStorage.getItem('commentData')) || [];
    // Retrieve the username from localStorage
    const username = localStorage.getItem('username');
    // Display the username on the main page
    if (username) {
        const usernameDisplay = document.getElementById('usernameDisplay');
        if (usernameDisplay) {
            usernameDisplay.textContent = `Logged in as: ${username}`;
        }
    }
    // Display existing comments on page load
    storedCommentData.forEach(function (comment) {
        addCommentToDOM(comment);
    });
    window.submitComment = function () {
        const commentInput = document.getElementById("commentInput");

        if (commentInput.value.trim() !== "") {
            // increments it by 1 to uniquely identify the new comment being uploaded
            const newId = storedCommentData.length + 1;
            // I am adding data to the mocked database and inserting it into the DOM
            const newData = { id: newId, comment: commentInput.value.trim(), likes: 0 };
            storedCommentData.push(newData);

            // Save updated comment data to localStorage
            localStorage.setItem('commentData', JSON.stringify(storedCommentData));

            // Display the new comment on the page
            addCommentToDOM(newData);

            // Clear the comment input field after submission
            commentInput.value = "";

            // Submit the comment to the server
            fetch('/api/submitComment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newData),
            })
                .then(response => response.json())
                .then(data => console.log('Comment submitted to server:', data))
                .catch(error => console.error('Error submitting comment:', error));

            // Send a notification for the submitted comment
            sendNotificationToNotificationsPage("A new comment has been submitted", newData);
        } else {
            alert("Please enter a comment before submitting.");
        }
    };

    function getAllComments() {
        fetch('/api/getAllComments')
            .then(response => response.json())
            .then(comments => {
                // Display each comment on the page
                comments.forEach(comment => addCommentToDOM(comment));
            })
            .catch(error => console.error('Error fetching comments:', error));
    }

    // Display existing comments on page load
    getAllComments();

    // Function to add comments to the DOM
    function addCommentToDOM(comment) {
        const commentContainer = document.getElementById('commentContainer');
        const newComment = document.createElement('div');
        newComment.className = 'comment';
        newComment.dataset.commentId = comment.id; // Add dataset attribute for identification
        newComment.innerHTML = `<p>${comment.comment}</p><button onclick="likeComment(${comment.id})">Like (${comment.likes})</button>`;
        commentContainer.appendChild(newComment);
    }

    window.likeComment = function (commentId) {
        const comment = storedCommentData.find(comment => comment.id === commentId);

        if (comment) {
            comment.likes++;

            // Save updated comment data to localStorage
            localStorage.setItem('commentData', JSON.stringify(storedCommentData));

            // Update the DOM to reflect the new like count
            const commentElement = document.querySelector(`.comment[data-comment-id="${comment.id}"]`);
            if (commentElement) {
                const likeButton = commentElement.querySelector('button');
                if (likeButton) {
                    likeButton.textContent = `Like (${comment.likes})`;
                }
            }

            // Send a notification for the liked comment
            sendNotificationToNotificationsPage("A comment has been liked", comment);
        }
        fetch('/api/likeComment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ commentId }),
        })
            .then(response => response.json())
            .then(updatedComment => console.log('Comment liked on server:', updatedComment))
            .catch(error => console.error('Error liking comment on server:', error));
        
    };

    // Function to clear all comments
    window.clearComments = function () {
        // Clear the localStorage
        localStorage.removeItem('commentData');

        // Clear the commentContainer content
        const commentContainer = document.getElementById('commentContainer');
        if (commentContainer) {
            commentContainer.innerHTML = '';
        }

        // Clear the displayed comments in the UI
        storedCommentData = [];
    };

    function sendNotificationToNotificationsPage(message, comment) {
        // Get existing notifications from localStorage
        var notifications = JSON.parse(localStorage.getItem('notifications')) || [];

        // Add new notification
        notifications.push({
            message: message,
            comment: comment
        });

        // Save notifications to localStorage
        localStorage.setItem('notifications', JSON.stringify(notifications));

        // Trigger an event to inform the notifications page
        const event = new Event('notificationEvent');
        document.dispatchEvent(event);
    }
});
