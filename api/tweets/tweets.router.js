const router = require('express').Router();
const controller = require('./tweets.controller');

router.get('/', controller.client_getTweets);
router.get('/:id', controller.client_getTweet);
router.post('/:owner', controller.client_addTweet);
router.delete('/:id', controller.client_deleteTweet);

module.exports = router;

