const mongoose = require('mongoose');

var tweetSchema = mongoose.Schema({
    text: {
        type: String,
        validate: {
            validator: value => (value !== '' && value !== ' '),
            message: 'text value is not a valid'
        },
        required: [true, 'The text of twitter is necessary']
    },
    owner: {
        type: String,
        required: [true, 'The owner is necessary']
    }, 
    createdAt: {
        type: Number, 
        required: [true, 'The the creation date is necessary']
    }
});

var tweets = mongoose.model('tweet', tweetSchema);

module.exports = tweets;