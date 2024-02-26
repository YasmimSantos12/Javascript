/*function somar(n1,n2){
    return n1+n2
}*/

let somar=(n1,n2) => n1+n2
let num1=4
let num2=4


console.log(`A soma é ${somar(num1,num2)}`)



/*
function gerador(){
    return Math.random()
}

*/

let gerador_num=() => Math.random()

console.log(gerador_num())



let saudar=(nome) => {
    let saudacao="Bom dia"
    return `${saudacao} ${nome}`
}

console.log(saudar("Joao"))
