function somar(n1,n2){
    return n1+n2;
}
let num1=20;
let num2=30;
console.log(`A soma entre ${num1} + ${num2} = ${somar(num1,num2)}`)


function pessoa(nome,cpf){
    this.nome=nome;
    this.cpf=cpf;

    this.alterar_nome=function(novo_nome){
        this.nome=novo_nome;''
    }
    this.alterar_cpf=function(novo_cpf){
        this.cpf=novo_cpf;
    }

    this.relatorio=function(){
        console.log(`Nome: ${this.nome} - CPF: ${this.cpf}`)
    }
}

let cliente= new pessoa("Yasmim",62427472482)
console.log(cliente.nome)
console.log(cliente.cpf)
cliente.relatorio()

cliente.alterar_nome("Angela")
cliente.alterar_cpf(731313818301)
console.log(cliente.nome)
console.log(cliente.cpf)
cliente.relatorio()



//criação de objetos de forma literal

let usuario={
    nome:"Yasmim",
    cpf:731381391,

    alterar_nome:function(novo_nome){
        this.nome=novo_nome
    }
}
console.log(usuario.nome)
usuario.alterar_nome("Maria")
console.log(usuario.nome)
//delete
delete usuario.cpf;
console.log(usuario.cpf)

console.log(usuario['nome'])

//metodo object assign
//para o usuario 2 eu quero uma clonagem do usuario 1
let estudante={
    nome:"Yasmim",
}
let estudante2={}
Object.assign(estudante2,estudante)
console.log(estudante.nome)
console.log(estudante2.nome)
estudante2.nome="Maria"
console.log("--------")
console.log(estudante.nome)
console.log(estudante2.nome)


