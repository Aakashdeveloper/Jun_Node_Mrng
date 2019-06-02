var os = require('os');
var http = require('http');
/*console.log(os.platform())
console.log(os.userInfo())
console.log(os.arch())
console.log(os.totalmem())*/

var server = http.createServer(function(req,res){
    res.write("<h1>You are using os as "+os.platform()+"<h1>");
    res.end();
})


server.listen(4500)