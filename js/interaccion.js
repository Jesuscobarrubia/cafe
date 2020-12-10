$(document).ready(function(){
// EFECTO DEL MENU
    $('.menu a').each(function(elemento){
        $(this).css({
            top:'-200px'
        });

        $(this).animate({
            top: '0'
        },2000 + (elemento * 500))
    });

// EFECTO DEL HEADER
    if( $(window).width() > 800){
        $('header .textos').css({
            opacity: 0,
            marginTop: 0
        });

        $('header .textos').animate({
            opacity: 1,
            marginTop: '30px'
        }, 2000);
    }

// IR A LOS ELEMENTOS DEL MENU
    $('#btn-acerca-de').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 380
        }, 500);
    })
    $('#btn-menu').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 860
        }, 500);
    })
    $('#btn-galeria').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 1770
        }, 500);
    })
    $('#btn-ubicacion').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 2400
        }, 500);
    })
});