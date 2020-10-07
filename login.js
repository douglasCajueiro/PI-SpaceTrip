let btnConta = document.getElementById("conta");
let formLogin = document.querySelector(".login");
let btnLogin = document.getElementById("login");
let containerForm = document.querySelector(".container-login");

btnConta.addEventListener("click", function(event){
    formLogin.classList.add("form-up");
    containerForm.classList.add("zIndex");
});

btnLogin.addEventListener("click", function(event){
    event.preventDefault();
    formLogin.classList.add("form-upup");
    setTimeout(function(){ containerForm.classList.remove("zIndex"); }, 1000);
})