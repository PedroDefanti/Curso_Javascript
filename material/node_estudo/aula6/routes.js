// acho que isso é tipo a urls.py do django 

const express=require('express')
const route=express.Router()
const homeController=require('./src/controllers/homeControllers')
const contatoController=require('./src/controllers/contatoControllers')



route.get('/',homeController.PaginaInicial)
   



route.get('/contato',contatoController.PaginaInicial)
route.post('/',homeController.TrataPost)

module.exports=route

