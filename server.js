
// pas besoin de la variable http grace au fonctionalité app
// const http = require('http');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const errController = require('./controller/error')
const adminData = require('./routes/admin');
const profilRoutes = require('./routes/profil');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));// pour fiare des template
app.use(express.static(path.join(__dirname, 'public')))//pour afficher les fichier css
// next(); Allows the request to continue to the next middleware in line
app.use(adminData);
app.use(profilRoutes);
app.use(errController.get404)

//fonctionalité application js, regarder sur le git expressjs/applicationjs
// permet de faire la meme chose que :

app.listen(3000);
