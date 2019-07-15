var filtro = document.querySelector("#filtro");

filtro.addEventListener("input", function(){
    var pacientes = document.querySelectorAll(".paciente");
    var nomeFiltro = this.value;

    pacientes.forEach(paciente => {
        var nomePaciente = paciente.querySelector(".info-nome").textContent;
        var expressaoRegular = RegExp(this.value, "i"); //Trabalha com expressões regulares para filtrar letra a letra

        if(expressaoRegular.test(nomePaciente)){ //Testa se o nome do paciente tem as letras iguais as do input
            paciente.classList.remove("invisivel");
        }else if(nomeFiltro.length == 0){
            pacientes.forEach(paciente => {
                paciente.classList.remove("invisivel");
            });
        }else{
            paciente.classList.add("invisivel");
        }
    });
})