const express = require('express');
const router = express.Router();
const app = express();
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../config');
const User = require('../user/User');


router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());


router.post('/register', (req,res) => {
    const hashedPassword = bcrypt.hashSync(req.body.password, 8);

    User.create({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
        opass: req.body.password
    },(err, user) => {
        if(err) return res.statusCode(500).send("Problem connecting service");
        var token = jwt.sign({id: user._id}, config.secret,{
            expiresIn: 86400
        })
        const string  = encodeURIComponent('Success Fully Register Please Login');
        res.redirect('/?msg='+ string);
        //res.send({auth: true, token: token});
    });
});

router.post('/login', (req,res) => {
    User.findOne({email: req.body.email}, (err, user) => {
        if(err) return res.statusCode(500).send("Problem connecting service");
        const string  = encodeURIComponent('Please enter valid email');
        if(!user) {res.redirect('/?valid='+ string)}
        else{
            var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
            if(!passwordIsValid) return res.status(401).send({auth: false, token: null});
            var token = jwt.sign({id: user._id}, config.secret,{
                expiresIn: 86400 
            });
            res.redirect(`/users/profile?id=${user._id}`)
        }
    });
});

router.get('/userinfo', (req,res) => {
    var token = req.headers['x-access-token'];
    if(!token) res.status(401).send({auth: false, message: 'No Token Provided'});
    jwt.verify(token, config.secret, (err, decoded) => {
        if(err) return res.status(500).send({auth: false, message: 'Fail to authenticate'});
        User.findById(decoded.id, {password:0, opass:0}, (err, user)=> {
            if(err) return res.statusCode(500).send("Problem connecting service");
            if(!user) return res.status(404).send('No user Found');
            res.status(200).send(user);
        });
    });
});


module.exports = router;