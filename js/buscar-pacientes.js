var botaoBuscar = document.querySelector("#buscar-paciente");

botaoBuscar.addEventListener("click", function(){
    
    var xhr = new XMLHttpRequest(); //Cria o objeto que faz a requisição

    xhr.open("GET","https://api-pacientes.herokuapp.com/pacientes"); //Define o método e a url da requisição

    xhr.send(); //Envia a requisição

    xhr.addEventListener("load", function(){ //Evento load para quando a requisição for totalmente carregada
        
        if(xhr.status == 200){
            var xthResponse = xhr.responseText; //Pega o texto de resposta

            var responseJson = JSON.parse(xthResponse); //Converte a resposta para JSON
    
            responseJson.forEach(paciente => {
                criaPaciente(paciente);
            });
        }else{
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
        
        
    });
});