const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        "userName": {type : String},
        "accountNumber": {type : Number},
        "emailAddress": {type : String},
        "identityNumber": {type : Number},
    }
);

const User = mongoose.model('Users', userSchema);

module.exports = User;