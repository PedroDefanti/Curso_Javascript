document.addEventListener('click', e => {
    const el = e.target
    // necessário pq tagName sempre retorna maiuscula por 
    // isso o toLowerCase()
    const tag = el.tagName.toLowerCase()
    if (tag === 'a') {
        e.preventDefault()
        carregaPagina(el)
    }
})
async function carregaPagina(el) {
    const href = el.getAttribute('href')
    const response=await fetch(href)
    const html =await response.text()
    carregaResultado(html)

    }
    function carregaResultado(response) {
        const resultado = document.querySelector('.resultado')
        resultado.innerHTML = response
    }

// fetch('pagina3.html').then(resposta=>{
//     if(resposta.status!==200)throw new Error('ERRO 404 MEU')
//     return resposta.text()
// })
// .then(html=>{
//     console.log(html)
// }).catch(e=>{console.log(e)})