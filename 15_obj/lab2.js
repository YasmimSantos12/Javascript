function soma(n1,n2){
    return n1+n2
}
let num1=20;
let num2=30;
console.log(soma(num1,num2))

//construtores
function pessoa(nm,cp,or){
    this.nome=nm;
    this.cpf=cp;
    this.origem=or;

    this.alterar_cpf=function(novo_cpf){
        this.cpf=novo_cpf;
    }
    this.alterar_nome=function(novo_nome){
        this.nome=novo_nome
    }
    this.alterar_cidade=function(nova_cidade){
        this.origem=nova_cidade
    }
    this.apresentar=function(){
        console.log(`Nome: ${this.nome} - CPF: ${this.cpf} - Origem: ${this.origem}`)
    }
}

let cliente= new pessoa()
cliente.nome="Yasmim"
cliente.cpf=63426498274
cliente.origem="Xambioá"
cliente.apresentar()
console.log(cliente['nome'])

let cliente2= new pessoa()
cliente2.nome="Jessica"
cliente2.cpf=632789278942
cliente2.origem="Marabá"
cliente2.apresentar()

function multiplicar(n1,n2){
    return n1*n2
}

/*for(let i=1;i<=10;i++){
    for(let x=1;x<=10;x++){
        console.log(`${i} X ${x} = ${multiplicar(i,x)}`)
        if(x==10){
            console.log("-------------")
        }
    }
}*/

let estudante={
    nome:"Yasmim",
    idade:17,
    cidade:"Xambioá",
    telefone:3783530355,

    apresentar:function(){
        return `Nome: ${estudante['nome']} - Idade: ${estudante['idade']} - ${estudante['cidade']}`

    }
}
console.log(estudante.apresentar())
//pergunto se existe a propriedade telefone no estudante
console.log("telefone" in estudante)

if("telefone" in estudante){
    console.log(`Existe o telefone: ${estudante.telefone}`)
}else{
    console.log("Não existe")
}

//exibir todos os dados de um objeto
let filme={
    nome:"Homem-Aranha",
    lancamento:2007,
}
for(key in filme){
    console.log(filme[key])
}
console.log(filme.nome)
console.log(filme['lancamento'])