console.clear();
let nome="Yasmim";
//acento grave
let sobrenome=`${nome} Santos`;
console.log(sobrenome);

let num1=10;
let num2=11;
let comparar=num1<num2;
console.log(comparar);


//usamos null somente para inicializar uma variavel e depois preenche-la
let idade=null;
idade=17;
console.log(idade);

if(typeof(nome)=="string"){
    console.log("é uma string!");
}else{
    console.log("não é uma string");
}