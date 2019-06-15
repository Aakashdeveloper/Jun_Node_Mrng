const express = require('express');
const redis = require('redis');

const app = express();
const client = redis.createClient({
    host:'localhost',
    port: 6379
});

client.set('uservisit', 0);

app.get('/', (req, res) => {
    client.get('uservisit', (err,visit) => {
        res.send('Number of visit is '+ visit)
        client.set('uservisit', parseInt(visit) +1);
    })
})


app.listen(8009, () => {
    console.log('Running on port 8009')
})