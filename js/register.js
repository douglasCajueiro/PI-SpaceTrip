let nome = document.getElementById("nome");
let cpf = document.getElementById("cpf");
let cep = document.getElementById("cep");
let street = document.getElementById("street");
let neighborhood = document.getElementById("neighborhood");
let cityAndState = document.getElementById("city-and-state");
let valor;
let valorCPF;

cpf.addEventListener("keyup", function(){
    if(this.value.length == 11){
        valorCPF = this.value;
    }else if(this.value.length > 11){
        this.value = valorCPF;
    }
    
})

cep.addEventListener("keyup", function(){
    if(this.value.length == 8){
        valor = this.value;
        //buscando CEP na API
        fetch("https://brasilapi.com.br/api/cep/v1/" + this.value)
        .then(function(resp){
            return resp.json();
        }).then(function(cep){
            street.value = cep.street;
            neighborhood.value = cep.neighborhood;
            cityAndState.value = cep.city + " / " + cep.state;
        });
    }else if(this.value.length > 8){
        this.value = valor;
    }else{
        street.value = "";
        neighborhood.value = "";
        cityAndState.value = "";
    }
})