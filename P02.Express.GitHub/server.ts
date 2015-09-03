var express = require('express'); // Loads the 'express' JavaScript module.
var serveStatic = require('serve-static') // Loads the 'serve-static' JavaScript module.
var app = express(); // Creates an express application.


app.use(serveStatic('public/ftp', { 'index': ['index.html', 'index.htm'] })); // Mounts the middleware function(s) at the path.
app.listen(3117); // Binds and listens for connections on the specified host and port.


// Routes HTTP GET requests to the specified path with the specified callback function.
app.get('/', function (req, res) {
    res.send('Node.js Express dinamikus szerver a GitHub-ról');
});


