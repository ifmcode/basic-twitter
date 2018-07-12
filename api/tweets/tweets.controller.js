const tweets = require('./tweets.model');

module.exports = { 
    client_addTweet, 
    client_getTweets, 
    client_getTweet, 
    client_deleteTweet 
}

function client_getTweets(req, res){
    tweets.find({}, (err, resp) => {
        if (err) return res.status(500).send(err);
        resp.sort( (a, b) => a.createdAt < b.createdAt ? 1 : ( a.createdAt > b.createdAt ? -1 : 0));
        res.json(resp);
    })
}

function client_getTweet(req, res){
    tweets.findOne({_id : req.params.id}, (err, resp) => {
        if (err && err.name === "CastError") return res.status(400).send('This tweet id doesnt exists')
        if (err) return res.status(500).send(err);
        res.json(resp);
    })
}

function client_addTweet(req, res){
    const newTweet = new tweets({
        text : req.body.text,
        owner : req.params.owner,
        createdAt : Date.now()
    })
    newTweet.save(function (err) {
        if (err) return res.status(406).send(err.message);
        return res.status(201).json(newTweet);
    })
    
}

function client_deleteTweet(req, res){
    tweets.findOneAndRemove({_id : req.params.id}, (err, resp) => {
        if (err && err.name === "CastError") return res.status(400).send('This tweet id doesnt exists')
        if (err) return res.status(500).send(err);
        res.json(resp);
    })
}

