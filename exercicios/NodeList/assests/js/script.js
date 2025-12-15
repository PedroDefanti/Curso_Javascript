const paragrafos=document.querySelector('.paragrafos')
const ps=paragrafos.querySelectorAll('p')

const EstiloBody=getComputedStyle(document.body)
const bgEstilo=EstiloBody.backgroundColor

// ps.forEach(p =>{
//     p.style.backgroundColor=bgEstilo
//     p.style.color='white'
// })

// for(const p of ps){
//     p.style.backgroundColor=bgEstilo
//     p.style.color='white'
// }

for(let i=0;i< ps.length;i++){
    ps[i].style.backgroundColor=bgEstilo
    ps[i].style.color='white'
}