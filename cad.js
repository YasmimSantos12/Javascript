let read=require('readline-sync')
let alunos=[]

function cadastrar(){
    console.log("=====Novo Cadastro====")
    let nome=read.question("Nome do aluno(a):")
    let idade=Number(read.question("Idade aluno(a):"))
    let cep=read.question("Cidade/Região:")
    let aluno={nome:nome,idade:idade,cidade:cep}
    alunos.push(aluno)
    console.clear()
    console.log(`Aluno(a): ${nome} cadastrado!`)
    menu()
}
function listar(){
    console.log("=====Alunos Cadastrados======")
    for(let i=0;i<alunos.length;i++){
        console.log("----------------------------------")
        console.log(`Posição: ${i}\nNome aluno(a):${JSON.stringify(alunos[i].nome)}\nIdade aluno(a):${JSON.stringify(alunos[i].idade)}\nCidade aluno(a):${JSON.stringify(alunos[i].cidade)}`)
        console.log("-----------------------------------")
    }
    menu()
}
function editarNome(pos,novo_nome){
    alunos[pos].nome=novo_nome
}
function editarIdade(pos,nova_idade){
    alunos[pos].idade=nova_idade
}
function editarCidade(pos,nova_cidade){
    alunos[pos].cidade=nova_cidade
}
function editar(){
    console.log("======Editar Cadastro=====")
    let pos=read.question("Posição do aluno:")
    console.log("[1] Editar Nome")
    console.log("[2] Editar Idade")
    console.log("[3] Editar Cidade")
    let escolhido=Number(read.question("Opção escolhida:"))

    switch(escolhido){
        case 1:
            console.log("===Editar Nome===")
            let novoNome=read.question("Novo Nome:")
            editarNome(pos,novoNome)
            break;
        case 2:
            console.log("====Editar Idade====")
            let novaIdade=Number(read.question("Nova Idade:"))
            editarIdade(pos,novaIdade)
            break;
        case 3:
            console.log("=====Editar Cidade/Região=====")
            let novaCidade=read.question("Nova Cidade:")
            editarCidade(pos,novaCidade)
            break;
    }
    menu()
}

function menu(){
    do{
        console.log("=====Sistema de Cadastro======")
        console.log("[1] Cadastrar")
        console.log("[2] Listar")
        console.log("[3] Editar")
        console.log("[4] Sair")
        var op=Number(read.question("Opção Escolhida:"))

        switch(op){
            case 1:
                cadastrar();
                break;
            case 2:
                listar();
                break;
            case 3:
                editar();
                break;     
        }
    }while(op!=4)
    console.clear()
    console.log("Sistema fechado!")
}
menu()
