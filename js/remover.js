
var tabela = document.querySelector("#tabela-pacientes");
//Escutando um evento de double click
tabela.addEventListener("dblclick", function (event) { //o Event está relacionado ao componente que foi clicado(table) e ele também informa quem foi o alvo do dblclick 
    var alvoClicado = event.target; //alvo do click, neste caso pode vir a ser
    var paiDoAlvo = alvoClicado.parentNode; //tag pai do alvo clicado

    paiDoAlvo.classList.add("fadeOut");

    setTimeout(function () { //Segura a execução da função por 500ms para aplicar o estilo css
        paiDoAlvo.remove();
    }, 500);
})