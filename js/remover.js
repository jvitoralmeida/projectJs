
var pacientes = document.querySelectorAll(".paciente");

pacientes.forEach(paciente => {
    paciente.addEventListener("dblclick", function(){ //escutando um evento de double click
        this.remove(); //removendo o elemento a quem o evento percente(foi clicado)
    })
});