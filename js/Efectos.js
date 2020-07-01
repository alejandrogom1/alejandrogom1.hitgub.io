$(document).redy(function(){
    var acercade=$('#acercade').offset().top;
    var  trabajo=$('#trabajos').offset().top;
    var contacto=$('#contacto').offset().top;
    $('#b1').on('click', function(e){
       e.preventDefault();
        $('html, body').animate({
            scrollTop:250

        }, 500);
    });
    $('#b2').on('click', function(e){
        e.preventDefault();
         $('html, body').animate({
             scrollTop:600
 
         }, 500);
     });
     $('#b3').on('click', function(e){
        e.preventDefault();
         $('html, body').animate({
             scrollTop:900
 
         }, 500);
     });
    });
