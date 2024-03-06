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





