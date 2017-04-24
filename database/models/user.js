var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = new Schema({
    name: String,
    id: String,
    avatar: String,
    tel: String,
    pwd: String
});

module.exports = mongoose.model('user', UserSchema);