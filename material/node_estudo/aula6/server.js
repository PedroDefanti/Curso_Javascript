const express=require('express')//o express está dentro do node_module sendo 
// assim não precisa passar um caminho só o nome do 
const app=express()
const routes=require('./routes')
const path=require('path')

app.use(express.urlencoded({extended:true}))

app.use(express.static(path.resolve(__dirname,'public')))

app.set('views',path.resolve(__dirname,'src','views'))// fala onde está a pasta


app.set('view engine','ejs')// fala qual engine vai usar

app.use(routes)

// http: //meusite.com/sobre <- GET -> Entregue a página /sobre
// http: //meusite.com/contato <- GET -> Entregue a página /contato




app.listen(3000,()=>{
    console.log('Acessar http://localhost:3000')
    console.log('Servidor executando na porta 3000')
})// porta 3000



