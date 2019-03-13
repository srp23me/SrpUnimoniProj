const http = require('http')

http.createServer(function(request,response){
    response.end("hello server using call back function")
}).listen(8080,function(){
    console.log("Node is running at port 8080")
})