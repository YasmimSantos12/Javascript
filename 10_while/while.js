console.clear()
let num =1;
while(num<10){
    console.log(num)
    num++
}

console.log("-----------------")

let num2=1;
do{
    if(num2==1){
        console.log(`O valor se inicia agora com ${num2}`)
    }else{
        console.log(`O valor foi atualizado para ${num2}`)
    }
    num2++
}while(num2<10)


for(let i=1;i<=10;i++){
    for(let n=1;n<=10;n++){
        console.log(`${i} X ${n} = ${i*n}`)
        console.log("--------------------")
    }
}