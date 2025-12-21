function* geradora1(){
    
    yield 'VALOR1'

    yield 'VALOR2'

    yield 'VALOR3'
}

const g1=geradora1()
console.log(g1.next().value)
console.log(g1.next().value)
console.log(g1.next().value)
console.log(g1.next())
console.log(g1.next().done)



function* geradora2(){
    yield 0
    yield 1
    yield 2
}

function* geradora3(){
    yield* geradora2()

    yield 3
    yield 4
    yield 5
}

const g3 =geradora3()

for(let gerador of g3){
    console.log(gerador)
}

function* geradora4(){
    yield function(){
        console.log('Vim do y1')
    }
    return function(){
        console.log('Vim do return')
    }
    //yield não foi executado 
    yield function(){
        console.log('Vim do y2')
    }
}

const g4=geradora4()
const fun1=g4.next().value
const fun2=g4.next().value

fun1()
fun2()