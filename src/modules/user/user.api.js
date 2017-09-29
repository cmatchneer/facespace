let debug = require('debug')('user-api');
let Name = require('./user');

module.exports = function(express){
    let Router = express.Router();

    Router.get('/user', function(req, res){
        Name.find({}, function(err, names){
            res.send(names);
        });
    });

    Router.get('/user/:name', function(req, res){
        Name.find({name: req.params.name}, function(err, names){
            res.send(names);
        });
    });

    Router.post('/user', function(req, res){
        let name = Name({name: req.body.name});

        name.save(function(err, name){
            res.send(name);
        });
    });

    // Update a user.

    return Router;
}
