const User = require("../models/user");


/*
Request : From Client to Server
Response: From Server to Client
Server: Receive Request and Send Response
Client: Send Request and Receive Response
*/

exports.getUsers = async function(_, res){
    console.log('getUser',User.getAll())
    res.send(User.getAll());
};



exports.getUsersId = async function(req, res){
    try{
        const id = req.params.id;
        console.log(id)
        res.send('пользователь по ID номеру получен');

    }catch (e){
        console.log(e)
        res.status(404).send("User not found");
    }

};


exports.addUser = async function (req, res){
    try{

        if(!req.body) return res.sendStatus(400);
        console.log(req.body)
        const name = req.body.name;
        const age = req.body.age;

        console.log(req.body)

        const user = new User(name, age)
        user.save()

        res.send("пользователь добавлен" );


    }catch (e){
        console.log(e)
    }


};

exports.deletedUser = async function(req, res){
    const id = req.params.id;
    console.log(id)
    res.send("пользователь удален " );

};


exports.putUser = async function (req, res){
    if(!req.body) return req.sendStatus(400);

    const name = req.body.name;
    const age = req.body.age;

    res.send("пользователь изменён  " );

}