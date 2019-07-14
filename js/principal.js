console.log("Fui carregado de um arquivo externo");

var titulo = document.querySelector(".titulo");

//-- Comando para buscar um seletor na pagina html
document.querySelector(".titulo").textContent = "Aparecida Nutricionista"; //--Atribuindo valor a tag do html

var pacientes = document.querySelectorAll(".paciente");

pacientes.forEach(paciente => {
    var pesoPaciente = paciente.querySelector(".info-peso").textContent;
    var alturaPaciente = paciente.querySelector(".info-altura").textContent;

    if (!validaPeso(pesoPaciente)) {
        console.log("Peso inválido");
        //Atribui ao campo info-imc de paciente o valor Peso inválido
        paciente.querySelector(".info-imc").textContent = "Peso inválido";
        //Adiciona uma classe CSS ao componente html de paciente
        paciente.classList.add("paciente-invalido");
    }
    else if (!validaAltura(alturaPaciente)) {
        console.log("Altura inválida");
        paciente.querySelector(".info-imc").textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    }
    else {
        var imc = calculaIMC(pesoPaciente,alturaPaciente);
        paciente.querySelector(".info-imc").textContent = imc; //Definir limite de casas decimais
    }
});

//Adiciona um escutador de eventos, neste caso, escuta o evento CLICK e o segundo parâmetro é ação caso esse evento aconteça
titulo.addEventListener("click", function () { //Função Anonima
    console.log("Olá, fui clicado");
});

//Função do tipo nomeada
function mostraMensagem() {
    console.log("Olá, fui clicado");
}

function validaPeso(peso){
    if(peso <=0 || peso >=1000){
        return false;
    }
    else{
        return true;
    }
}

function validaAltura(altura){
    if(altura <=0 || altura >=3){
        return false;
    }
    else{
        return true;
    }
}

//Função para calcular imc
function calculaIMC(peso,altura){
    var imc = 0;
    imc = peso / (altura * altura);

    return imc.toFixed(2);
}