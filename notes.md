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


# app.put('/st*/:storeName', (req, res) => res.send({update: req.params.storeName}));
## Wildcard Route
- This route matches paths that start with "/st" followed by anything (* means anything), and then it expects a store name as a parameter.
- For example, it matches paths like "/store/x" or "/star/y".
- If you send a PUT request to such a path, it responds with a message saying it updated the store with the specified name.
- This route handles PUT requests and responds with a message saying it updated the store with the specified name.
- The term "update" in this context means that some kind of modification or change is made to the store, but it doesn't explicitly specify what is being updated.

# app.delete(/\/store\/(.+)/, (req, res) => res.send({delete: req.params[0]}));
## Regular Expression Route
- This route uses a more flexible pattern defined by a regular expression. It matches paths like "/store/something", capturing the "something" part as a parameter.
- For example, it matches paths like "/store/abc" or "/store/123".
- If you send a DELETE request to such a path, it responds with a message saying it deleted the store with the specified name.
- This route handles DELETE requests and responds with a message saying it deleted the store with the specified name.
- Similarly, the term "delete" here signifies some action, but it doesn't necessarily mean that a store is physically removed from some storage. It's more about indicating a conceptual deletion or removal.
- The server is not necessarily performing a physical deletion of some resource; rather, it's responding to a DELETE request by reporting that it processed the request and "deleted" something based on the client's input.
- So, in essence, it's more about handling the request, acknowledging the action implied by the DELETE method, and responding accordingly. The exact semantics and actions associated with "deletion" would depend on the application's design and requirements.
- when you have req.params[0], it's accessing the content captured by the first (and only) capturing group in the regular expression. The index 0 represents the entire matched string, and subsequent indices (1, 2, etc.) would represent the content captured by individual capturing groups.
- In simpler terms, if the URL is /store/something, then:
 - req.params[0] would contain "something" (the entire matched string).
 - req.params[1] would be undefined because there is only one capturing group.

# Middleware
- Middleware is a software layer that sits between different components or systems, facilitating communication, processing, or transformation of data. It's a piece of software that can intercept and process requests and responses as they travel between components.
- Primarily focuses on enhancing the communication and processing of requests and responses in a system. It's a layer that intercepts and acts upon data flowing between components.
- Imagine a relay race: Middleware is like the relay baton. In a relay race, each runner passes the baton to the next one. Similarly, in software, middleware is a helper that handles tasks between different parts of a program. It can modify, log, or process information as it moves between components.
- **Example:** Imagine a conveyor belt moving between different workers in a factory. Each worker (component) can add or modify something on the product (data), and the conveyor belt (middleware) ensures it reaches the next worker as intended.
- Middleware functions are always called for every HTTP request unless a preceding middleware function does not call next.
- A middleware function has the following pattern:
 * function middlewareName(req, res, next)
- The middleware function parameters represent the HTTP request object (req), the HTTP response object (res), and the next middleware function to pass processing to. You should usually call the next function after completing processing so that the next middleware function can execute.


# Mediator
- The Mediator pattern is a behavioral design pattern where an object (the mediator) centralizes communication between other objects (colleagues) without them needing to be directly aware of each other. It promotes loose coupling between components by having them communicate indirectly through a mediator.
- Primarily focuses on managing communication and interaction between different objects or components in a way that reduces direct dependencies. It promotes a more loosely coupled architecture.
- Imagine a group chat: In a group chat, people talk to each other without directly messaging everyone. Instead, they use a central chat room where messages are shared. The chat room is like a mediator, helping people communicate without knowing every individual.
- **Example:** Think of different objects or parts of a program as people in a team. They don't talk directly but communicate through a shared mediator. This keeps them loosely connected, and changes in one part don't directly affect others.

![image](https://github.com/jojojovela/startup/assets/156491273/cb58ce53-d0f0-43f3-ae1c-4dfb0ec2f6a9)

# Built-in Middleware (Express)
- When you use the express.static middleware with the "public" folder in your Express application, it allows you to share files on your website. Here's a step-by-step breakdown:
- Setup Middleware:
 * You include app.use(express.static('public')); in your Express application, telling it to use the express.static middleware for serving static files.
Create a "public" Folder:

You create a folder named "public" in your project directory.
Place Files in "public" Folder:

Inside the "public" folder, you can put files like index.html, styles.css, image.jpg, etc.
Accessing Files:

If your website is, for example, http://bananas.com, and you've set up the express.static middleware, people visiting your site will be able to see the files you placed in the "public" folder.
Default Page:

If there's an index.html file in the "public" folder, it becomes the default page that people see when they visit your site without specifying a specific file (e.g., http://bananas.com).
So, you're using Express middleware to make it easy for others to access and view the files you want to share on your website. It simplifies the process of serving static content and makes your website's files accessible to visitors.
















