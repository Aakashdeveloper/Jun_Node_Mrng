var url = require('url');

var firsturl = 'https://ngmovies.herokuapp.com/api/getMovies'
var second = 'http://scotch.io/tutorials/introduction-to-koa-the-future-of-express'
var host = url.parse(firsturl)
var host1 = url.parse(second)

var alllweb = [host,host1]
// console.log(host.protocol)
// console.log(host1.protocol)

for (var i=0; i<alllweb.length;i++){
    console.log(alllweb[i].protocol)
}