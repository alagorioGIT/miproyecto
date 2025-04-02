const session = require("express-session");

let moviesControlers = {
    index: function (req, res) {
        let movieList = ['Rocky', 'Batman', 'Barbie', 'Iron Man'];
        return res.render('movies', { title: 'Movies', listaPelis: movieList });
    },
    show: function (req, res) {
        return res.send(`Estamos en el deatalle de la pelicula:  ${req.params.id} `)
    },
    create: function (req, res) {
        return res.render('movieNew', { title: 'Nuew Peli' })
    },
    search: function (req, res) {
        let searchTerm = req.query.search;
        return res.render('searchResults', { title: 'Resultados de la busqueda', searchTerm });;
    },
    store: function (req, res) {
        let info = req.body; //en body estan las propiedades del formulario
        req.session.lastMovie = info; //almacena la ultima pelicula en la session 
        res.cookie('lastMovie', info.title,{maxAge:1000*60*5}); //almacena la ultima pelicula en la cookie
        return res.redirect('/'); //redirecciona a la ruta principal hasta que se cree la base de datos
    }

}
module.exports = moviesControlers;