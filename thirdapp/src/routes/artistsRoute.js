import express from 'express'

const ArtistRouter = express.Router();


function router(menu) {
    ArtistRouter.route('/')
    .get((req,res) => {
    res.render('artists',{title:'Artists Page',
                        menu:menu})
    })

    ArtistRouter.route('/details')
        .get((req,res) => {
            res.render('details',{title:'Artists Details',
                        menu:menu})
    })

    return ArtistRouter
}            


module.exports = router;