const http = require('http')

http.createServer((request,response)=>{
    response.end("hello server using arow funciton")
}).listen(8888,()=>{
    console.log("Node is running at port 8888")
})