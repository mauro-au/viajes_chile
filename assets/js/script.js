const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

$(document).ready(function() {
    // transición de color transparente a negro en el navbar al hacer scroll
    $(window).on('scroll', function() {
        if($(window).scrollTop() > 0) {
            $('#menu').addClass('nav-color-scroll');
        } else {
            $('#menu').removeClass('nav-color-scroll');
        }
    });
    
    // transición de color transparente a negro en menu mobile al hacer click en el botón de hamburguesa 
    $(".navbar-toggler").on("click", function () {
        $(".navbar").toggleClass( "nav-color-toggler" );
    });
    
    // Alert al apretar botón para enviar correo 
    $('#enviarCorreo').click(function () {
        alert("El correo fue enviado correctamente...");       
    })
});
