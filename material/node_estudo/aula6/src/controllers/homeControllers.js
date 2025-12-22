exports.PaginaInicial = (req, res) => {
    res.render('index')// apos a requisicao retorna
}

exports.TrataPost =(req,res)=>{
    res.send('Sua nova rota de post' + req.body.nome)
}