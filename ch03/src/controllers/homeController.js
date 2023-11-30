const path = require("path");


exports.index = function (request, response) {
    //response.send ("index")
    response.sendFile(path.resolve("./public/index.html"))
};
exports.about = function (request, response) {
    //response.send ("About")
    response.sendFile(path.resolve("./public/about.html"))

};

