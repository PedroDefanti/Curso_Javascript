require('dotenv').config()
const express = require('express')//o express está dentro do node_module sendo 
// assim não precisa passar um caminho só o nome do 
const app = express()
const mongoose = require('mongoose')
mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
        console.log('Conectei na base de dados')
        app.emit('Pronto')//precisa ser igual ao on
    }).catch(e => { console.log(e) })
const session = require('express-session')
const MongoStore = require('connect-mongo').default// precisei do defalt para o connect-mongo funcionar
const flash = require('connect-flash')
const routes = require('./routes')
const path = require('path')
const helmet=require('helmet')
const csrf=require('csurf')
const { middlewareG, checkCsrfError,csrfMiddleware } = require('../aula6/middlewares/middleware')

app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.resolve(__dirname, 'public')))


const sessionOptions = session({
    secret: 'Meu segredo',
    store: MongoStore.create({
        mongoUrl: process.env.CONNECTIONSTRING
    }),// onde vai salvar a sessão
    //mogooseConnection: mogoose.connection <- cliente de conexão
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
})
app.use(sessionOptions)
app.use(flash())




app.set('views', path.resolve(__dirname, 'src', 'views'))// fala onde está a pasta


app.set('view engine', 'ejs')// fala qual engine vai usar

app.use(csrf())

app.use(middlewareG)// todas as requisições de  todas as 
app.use(checkCsrfError)
app.use(csrfMiddleware)
// rotas vão passar por esse middleware
// app.use(outroMiddleware)
app.use(routes)

// http: //meusite.com/sobre <- GET -> Entregue a página /sobre
// http: //meusite.com/contato <- GET -> Entregue a página /contato



app.on('Pronto', () => {//precisa ser igual ao emite

    app.listen(3000, () => {
        console.log('Acessar http://localhost:3000')
        console.log('Servidor executando na porta 3000')
    })// porta 3000
})



