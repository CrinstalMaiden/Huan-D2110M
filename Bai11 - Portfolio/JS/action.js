$(document).ready(function(){
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
});