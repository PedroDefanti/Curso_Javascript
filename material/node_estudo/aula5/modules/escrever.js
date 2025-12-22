const fs= require('fs').promises


module.exports=(caminho,dados)=>{
    fs.writeFile(caminho,dados,{flag:'a'})
    // flag w=só pode uma coisa
    // flag a=pode ser varias coisa
    }
