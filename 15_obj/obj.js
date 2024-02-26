function pessoa(nm,apl,nmr){
    this.nome=nm;
    this.sobrenome=apl;
    this.numero=nmr;

    this.nome_completo= function(){
        return `${this.nome} ${this.sobrenome}`
    }

    this.alterar_nome=function(novo_nome){
        this.nome=novo_nome
    }
}

let cliente= new pessoa("Yasmim","Santos","992153019")
console.log(cliente.nome)
console.log(cliente.sobrenome)
console.log(cliente.numero)

console.log(cliente.nome_completo())
cliente.alterar_nome("Angela")
console.log(cliente.nome_completo())