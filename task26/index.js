const http = require("http");
const fs = require("fs");

const PORT = 2000;
const HOSTNAME = "localhost";

const home = fs.readFileSync("./index.html", "utf-8");
const about = fs.readFileSync("./about.html", "utf-8");
const contact = fs.readFileSync("./contact.html", "utf-8");
const styles = fs.readFileSync("./styles.css", "utf-8");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    return res.end(home);
  } 
  else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    return res.end(about);
  } 
  else if (req.url === "/contact") {
    res.writeHead(200, { "Content-Type": "text/html" });
    return res.end(contact);
  }
  else if (req.url === "/styles.css") {
    // Serve the CSS file
    res.writeHead(200, { "Content-Type": "text/css" });
    res.end(styles);}
  else {
    res.writeHead(404, { "Content-Type": "text/html" });
    return res.end("<h1>404 - Page not found</h1>");
  }
});


server.listen(PORT, HOSTNAME, () => {
  console.log(`Server is listening at http://${HOSTNAME}:${PORT}`);
});
