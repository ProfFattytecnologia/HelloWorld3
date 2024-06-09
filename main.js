let nomeUusuário = "";
let elemento = document.querySelector("#nome-usuário");

while(nomeUusuário == ""){
    nomeUusuário = prompt("Qual o seu nome?");
}

if(nomeUusuário == null){
    elemento.textContent = "seja muito bem vindo!"
}else{
    elemento.textContent = nomeUusuário;
}
