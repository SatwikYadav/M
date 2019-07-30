var http = require('http');
http.createServer(function (request , response){
    response.statusCode =200
    console.log('REcieved response')
    response.end("Helloe..")
}).listen(3000,function(){
    console.log('Server started on port300')
})

console.log('Server Gor Created')