exports.PaginaInicial = (req, res) => {
    // const mensagem=req.flash('info','flash funcionado')
    // // console.log( req.session.usuario)<- vai ficar por sete dias
    // console.log(req.flash('info'))
    res.render('index', {
        // titulo: 'Este será o <span style="color: red;">titulo</span> da pagina',
        numeros: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    })// apos a requisicao retorna
    return



}

exports.TrataPost = (req, res) => {
    res.send(req.body)
}
// HomeModel.create({// retorna uma promessa
//     titulo:'Titulo de testes',
//     descricao:'Uma descrição de testes'
// }).then(dados=>console.log(dados)).catch(e=>{console.log(e)})
// isso faz o model aparecer no terminal
