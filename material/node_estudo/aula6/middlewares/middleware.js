exports.middlewareG=(req,res,next)=>{
    
    res.locals.umavariavelLocal='Este é o valor da variável local'
    // if(req.body.cliente){
    //     req.body.cliente=req.body.cliente.replace('Defanti','NÃO USE DEFANTI')
    //     // manipulei o dado qu entrava
    //     console.log(`Vi que você postou ${req.body.cliente} `)
    // }
    next()
}

// exports.outroMiddleware=(req,res,next)=>{
    
// }


exports.checkCsrfError=(err,req,res,next)=>{
    if(err && 'EBADCSRFTOKEN'=== err.code){
        return res.send('BAD CSRF')
    }
}


exports.csrfMiddleware=(req,res,next)=>{
    res.locals.csrfToken=req.csrfToken()
    next()
}