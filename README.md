# startup
Photo Voter
### Elevator Pitcher
Have you ever had trouble choosing a picture to post on social media. You look through
all of them and painstakingly have to go through them one by one and look through the
little details and see which ones you potentially like. You've narrowed it down to 10 pictures 
but that's still a lot. With Photo Voter you can upload those pictures and have your closest friends comment and vote on which they 
like the most. You look at the results and then you can quickly share that post directly to 
your social media like Instagram or Facebook.
### Sketches
![IMG_5699](https://github.com/jojojovela/startup/assets/156491273/69c22f48-543e-4296-be9b-b6087c65d5a5)
![IMG_5701](https://github.com/jojojovela/startup/assets/156491273/911b632a-d8a2-4a38-8ebb-16a0317be459)
### Key Features
- Enhance image of pictures
- Has number of votes of the picture above it
- Be able to click on an image and have options (like to vote, comment, or share to social media)
- Has notifications for when someone comments or votes on your pic
- Being able to change your vote
- Being able to upload pictures to application
### Technologies
The following is how I will use the technologies:
- HTML: I am going to have two webpages, one for login and one for the principal page. Images will be embeded, as well as an upload button, notifications tab, and the writing necessary for the website.
- CSS: The applications styling using certain colors and texts that will elevate the look of the website. Be able to make the images uploded much more interesting to look at (maybe have some shading behind it, or have a border around each image etc.). Be able to space the images and borders pleasingly.
- Javascript: The website will be able to have the user interact with the photo by being able to enhance, comment, vote or share their own uploaded photo. To be able to also click on the notifications tab to see your alerts.
- Service:
  - Being able to login
  - Having the ability to vote
  - Receiving notifications for votes
  - Having votes be tallied for each photo
  - Able to comment on pictures
  - Share your picture
- Authentication/DG/Login: Able to recognize and save users and votes in database. It will be able to register and login people. Also store comments in database.
- Websocket: It will notify people when they had a vote on one of their images and when people comment.
 # CSS Startup Deliverables
For this deliverable I properly styled the application into its final appearance.

- Header, footer, and main content body - all there and styled appropriately 
- Navigation elements - I added an underline might chnage later on and the hyperlinks work and are styled.
- Responsive to window resizing - My app looks great on all window sizes and devices
- Application elements - I was able to use the whitespace appropriately and a good use of color and contrast
- Application text content - fonts go well with one another 
- Application images - used sample images to portray how it would look and was able to curve the images as well to give more style

# JavaScript Startup Deliverables
JavaScript support for the application's interaction logic:
- make sure put your username and fill in a temporary password in the login page.
- JavaScript support for future login: Able to  fix my footer and was able to get the username from login page to display on main page at the top left
- JavaScript support for future database data: The main page has you able to upload an image onto the "timeline" and stores it in a local storage
- you can add as many photos as you want and it will display the photos in three columns.
- and for now I added a clear image button that clears the timeline just to make it look clean for now
- JavaScript support for future WebSocket: when you click on an image that you upload and then navigate to the notifications tab you'll see a notification that says "{the image file name} has been voted"
- so people are all looking at the timeline and seeing what others post and clicking on the images the like and then displaying a notification on the notifications page saying which image was voted on.
- the notifications also has a clear notifications button that clears all of it out and makes it also look clean.
- and the photos and notifications will stay on their pages while navigating between different tabs.

# Startup Service
* changed my project to now instead of uploading images and being able to like it, to now being able to upload comments instead (no photos) and being able to like those, (just like twitter)
- Added a third party endpoint that gets quotes and applies it into my notifications page
- added a submitComment endpoint
- added a getAllComments endpoint
- added a likeComment endpoint
- added a getNotifications endpoint
- added a clearNotifications endpoint
- and my frontend is calling all these service endpoints

