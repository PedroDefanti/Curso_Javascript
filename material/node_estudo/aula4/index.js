const fs=require('fs').promises//ele apresenta duas funções a sincrona e 
// assincrona
//fs=File System
const path=require('path')

// fs.readdir(path.resolve(__dirname))// resolve o path tenta achar o 
// // caminho (pelo menos foi oque eu entendi)
// .then(file=>console.log(file))
// .catch(e=>console.log(e))


async function readdir(rootDir){
    rootDir=rootDir|| path.resolve(__dirname)
    const files=await fs.readdir(rootDir)//le o conteudo do diretorio,
    // Retorna uma Promise com um array de nomes de arquivos/pastas,await
    //  espera a Promise resolver antes de continuar,O resultado é 
    // armazenado em files
    walk(files,rootDir)
}

async function walk(files,rootDir){
    for(let file of files){
        const fileFullPath=path.resolve(rootDir,file)
        const stats=await fs.stat(fileFullPath)
        if(/\.git/g.test(fileFullPath))continue
        if(/\.node_modules/g.test(fileFullPath))continue
        if(stats.isDirectory()){
            readdir(fileFullPath)
            continue
        }
        if(/\.css$/g.test(fileFullPath))continue
        console.log(fileFullPath)
    }
}

readdir('C:/Users/pedro/OneDrive/Documentos/GitHub/Curso_Javascript')


