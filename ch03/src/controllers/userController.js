const User = require("../models/user");

exports.addUser = function (request, response){
    const user = new User('naumov', 32)
    user.save()
    response.send("пользователь добавлен" );

};

exports.getUsers = function(request, response){
    console.log('getUser',User.getAll())
    response.send(User.getAll());
};


