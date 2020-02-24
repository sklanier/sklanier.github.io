$(window).scroll(function(){
    $(".scrollfade").css("opacity", 1 - $(window).scrollTop() / 750);
    console.log(scroll);
});
$(window).scroll(function(){
    $(".masthead").css("opacity", 1 - $(window).scrollTop() / 1000);
    console.log(scroll);
});