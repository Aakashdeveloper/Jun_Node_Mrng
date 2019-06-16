const express = require('express');
const  router = express.Router();
const User = require('./User');

router.get('/', (req, res) => {
    User.find({}, (err,users) =>{
        if(err) return res.status(500).send('There were problwm in connecting')
        res.status(200).send(users)
    })
})


router.get('/profile', (req,res) => {
    User.findById(req.query.id, (err,user) => {
        if(err) return res.status(500).send('There were problwm in connecting')
        res.render('profile',{user})
    })
})

module.exports = router;