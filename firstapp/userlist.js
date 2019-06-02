var fs = require('fs');

// var input = prompt('tell me your name')
// var input = (process.argv())
//console.log(process.argv[2])

var a = (process.argv[2])
var b = (process.argv[4]);
var c = process.argv[3]

if( c === '+'){
    answer = a+b
} else if( c === '-'){
    answer = a-b
}

console.log('the answer is : '+ answer)

var name = "aakash,\n"

/*fs.appendFile('userlist.txt', name , function(err){
    if(err) throw err;
    console.log('user added')
})*/

fs.appendFile('userlist.txt', name , function(err){
    if(err) throw err;
    else{
        fs.readFile('userlist.txt','utf-8',function (err,data){
            console.log(data)
        })
    }
})