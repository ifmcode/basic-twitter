const users = require('./users.model');

module.exports =  { 
    client_getUser, 
    client_getUsers, 
    client_addUser, 
    client_deleteUser,
    client_updateUserEmail
}

function client_getUsers(req, res){
    users.find({}, (err, response) => {
        if (err) return res.status(500).send(err);
        if (response === null) return res.status(400).send('There arent users yet');
        return res.json(response);
    })
}

function client_getUser(req, res){
    users.findOne({"username" : req.params.username}, (err, response) => {
        if (err) return res.status(500).send(err);
        if (response === null) return res.status(400).send('Username doesn`t exist');
        return res.json(response);
    })
}

function client_addUser(req, res){
    const newUser = new users({
        username : req.body.username,
        name : req.body.name,
        email : req.body.email,
    })
    newUser.save(function (err) {
        if (err) return res.status(406).send(err.message);
        return res.status(201).json(newUser);
    })
    
}

function client_deleteUser(req, res){
    users.findOneAndRemove({"username" : req.params.username}, (err, foundObject) => {
        if (err)  return res.status(500).send(err);
        if (foundObject === null) return res.status(400).send('Username doesn`t exist');
        return res.json(foundObject);  
    })
}

function client_updateUserEmail(req, res){
    users.findOneAndUpdate({"username" : req.params.username}, { $set : {email : req.body.email}} , {new: true}, (err, foundObject) => {
        if (err)  return res.status(500).send(err);
        if (foundObject === null) return res.status(400).send('Username doesn`t exist');
        return res.json(foundObject);  
    })
}




