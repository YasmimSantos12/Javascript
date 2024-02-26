let user=document.getElementById("user")
let button=document.getElementById("btn")
let span=document.getElementById("span")
let hrs=document.getElementById("hrs")

function saudar(){
    let saudacao=["Bom dia","Boa tarde","Boa noite"]
    if(hrs.value<12){
        span.innerHTML=`${saudacao[0]} ${user.value}`
    }
    else if(hrs.value >=12 && hrs.value<18){
        span.innerHTML=`${saudacao[1]} ${user.value}`
    }
    else{
        span.innerHTML=`${saudacao[2]} ${user.value}`
    }
    
}


