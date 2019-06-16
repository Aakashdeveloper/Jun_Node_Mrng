const express = require('express');
const app = require('./app');
const port = process.env.PORT || 7700

app.use(express.static(__dirname+'/public'));
app.set('view engine','ejs');
app.set('views','./views')

app.get('/', (req,res) => {
    res.render('index',{msg:req.query.msg ? req.query.msg:'',
                        err:req.query.valid? req.query.valid: ''})
})

app.get('/signup', (req,res) => {
    res.render('signup')
})


app.listen(port, () => {
    console.log('Running on Port '+ port)
})
