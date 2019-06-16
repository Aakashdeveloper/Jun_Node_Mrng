const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    opass: String
});

mongoose.model('EduJune',UserSchema );
module.exports = mongoose.model('EduJune')