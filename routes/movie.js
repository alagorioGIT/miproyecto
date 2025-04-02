let express = require('express');
let router = express.Router();
let moviesControlers=require('../controlers/moviesControlers')

// aqui las rutas
router.get('/', moviesControlers.index);

router.get('/id/:id', moviesControlers.show);
router.get('/movieNew', moviesControlers.create);
router.post('/create', moviesControlers.store);
router.get('/results', moviesControlers.search);



module.exports = router;


