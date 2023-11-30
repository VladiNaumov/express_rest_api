const User = require("../models/user");

/*
Request : From Client to Server
Response: From Server to Client
Server: Receive Request and Send Response
Client: Send Request and Receive Response
*/

exports.addUser = function (request, response){
    try{
        console.log(request)
        const name = request.name
        const age = request.age
        const user = new User(name, age)
        user.save()
        response.send("пользователь добавлен" );
    }catch (e){
        console.log(e)
    }


};

exports.getUsers = function(request, response){
    console.log('getUser',User.getAll())
    response.send(User.getAll());
};


