let express = require('express');
let bodyParser = require('body-parser');
let debug = require('debug')("Application");
let mongoose = require('mongoose');
let app = express();

mongoose.connect("mongodb://localhost:27017/app")

app.use(
    bodyParser.urlencoded({
        extended: false
    }),
    bodyParser.json()
);
// Import our routes
let UserAPI = require('./modules/user/user.api')(express);
app.use('/api', UserAPI);

app
    .listen(3000)
    .on("listening", function (){
        debug('We are up and running on port 3000');
    });