console.log("Fui carregado de um arquivo externo");

var titulo = document.querySelector(".titulo");

//-- Comando para buscar um seletor na pagina html
document.querySelector(".titulo").textContent = "Aparecida Nutricionista"; //--Atribuindo valor a tag do html

var pacientes = document.querySelectorAll(".paciente");

pacientes.forEach(paciente => {
    var pesoPaciente = paciente.querySelector(".info-peso").textContent;
    var alturaPaciente = paciente.querySelector(".info-altura").textContent;

    if (pesoPaciente < 0 || pesoPaciente > 200) {
        console.log("Peso inválido");
        //Atribui ao campo info-imc de paciente o valor Peso inválido
        paciente.querySelector(".info-imc").textContent = "Peso inválido";
        //Adiciona uma classe CSS ao componente html de paciente
        paciente.classList.add("paciente-invalido");
    }

    else if (alturaPaciente < 0 || alturaPaciente > 3.00) {
        console.log("Altura inválida");
        paciente.querySelector(".info-imc").textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    }
    else {
        var imc = pesoPaciente / (alturaPaciente * alturaPaciente);
        paciente.querySelector(".info-imc").textContent = imc.toFixed(2); //Definir limite de casas decimais
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

var botaoAdicionarPaciente = document.querySelector("#adicionar-paciente");
botaoAdicionarPaciente.addEventListener("click", function (event) { // {event} é o evento em questão que está sendo passado(click)
    //Previni o comportamento padrão, que seria recarregar a página
    event.preventDefault();
    //Já que o comportamento padrão foi desativado, segue as instruções que a função mandar
    console.log("Sou o botão de adicionar e fui clicado");

    var conteudoForm = document.querySelector("#form-adiciona");
    //Quando pegamos o valor de um formulário conseguimos acessar seus dados apenas com o nome da propriedade formulario.propriedade
    //Quando os campos no html são inputados, usamos o value para pegar o seu valor
    var nome = conteudoForm.nome.value;
    var peso = conteudoForm.peso.value;
    var altura = conteudoForm.altura.value;
    var gordura = conteudoForm.gordura.value;

    var pacienteTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    imcTd.textContent = (peso / (altura * altura)).toFixed(2);

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

})
console.log(botaoAdicionarPaciente);