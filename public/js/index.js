$(document).ready(function(){
    $('.homme').on('click',function(){
        $('.homme').addClass('active');
        $('.aboutt').removeClass('active');
        $('.contactt').removeClass('active');
        $('.customizee').removeClass('active');
    });
    
    $('.aboutt').on('click',function(){
        $('.aboutt').addClass('active');
        $('.homme').removeClass('active');
        $('.contactt').removeClass('active');
        $('.customizee').removeClass('active');
    });
    
    $('.contactt').on('click',function(){
        $('.contactt').addClass('active');
        $('.homme').removeClass('active');
        $('.aboutt').removeClass('active');
        $('.customizee').removeClass('active');
    });
    $('.customizee').on('click',function(){
        $('.customizee').addClass('active');
        $('.homme').removeClass('active');
        $('.aboutt').removeClass('active');
        $('.contactt').removeClass('active');
    });
    
    $("#loginform").click(function(){
        $(".login-form").css('transform','scale(1)');
        $(".login-form").css('position','fixed');
    });
    $(".close").click(function(){
        $(".login-form").css('transform','scale(0)');
    });

    
    
    
    
    });