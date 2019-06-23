import express from 'express';
import database from './database';
const app = express();
const port = 6700;

app.get('/', (req,res) => {
    res.status(200).send('yes right url')
})

app.getData('/getdata', (req,res) => {
    let out = database.prototype.getData('edu_jun_batch')
    res.send(out)
})

app.listen(port, (err) => {
    console.log(`Server running on port ${port}`)
})
