    
/*
Configurer le module de route
*/
const express = require('express');
const router = express.Router();
const path = require('path');

    //Inner
    const frontRouter = require('./routes/front.router');
//

/*
Définition des routes
*/
// Accueil
router.get('/', (req, res) => {
    res.render('index');
});
//


/*
Exporter le module de route
*/
module.exports = router;
//