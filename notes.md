# First Assignment
I learned how to push and pull between vscode and github and also about writing markdown.
I also learned a lot about resolving conflicts
# Second Assignment
You can stop your server at any time. Don't confuse this with terminating your server which completely destroys it. 
Stopping your server just powers down the device.
It is important to keep the same public IP address so that you, and others, can always browse to the same place. More importantly, when you create your domain name, you can assign it to an address that never changes.
# 3.1 HTML
- always start with <!DOCTYPE html>
- html
  * head
    . title
      - first HTML
  * body
    . Hello World
 - all elements can have attributes associated with them; like <html lang="en">
 - headings and heading numbers can cause it to be smaller.
 - anchor tag references has two types, absolute and relative. Relative is better because more flexibility and don't have to hardcode the url like absolute would.
 # CSS Startup Deliverables
For this deliverable I properly styled the application into its final appearance.

- Header, footer, and main content body - all there and styled appropriately 
- Navigation elements - I added an underline might chnage later on and the hyperlinks work and are styled.
- Responsive to window resizing - My app looks great on all window sizes and devices
- Application elements - I was able to use the whitespace appropriately and a good use of color and contrast
- Application text content - fonts go well with one another 
- Application images - used sample images to portray how it would look and was able to curve the images as well to give more style

  # Layers of Networks
  - Link: Physical connections
  - Internet: Establishing connections
  - Transport: Moving connection information packets
  - Application: Functionality like web browsing

 # HTTP Endpoints
 - HTTP endpoints are specific URLs or URIs (Uniform Resource Identifiers) that web services or applications expose to enable communication with other systems over the Hypertext Transfer Protocol (HTTP). In simpler terms, an endpoint is a specific path or URL that is used to interact with a web service or API (Application Programming Interface).
 - Think of HTTP endpoints like specific destinations or addresses on the internet where you can do different things.
 - HTTP endpoints make it easy for different parts of the internet (websites, applications) to talk to each other and perform specific tasks by following a set of rules (HTTP protocol)

# app.get('/store/provo', (req, res, next) => {
#  res.send({name: 'provo'});
# });
- code explanation, simple terms:
- Imagine you have a website, and someone is asking for information about a store in Provo. This code is like a set of instructions for your website on how to respond to that request.

 - app.get('/store/provo', ...): This is saying, "Hey, if someone asks for the page at '/store/provo', do the following..."

 - (req, res, next) => { ... }: When someone asks for '/store/provo', do the things inside these curly braces. The req is like a letter from the person asking for information, the res is like the letter you'll send back with the information, and next is a way to pass things to the next step (but we don't use it here).

 - res.send({name: 'provo'});: This is like saying, "Okay, here's the information you wanted." It sends back a response to the person asking, and the information is a name ('provo').

 - So, in super simple terms, if someone goes to your website and asks for the page '/store/provo', your website will respond with a message saying the name of the store is 'provo'.

# app.get('/store/:storeName', (req, res, next) => {
#  res.send({name: req.params.storeName});
# });
- code explanation in simple terms
- Think of this code as a way for your website to respond differently based on the store name someone asks about. Here's a breakdown:

- app.get('/store/:storeName', ...): This part says, "If someone goes to a page like '/store/anything', pay attention."

- (req, res, next) => { ... }: When someone goes to a page like '/store/anything', do the things inside these curly braces. req is like a letter from the person asking for information, res is like the letter you'll send back with the information, and next is a way to pass things to the next step (but we don't use it here).

- res.send({name: req.params.storeName});: This is like saying, "Alright, you asked about a store, and whatever you put after '/store/' is the name of the store. I'll tell you that name." It sends back a response to the person asking, and the information is a JSON object with the name of the store they asked about.

- So, if someone goes to '/store/myStore', your website will respond with a message saying the name of the store is 'myStore'. The :storeName part in the URL is like a placeholder for any store name someone might type after '/store/'.

- **localhost** - This is a special hostname that refers to the current machine or computer that you are using. It's often used to access services or websites running on the same machine. When you use localhost, you're essentially saying, "on this computer."
- **port number** - In the context of a web server, a port is like a door through which network traffic can pass. Port 8080 is a commonly used alternative to the default web server port (port 80). When you see localhost:8080, it means you are trying to access a service on your own machine using port 8080.

- * In the context of the curl command you provided (curl localhost:8080/store/orem), it's telling curl to make an HTTP request to the server running on your computer at localhost (your computer) and on port 8080, specifically asking for information about the store named "orem" at the /store/ endpoint. *
 
# Next Parameter
- In Express.js, the next parameter in a middleware function is a callback function that is used to pass control to the next middleware in the stack. Middleware functions are functions that have access to the request (req) and response (res) objects, and they can perform various tasks during the request-response lifecycle.
- Here's how it works:
- next Function:
- When a middleware function completes its tasks, it can call the next function to pass control to the next middleware in the stack.
Middleware Stack:
- In an Express.js application, middleware functions are arranged in a stack. Each middleware in the stack is executed in the order in which it's defined.
Passing Control:
- When a middleware calls next(), it essentially says, "I'm done with my part; let the next middleware handle the request."
Example:
- Suppose you have multiple middleware functions, and each performs a specific task (logging, authentication, etc.). After one middleware finishes its task, it can call next(), allowing the next middleware to execute.
# Next Parameter Example Code
  app.get('/example', (req, res, next) => {  
  // Do something with the request
  console.log('Middleware 1');
  
  // Pass control to the next middleware
  next();
}, (req, res) => {
  // This middleware will be executed next
  console.log('Middleware 2');
  res.send('Response from Middleware 2');
});









