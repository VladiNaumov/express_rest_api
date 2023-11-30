const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const path = require('path')
const todoRoutes = require('./routes/controller')
const sequelize = require('./models/people')


// Logger
app.use(require ('morgan')('dev'))

/*
Cross-origin resource sharing
CORS совместное использование ресурсов между разными источниками—
технология современных браузеров, которая позволяет предоставить веб-страницам доступ к ресурсам другого домена.
 */
app.use(require('cors')())


app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use('/api/list', todoRoutes)


app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public' + '/demo.html')
})


async function start() {
    try {
        await sequelize.sync()
        app.listen(PORT, () => console.log('сервер запущен на порте '   + PORT + ' нажмите Ctrl+C для завершения...'))
    } catch (e) {
        console.log(e)
    }
}

start()
