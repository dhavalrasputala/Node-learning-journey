const { STATUS_CODES } = require("http");

const routeResponseMap = {
    "/info":"<h1>Info Page</h1>",
    "/contact":"<h1>Contact Us</h1>",
    "/about":"<h1>Learn More About US</h1>",
    "/hello":"<h1>Say Hello by Emailing us</h1>",
    "/error":"<h1>Sorry the Page you are looking for is not here</h1>",
}

const port = 3000;

http = require("http")

httpStatus = require("http-status-codes");

app = http.createServer((req,res)=>{

    res.writeHead(200,{
       "content-Type":"text/html"
    });

    if(routeResponseMap[req.url]) {

        res.end(routeResponseMap[req.url]);
    } else {
        res.end("<h1>Welcome</h1>");
    }
});

app.listen(port)
console.log(`The server running at port number:${port}`)