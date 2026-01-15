const http = require ('http')

http.createServer((Request,Response)=>{

    Response.writeHead(200,{
        'content-type':'text/plain'
    })

    Response.write('Hello,World!\n')

    Response.end()
}).listen(8000)