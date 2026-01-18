const port = 2006
http = require("http");
httpStatus = require("http-status-codes");
const sendErrorResponse = res => {
    if (res.headersSent) return;

    res.writeHead(httpStatus.NOT_FOUND, {
        "Content-Type": "text/html"
    });
    res.end("<h1>FILE NOT FOUND</h1>");
};
http.createServer((req,res) => {
    let url = req.url;
    if (url.indexOf(".html")!==-1){
        res.writeHead(httpStatus.OK,{
            "Content-Type":"text/html"
        });
        customReadFile(`./view${url}`,res);
    }
    else if (url.indexOf(".js")!==-1){
        res.writeHead(httpStatus.OK,{
            "Content-Type":"text/javascript"
        });
        customReadFile(`./public/js${url}`,res);
    }
    else if (url.indexOf(".css")!==-1){
        res.writeHead(httpStatus.OK,{
            "Content-Type":"text/css"
        });
        customReadFile(`./public/css${url}`,res);
    }
    else if (url.indexOf(".png")!==-1){
        res.writeHead(httpStatus.OK,{
            "Content-Type":"image/png"
        });
        customReadFile(`./public/images${url}`,res);
    }
    else {
        return sendErrorResponse(res);
    }
}).listen(port);

console.log(`The	server	is	listening	on	port	number:	${port}`)

const customReadFile = (file_path, res) => {
    if (!fs.existsSync(file_path)) {
        return sendErrorResponse(res);
    }

    fs.readFile(file_path, (error, data) => {
        if (error) {
            console.log(error);
            return sendErrorResponse(res);
        }
        res.end(data);
    });
};
