const express = require('express');
const app = express(); // creer une application express en appelant la methode express()
const cors = require('cors');
const mongoose = require('mongoose'); // declaration de mongoose

//import stuff from routes
const stuffRoutes = require('./routes/stuff');
const userRoutes = require('./routes/user');

// connexion API a mongoDB
mongoose.connect('mongodb+srv://gigi:Sifonier99@cluster0.nwxuc6v.mongodb.net/?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));


// middleware intercepte toutes les requettes json
app.use(express.json());

app.use(cors());

// importer et appliquer les routes
app.use('/api/stuff', stuffRoutes);
app.use('/api/auth', userRoutes);



module.exports = app; // exporter cette constante app pour acceder depuis nos fichiers ainsi que le serveur node