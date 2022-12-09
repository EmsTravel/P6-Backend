const http = require('http'); // objet http créé pour creer le server(import le module http natif de node avec require)
const app = require('./app') // on appelle avec require la app cree dans app.js

const normalizePort = val => { // envoye un port valide sous forme de numero ou chaine
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port;
    }
    return false;
};
const port = normalizePort(process.env.PORT ||  '3000');
app.set('port', port);

const errorHandler = error => { // fonction qui gere les erreurs avec 
    if (error.syscall !== 'listen') {
        throw error;
    }
    const address = server.address();
    const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges.');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use.');
            process.exit(1);
            break;
        default:
            throw error;
    }
};

const server = http.createServer(app); // on passe la app en argument

server.on('error', errorHandler);
server.on('listening', () => {
    const address = server.address();
    const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
    console.log('Listening on ' + bind);
});

server.listen(port); // port 3000 utilise par default  si pas dispo on utilise un autre port