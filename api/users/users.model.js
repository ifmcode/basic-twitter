const mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
    username: {
        type: String,
        validate: {
            validator: value => value.length > 2 && value.length < 16,
            message: 'username it has to have a length between 3 and 16'
        },
        required: [true, 'The username is necessary']
    },
    name: {
        type: String, 
        validate: {
            validator: value => value.length > 2,
            message: 'must have at least 3 length'
        },
        required: [true, 'The name is necessary']
    },
    email: {
        type: String,
        validate: {
            validator: value => value.indexOf('@') !== -1,
            message: 'this email is not a valid'
        },
        required: [true, 'The email is necessary']
    }
});

var users = mongoose.model('user', UserSchema);

module.exports = users;
