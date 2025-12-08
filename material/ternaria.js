const pontuacaoUsuario=1000

// Jeito não ternário
if (pontuacaoUsuario>=1000){
    console.log('Usuario Vip')
}else{
    console.log('Usuario Normal')
}

// Jeito ternário de ser
const nivelUsuario=pontuacaoUsuario>=1000 ? 'Usuario Vip':'Usuario Normal'

