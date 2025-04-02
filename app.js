var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
let session = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
let moviesRouter = require('./routes/movie');
let faqsRouter = require('./routes/faqs');
let aboutUsRouter = require('./routes/aboutUs');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'dbmovies',
  resave: false,
  saveUninitialized: true
}));


// Middleware para guardar la ultima pelicula en la session
app.use((req, res, next) => {
  console.log('Time:', Date.now())
  next()
});


app.use(function (req, res, next) {
  console.log("Cookie "+ req.cookies.lastMovie);
  if (req.session.lastMovie !== undefined) {
    res.locals.lastMovie = req.session.lastMovie; //almacena la ultima pelicula en la session
    console.log("Preuba Session "+ res.locals.lastMovie.title); //muestra la info en el navegador
  }
  return next();//Esto es para que la aplicacion siga su curso
});
//Rutas

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/movies', moviesRouter);
app.use('./faqs', faqsRouter);
app.use('./aboutUs', aboutUsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
