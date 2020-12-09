const responsive = {
    0:{
        items:1
    },
    
    320:{
        items:1
    },
    540:{
        items:2
    },
    940:{
        items:3
    }

}

$(document).ready(function () {
    
    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');


    $toggleCollapse.click(function() {
        $nav.toggleClass('çollapse');
    })


    // oil-carousel
$('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    autoTimeout:2000,
    dots:false,
    nav:true,
    navText:[$('.owl-navigation .owl-nav-prev'),$('.owl-navigation .owl-nav-next')],
    responsive:responsive
});


// click to scroll up
$('.move-up span').click(function () {
    $('html,body').animate({
        scrollTop:0
    }, 1000);
})


//animation on scroll instance
AOS.init();
});

