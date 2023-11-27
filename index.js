const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const path = require('path')

const sequelize = require('./utils/database')
const todoRoutes = require('./routes/todo')

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


app.use((req,res, next) => {
res.sendFile(__dirname + '/public' + '/copy.html')

})

async function start() {
    try {
        //await sequelize.sync({force: true})
        await sequelize.sync()
        app.listen(PORT)
    } catch (e) {
        console.log(e)
    }
}

start()
