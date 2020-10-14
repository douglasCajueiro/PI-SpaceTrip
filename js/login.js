let btnConta = document.getElementById("conta");
let formLogin = document.querySelector(".login");
let btnLogin = document.getElementById("login");
let containerForm = document.querySelector(".container-login");
let voltar = document.getElementById("voltar");
let userName = document.getElementById("user-name");
let senha = document.getElementById("senha");

btnConta.addEventListener("click", function(event){
    formLogin.classList.remove("form-down");
    formLogin.classList.remove("form-upup");
    formLogin.classList.add("form-up");
    containerForm.classList.add("zIndex");
});

btnLogin.addEventListener("click", function(event){
    event.preventDefault();
    /* validando */
    if(userName.value === ""){
        userName.classList.add("alerta");
        if(senha.value === ""){
            senha.classList.add("alerta");
        }
    }else if(senha.value === ""){
        senha.classList.add("alerta");
    }else{
        formLogin.classList.remove("form-up");
        formLogin.classList.add("form-upup");
        setTimeout(function(){ containerForm.classList.remove("zIndex"); }, 1000);
    }
});

userName.addEventListener("click", function(event){
    this.classList.remove("alerta");
})

senha.addEventListener("click", function(event){
    this.classList.remove("alerta");
})






voltar.addEventListener("click", function(event){
    event.preventDefault();
    userName.classList.remove("alerta");
    senha.classList.remove("alerta");
    formLogin.classList.remove("form-up");
    formLogin.classList.add("form-down");
    setTimeout(function(){ containerForm.classList.remove("zIndex"); }, 1000);
});