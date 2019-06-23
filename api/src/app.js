import express from 'express';
import Mongodb from 'mongodb';
import bodyParser from 'body-parser';
const Database = Mongodb.MongoClient;
const port = process.env.port || 8776
const app = express();
let db;
const mongourl = 'mongodb://127.0.0.1:27017/'
const col_name='edu_jun_batch';

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())

//Post
app.post('/addData', (req,res) => {
    db.collection(col_name).insert(
        req.body,(err,result) => {
            if(err) throw err;
            res.status(200).send('data inserted') 
        })
})
//Get By Name POst Call
app.post('/findByName', (req,res) => {
    let name = req.body.name;
    db.collection(col_name)
        .find({name:name}).toArray((err,result) => {
            if(err) throwerr;
            res.status(200).send(result)
        })
})

//Get By Name GET Call
app.get('/findGetName/:id', (req,res) => {
    let name = req.query.name
    let classm = req.params.id
    let out = 'name'+name+'classm'+classm
    db.collection(col_name)
        .find({name:name}).toArray((err,result) => {
            if(err) throw err;
            res.status(200).send(result)
        })
})

//Put
app.put('/updateUser', (req,res) => {
    db.collection(col_name)
        .findOneAndUpdate({name:req.body.name},{
            $set:{
                email:req.body.email
            }},
            {
                upsert: true
            },(err, result) => {
                if(err) throw err;
                res.status(200).send(result)
        })
})

//delete
app.delete('/deleteUser',(req,res) => {
    db.collection(col_name).findOneAndDelete({
        "name":req.body.name
    },(err, result) => {
        if(err) throw err;
        res.status(200).send('Deleted')
    })
})

//Get 
app.get('/', (req,res) => {
    db.collection(col_name).find().toArray((err,result) => {
        if(err) throw err;
        res.status(200).send(result)
    })
})


Database.connect(mongourl, (err, client) => {
    if(err) throw err;
    db = client.db('classpractice')
    app.listen(port, ()=> {
        console.log(`Server running on port ${port}`)
    })
})

