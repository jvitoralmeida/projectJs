
var botaoAdicionarPaciente = document.querySelector("#adicionar-paciente");
botaoAdicionarPaciente.addEventListener("click", function (event) { // {event} é o evento em questão que está sendo passado(click)
    //Previni o comportamento padrão, que seria recarregar a página
    event.preventDefault();

    //criar o objeto paciente dentro da função {extrairPacienteForm} com os dados do form via querySelector
    var form = document.querySelector("#form-adiciona");
    var paciente = extrairPacienteForm(form);

    
    erros = validaPaciente(paciente);

    var ulErros = document.querySelector("#erros");

    if (erros.length > 0) {

        
        ulErros.innerHTML = ""; //Controla os subelementos dentro de um elemento, neste caso limpa os subelementos

        erros.forEach(erro => {
            var li = document.createElement("li");
            li.textContent = erro;
            li.classList.add("cor-erro");
            ulErros.appendChild(li);
        });

        return;
    } else {
        //insere a <tr> dentro da tabela
        var tabela = document.querySelector("#tabela-pacientes");
        ulErros.innerHTML = "";
    }

    criaPaciente(paciente);
    
    form.reset();
})

function criaPaciente(paciente){
    var tr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.append(tr);
}

function extrairPacienteForm(form) { //recebe o objeto formulário com os dados

    //Criação de um Objeto do tipo Paciente em JavaScript
    var paciente = {
        //Quando pegamos o valor de um formulário conseguimos acessar seus dados apenas com o nome da propriedade formulario.propriedade
        //Quando os campos no html são inputados, usamos o value para pegar o seu valor
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaIMC(form.peso.value, form.altura.value)

    };
    //Retorno do objeto
    return paciente;
}

function montaTr(paciente) {

    //Criação dos elementos HTML com createElement
    var pacienteTr = document.createElement("tr");

    pacienteTr.classList.add("paciente");

    //Define os td's como filhos do tr
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    //Atribui os valores do objeto paciente para os elementos html criados acima
    td.textContent = dado;
    //Adiciona as classes CSS aos elementos criados
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente) {

    var erros = []; //Declaração de um array

    if (paciente.nome.length == 0) {
        erros.push("Nome não pode ser em branco") //adiciovando valor a um array
    }

    if (paciente.peso.length == 0) {
        erros.push("Peso não pode ser em branco")
    }
    else if (!validaPeso(paciente.peso)) {
        erros.push("Peso inválido");
    }

    if (paciente.altura.length == 0) {
        erros.push("Altura não pode ser em branco")
    }
    else if (!validaAltura(paciente.altura)) {
        erros.push("Altura inválida");
    }

    if(paciente.gordura.length == 0){
        erros.push("Gordura não pode ser em branco");
    }
    return erros;
}