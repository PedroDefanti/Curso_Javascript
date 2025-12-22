const mongoose=require('mongoose')

const HomeSchema= new mongoose.Schema({
    titulo:{type:String,require:true},// Esse require significa que o titulo precisa ser enviado
    descricao:String
})

const HomeModel=mongoose.model('Home',HomeSchema)// passa o nome do model e seu schema

module.exports=HomeModel