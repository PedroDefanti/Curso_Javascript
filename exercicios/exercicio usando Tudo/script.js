function ReceberValor() {
    const form = document.getElementById('form')
    let peso = document.getElementById('peso')
    let altura = document.getElementById('altura')
    const resultado = document.getElementById('resultado')
    function CalcularIMC(evento) {
        evento.preventDefault()


        verificar_peso = isNaN(peso.value)
        verificar_altura = isNaN(altura.value)
        if (verificar_altura  || verificar_peso ) {
            resultado.style.background='red'
            resultado.innerHTML = 'Resultado Inválido'

        } else {


            num_peso = parseInt(peso.value)
            num_altura = parseFloat(altura.value)


            const calculo = num_peso / (num_altura ** 2)
            let resultado_calculo = calculo.toFixed(2)
            if (resultado_calculo < 18.5) {
                resultado.style.background='green'
                resultado.innerHTML = `Seu IMC é de ${resultado_calculo}.(Abaixo do peso)`
            }
            else if (resultado_calculo >= 18.5 && resultado_calculo <= 24.9) {
                resultado.style.background='green'
                resultado.innerHTML = `Seu IMC é de ${resultado_calculo}.(Peso normal)`
            }
            else if (resultado_calculo >= 25 && resultado_calculo <= 29.9) {
                resultado.style.background='green'
                resultado.innerHTML = `Seu IMC é de ${resultado_calculo}.(Sobrepeso)`
            }
            else if (resultado_calculo >= 30 && resultado_calculo <= 34.9) {
                resultado.style.background='green'
                resultado.innerHTML = `Seu IMC é de ${resultado_calculo}.(Obesidade grau 1)`
            }
            else if (resultado_calculo >= 35 && resultado_calculo <= 39.9) {
                resultado.style.background='green'
                resultado.innerHTML = `Seu IMC é de ${resultado_calculo}.(Obesidade grau 2)`
            }
            else if (resultado_calculo > 40) {
                resultado.style.background='green'
                resultado.innerHTML = `Seu IMC é de ${resultado_calculo}.(Obesidade grau 3)`
            }


        }

    }


    form.addEventListener('submit', CalcularIMC)

}

ReceberValor()
