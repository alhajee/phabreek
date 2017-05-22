

    $(".cart").hide();

    $(".cartButtonImage").click(function(){
        $(".cart").show().slideDown("slow");

    });

    $(".xButton").click(function(){
        $(".cart").hide().slideUp("slow");

    });
    $(document).ready(function(){

        $(window).scroll(function(){
            if ($(this).scrollTop() > 100) {
                $('.topArrow').fadeIn();
            } else {
                $('.topArrow').fadeOut();
            }
        });

        $('.topArrow').click(function(){
            $('html, body').animate({scrollTop : 0},800);
            return false;
        });

    });