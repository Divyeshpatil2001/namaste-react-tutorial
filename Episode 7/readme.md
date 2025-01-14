- two types of routing
-> client side routing => just changing of components without making a network call initial when app loads components are fetched and when in display need then just load that components without getting refresh whole page,
-> server side routing => if i am clicking on header link of anchor then reload the whole page it will network call about.html fetch and render on to web page.

-each navigation action triggers a request to the server, which responds with a new HTML page.
How it Works:
When you click on a link (e.g., <a href="about.html">), the browser sends a new HTTP request to the server.
The server processes the request, fetches the necessary data, generates the HTML for the requested page, and sends it back to the browser.
The entire page is refreshed, and the browser re-renders everything.



Link tag
behind the scene anchor tag in html
link is wrap of anhor and take care is special type of link