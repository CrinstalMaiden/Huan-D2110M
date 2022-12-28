$(document).ready(function(){

    // Popup

    $(".popup1").hide();
    $(".message").hide();
    $(".thankyou").hide();

    $("#hireme").click(function(){
        $(".popup1").show();
        $(".message").show();
    })

    $("#send").click(function(){
        $(".message").hide();
        $(".thankyou").show();
    })

    $("#back").click(function(){
        $(".popup1").hide();
        $(".thankyou").hide();
    })

    $("#close").click(function(){
        $(".popup1").hide();
    })

    // Navigation buttons

    $("#abtme, #me").click(function(){
        // $(document).scrollTop(1080)
        $('html, body').animate({ scrollTop : $(".aboutme").offset().top}, 500);
    })

    $("#home").click(function(){
        $('html, body').animate({ scrollTop : $(".layer1").offset().top}, 500);
    })

    $("#skill").click(function(){
        $('html, body').animate({ scrollTop : $(".skill-sets").offset().top}, 500);
    })

    $("#product").click(function(){
        $('html, body').animate({ scrollTop : $(".feature-projects").offset().top}, 500);
    })

    $("#contact").click(function(){
        $('html, body').animate({ scrollTop : $(".layer1").offset().top + 4995}, 500);
    })

    //View all
    $("#viewall").click(function(){
        window.open("https://www.behance.net/arena-multimedia?isa0=1", "_blank");
    })
});