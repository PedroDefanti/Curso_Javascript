const express=require('express')//o express está dentro do node_module sendo 
// assim não precisa passar um caminho só o nome do 

const app=express()

// http: //meusite.com/sobre <- GET -> Entregue a página /sobre
// http: //meusite.com/contato <- GET -> Entregue a página /contato

app.get('/',(requisicao,resposta)=>{
    resposta.send('Hello World')// apos a requisicao retorna
})
app.listen(3000,()=>{
    console.log('Acessar http://localhost:3000')
    console.log('Servidor executando na porta 3000')
})// porta 3000