function meuEscopo(){
    const form=document.querySelector('.form')
    const resultado=document.querySelector('.resultado')
    const pessoas=[]
        function RecebeEventoForm(evento){
            evento.preventDefault()
            
            const nome=form.querySelector('.nome')
            const sobrenome=form.querySelector('.sobrenome')
            const peso=form.querySelector('.peso')
            const altura=form.querySelector('.altura')

            let obj={pessoa_nome:nome.value,
                    pessoa_sobrenome:sobrenome.value,
                    pessoa_peso:peso.value,
                    pessoa_altura:altura.value}
            pessoas.push(obj)
            console.log(pessoas)
            resultado.innerHTML+=`Seu nome é ${nome.value} <br />`
            resultado.innerHTML+=`Seu sobrenome é ${sobrenome.value} <br />`
            resultado.innerHTML+=`Seu peso é ${peso.value} <br />`
            resultado.innerHTML+=`Seu altura é ${altura.value} <br />`
        }
        

        form.addEventListener('submit',RecebeEventoForm)
}
meuEscopo()