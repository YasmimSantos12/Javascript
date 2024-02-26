function imc(peso,altura){
    return (peso/altura**2).toFixed(0)//arredonda o valor
}
let msg="seu imc é:"
console.log(`${msg.toUpperCase()} ${imc(45,1.65)}`)//maiusculos
console.log(msg.length)//indica tamanho

