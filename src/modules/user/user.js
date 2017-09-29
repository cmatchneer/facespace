let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let userSchema = new Schema({
    name: String
});

let User = mongoose.model('user', userSchema);

module.exports = User;