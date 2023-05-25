//Animacion boton carta Destacados
$(document).ready(function(){
    $(".move").dblclick(function(){
        $(".carta1").animate({
            height: "toggle"
        });
    });
});

$(document).ready(function(){
    $(".move").dblclick(function(){
        $(".carta2").animate({
            height: "toggle"
        });
    });
});

$(document).ready(function(){
    $(".move").dblclick(function(){
        $(".carta3").animate({
            height: "toggle"
        });
    });
});

$(document).ready(function(){
    $(".move").dblclick(function(){
        $(".carta4").animate({
            height: "toggle"
        });
    });
});


//Alerta con la entrada del mouse
$(document).ready(function(){
    $("#viajesChile").mouseenter(function(){
        alert("Bienvenido a Viajes Chile");
    });
});

//Animacion boton para enviar formulario y alerta de envio correcto
$(document).ready(function(){
    $("#presentacion").click(function(){
            $(this).hide();
        });
    });

//Mensaje de mensaje enviado correctamente
    $(document).ready(function(){
        $(".submit").click(function(){
            alert("Su informacion ha sido enviada correctamente");
            });
        });
    