// لما الصفحه تتحمل وتكون جاهزة يبدأ يحمل ال jquery
/*$(document).ready(function(){
    $('button').click(function(){
        $('.parent').toggle(1000);
        $('.parent').fadeToggle(1000);
        $('.parent').slideToggle(1000);
        $('.parent').slideDown(1000);
        $('.parent').fadeTo('slow' , 0.6);
        $('.parent').show();
    })
});*/
$(document).ready(function(){
    /*$('input').keypress(function(){
        var value =$(this).val();
        console.log(value);
    });
    $('input').keydown(function(){
        var value =$(this).val();
        console.log(value);
    });
    $('input').keyup(function(){
        var value =$(this).val();
        console.log(value);
    $('button').dblclick(function(){
        $('.parent').show();
    }); 
    $('button').mouseenter(function(){
        $('.parent').show();
    }); 
    
    $('button').mouseleave(function(){
        $('.parent').show();
    });
    $('input').focus(function(){
        $(this).css('background','#000')
    });
    $('input').blur(function(){
        $(this).css('background','#000')
    });
    
    $('button').click(function(){
        $('.parent').addClass('parent-2');
    });
    $('button').click(function(){
        $('.parent').removeClass('parent-2');
    });
    $('button').click(function(){
        $('.parent').toggleClass('parent-2');
    });*/
    
     $('button').click(function(){
        $('.parent').disable();
    });
});