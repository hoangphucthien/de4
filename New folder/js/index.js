$(document).ready(function(){
    $('.header-bar').click(function(e){
        e.preventDefault();
        $('.header-navbar').addClass('active');
    });
    $('.header-navbar').click(function(e){
        e.preventDefault();
        if ($('header-navbar').closest('.header-navbar ul')){
            $('.header-navbar').removeClass('active');
        }
    })
    

    $('.product-tab a').on('click', function (e) {
        const tab_target = $(this).attr('tab-target');
        console.log(tab_target);
        $('.product-list').removeClass('active');
        $('.product-tab a').removeClass('active');
        $(this).addClass('active');
        $(tab_target).addClass('active')
    });

    $('.client-say-slick').slick({
        dots:true,
        arrows:false,
    });

    $('.site-footer-nav_heading').on('click', function (e) {
        const footer_list = $('.site-footer-nav_heading').next();
        footer_list.removeClass('active');
        const this_list = $(this).next();
        this_list.addClass('active');
    });

});
