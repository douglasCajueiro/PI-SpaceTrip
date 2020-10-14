/* FUNÇÕES GLOBAIS */
    function selector(ev){
        return document.querySelector(ev);
    }
    function selectorAll(ev){
        return document.querySelectorAll(ev);
    }
    function eventoScale(scale){
        scale.addEventListener("mouseover",function(ev){
            scale.style.transform="scale(1.07)";
        });
        scale.addEventListener("mouseout",function(ev){
            scale.style.transform="none";
        });
    }
    function trocaImagem(index,imagem,max,tempo){
        setInterval(function(ev){
            imagem[index].classList.remove("slider-ativo");
            index++
            if (index >= max){
                index = 0
            }imagem[index].classList.add("slider-ativo");
        },tempo)
    }
/* FIM FUNÇÕES GLOBAIS */
/* PEGANDO OBJETOS */
    let tempo = [3000,3500,4000];
    let index = 0;
    let numMax = 3
    let imagensSlider1 = selectorAll("#slider1");
    let imagensSlider2 = selectorAll("#slider2");
    let imagensSlider3 = selectorAll("#slider3");
    let imagensSlider4 = selectorAll("#slider4");
    let imagensSlider5 = selectorAll("#slider5");
    let imagensSlider6 = selectorAll("#slider6");
    let obj1 = selector(".obj1");
    let obj2 = selector(".obj2");
    let obj3 = selector(".obj3");
    let obj4 = selector(".obj4");
    let obj5 = selector(".obj5");
    let obj6 = selector(".obj6");
    let emailOk = true;
    const regex = /[0-9]/;
    let email = selector("#email-newslatter");
    let formNewslatter = selector("#formulario-newlatter");
/* FIM PEGANDO OBJETOS */
// FUNÇÃO SLIDER CONTEUDO 1 //
    document.addEventListener('DOMContentLoaded', function() {
        var stream = document.querySelector('.gallery__stream');
        var items = document.querySelectorAll('.gallery__item');
        var prev = document.querySelector('.gallery__prev');
        prev.addEventListener('click', function() {
        stream.insertBefore(items[items.length - 1], items[0]);
        items = document.querySelectorAll('.gallery__item');
        });
        var next = document.querySelector('.gallery__next');
        next.addEventListener('click', function() {
        stream.appendChild(items[0]);
        items = document.querySelectorAll('.gallery__item');
        });
    });
// FIM FUNÇÃO SLIDER CONTEUDO 1 //
// FUNÇÃO CRESCER SERVIÇOS CONTEUDO 2 //
    eventoScale(obj1);
    eventoScale(obj2);
    eventoScale(obj3);
    eventoScale(obj4);
    eventoScale(obj5);
    eventoScale(obj6);
    window.addEventListener("load",function(ev){
        trocaImagem(index,imagensSlider1,numMax,tempo[0])
        trocaImagem(index,imagensSlider2,numMax,tempo[1])
        trocaImagem(index,imagensSlider3,numMax,tempo[2])
        trocaImagem(index,imagensSlider4,numMax,tempo[0])
        trocaImagem(index,imagensSlider5,numMax,tempo[1])
        trocaImagem(index,imagensSlider6,numMax,tempo[2])
    });
// FUNÇÃO CRESCER SERVIÇOS CONTEUDO 2 //
// FUNÇÃO E-MAIL CONTEUDO 4 //
    function validarVazio(campo){
        if(campo.value.trim() == ""){
            emailOk = false;
            campo.style.border="1px solid red";
            campo.style.backgroundColor="#f34336";
        }else{
            emailOk = true;
            campo.style="none";
        } 
    }
    function valirdarNumeroString(string){
        if(regex.test(string.value)){
            emailOk = false;
            string.style.border="1px solid red";
            string.style.backgroundColor="#f34336";
        }else{
            emailOk = true;
            string.style="none";
        }
    }
    formNewslatter.addEventListener("submit",function(event){
        if(emailOk != true){
            event.preventDefault();
            alert("O e-mail informado é inválido");
        }else{
            alert(email.value+" cadastro realidado com sucesso!");
        }
    })
    email.addEventListener("keyup",function(ev){
        valirdarNumeroString(email);
    })
// FIM FUNÇÃO E-MAIL CONTEUDO 4 //