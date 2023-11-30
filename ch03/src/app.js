const express = require("express");
const app = express();
const userRouter = require("./routes/userRouter.js");
const homeRouter = require("./routes/homeRouter.js");
const PORT = process.env.PORT || 3000

// Logger
app.use(require ('morgan')('dev'))
app.use(require('cors')())

// определяем маршруты и их обработчики
app.use("/api", userRouter);
app.use("/", homeRouter);

app.use(function (req, res, next) {
    res.status(404).send("Not Found");
});

async function start() {
    try {

        app.listen(PORT, () => console.log('сервер запущен на порте ' + PORT +' нажмите Ctrl+C для завершения...'))
    } catch (e) {
        console.log(e)
    }
}

start()

