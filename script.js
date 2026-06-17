const favoritos = document.querySelectorAll(".favorito");

favoritos.forEach(function(boton){

    boton.addEventListener("click", function(){

        if(boton.innerHTML === "♡"){
            boton.innerHTML = "♥";
            boton.style.color = "red";
        } else {
            boton.innerHTML = "♡";
            boton.style.color = "#3b2a1a";
        }

    });

});

function enviarMensaje() {
    document.getElementById("mensaje-enviado").innerHTML =
    "✓ Mensaje enviado correctamente";
}
