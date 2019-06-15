import express from 'express';
import chalk from 'chalk';
import morgan from 'morgan'
const app = express();
const port = 9000;

const menu =    [{'link':'/', 'name':'Home'}, 
                {'link':'/movies', 'name':'Movies'}, 
                {'link':'/artists', 'name':'Artits'}]

const moviesRouter = require('./src/routes/moviesRoute')(menu);
const ArtistRouter = require('./src/routes/artistsRoute')(menu);

// logging middleware
app.use(morgan('tiny'));

//Static File Path
app.use(express.static(__dirname+'/public'));
// Html file path
app.set('views', './src/views');
// View Engine
app.set('view engine', 'ejs');




app.use('/movies',moviesRouter);
app.use('/artists', ArtistRouter);
app.get('/', (req,res) => {
    res.render('index',{title:'Home Page',
                        menu:menu})
})


app.listen(port, (err) => {
    console.log(`${chalk.blue(`Server is running on port ${port}`)}`)
})