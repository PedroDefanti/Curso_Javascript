function Relogio() {
    function retornaHora(segundo) {
        const data = new Date(segundo * 1000)
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'GMT'
        })
    }

    const relogio = document.querySelector('.relogio')
    const iniciar = document.querySelector('.iniciar')
    const pausar = document.querySelector('.pausar')
    const zerar = document.querySelector('.zerar')
    let contar = 0

    let timer
    function mostraHora() {
        timer = setInterval(function () {
            contar++
            relogio.innerHTML = retornaHora(contar)


        }, 1000)
    }
    document.addEventListener('click', function (e) {
        const el = e.target
        if (el.classList.contains('zerar')) {
            relogio.classList.remove('pausar')
            clearInterval(timer)
            relogio.innerHTML = '00:00:00'
            contar = 0
        }
        if (el.classList.contains('iniciar')) {
            relogio.classList.remove('pausar')
            clearInterval(timer)
            mostraHora()
        }
        if (el.classList.contains('pausar')) {
            relogio.classList.add('pausar')
            clearInterval(timer)

        }
    })


}

Relogio()