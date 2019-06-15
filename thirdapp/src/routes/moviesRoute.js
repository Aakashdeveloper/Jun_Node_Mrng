import express from 'express'
const moviesRouter = express.Router();
import mongodb from 'mongodb';
const url = "mongodb://localhost:27017/";
const dbName = 'classdatabase';
import 'babel-polyfill';

function router(menu){

    moviesRouter.route('/')
    .get((req,res) => {
        (async function mongo(){
            let client;
            try{
                client = await mongodb.connect(url);
                const db = client.db(dbName);
                const col = await db.collection('movies');
                const data = await col.find().toArray();
                res.render('movies',{title:'Movies Page',
                            menu, movies:data})

            }
            catch{
                console.log(err)
            }
        client.close();
        }());
    });
    moviesRouter.route('/:id')
        .get((req,res) => {
            const {id} = req.params;
            (async function mongo(){
                let client;
                try{
                    client = await mongodb.connect(url);
                    const db = client.db(dbName);
                    const col = db.collection('movies');
                    const details = await col.findOne({_id:id})
                    res.render('details',
                                {title:'Movies Details',
                                 menu, 
                                 details})
                }
                catch{
                    console.log(err)
                }
                client.close();
            }())
           
    })

    return moviesRouter;
}



module.exports= router;