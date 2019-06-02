var fs = require('fs');

/*fs.readFile('db.json','utf-8', function(err,data){
    if(err){ throw err}
    else{
        console.log(data)
    }
})

fs.readFile('mytext.txt','utf-8', function(err,data){
    if(err){ throw err}
    else{
        console.log(data)
    }
})*/


fs.appendFile('mytext.txt', 'Yes we are writting nodejs',
                function(err){
                    if(err) throw err
                    else{
                        console.log('data added')
                    }
                })



fs.rename('mytext.txt', 'yourtext.txt', (err) => {
    if(err) throw err
})

fs.unlink('yourtext.1.txt', (err) => {
    if(err) throw err
    else {
        console.log('file deleted')
    }
})