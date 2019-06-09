const express = require('express');
const app = express();
const request = require('request');
const port= 5400;

const WeatherUrl = "http://api.openweathermap.org/data/2.5/forecast/daily?q=London&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29";

app.use(express.static(__dirname+'/public'));
app.set('views', './src/views');
app.set('view engine', 'ejs')


function getWeather(url){
    var config ={
        url: WeatherUrl,
        headers:{
            'User-Agent':'request'
        }
    };

    return new Promise(function(resolve,reject){
        request.get(config, function(err,resp,body){
            if(err){
                reject(err)
            }else {
                resolve(body)
            }
        })
    })

}


app.get('/weather', (req, res) => {
    var dataPromise = getWeather();
    dataPromise.then(JSON.parse)
                .then(function(result){
                    res.send(result)
                })
})


app.get('/', (req, res) => {
    request(WeatherUrl, (err, response, body) => {
        if(err){
            console.log(err)
        } else {
            const output = JSON.parse(body)
            res.render('main',{result:output, title:'***Weather Of London***'})
        }
    })
})

app.listen(port, (err) => {
    if(err) throw err;
    else { console.log(`Server is running on port ${port}`)}
})