const express = require('express');
const app = express();
require('dotenv').config();

const port = process.env.PORT;
const hbs = require('hbs');

// TODO require('hbs');
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function(err){
    console.log(err);
})

// Servir contenido estatico
app.use(express.static('public'));


app.get('/', function(req, res){
    res.render('home', {
        nombre: 'Fernando Herrera',
        titulo: 'Curso de Node'
    });
});
app.get('/generic', function(req, res){
    res.sendFile(__dirname + '/public/generic.html');
});
app.get('*', function(req, res){
    res.sendFile(__dirname + '/public/404.html');
});


app.listen(port, () => {
    console.log('Corriendo en el puerto ' + port);
})