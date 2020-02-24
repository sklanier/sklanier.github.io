$(window).scroll(function(){
    $(".scrollfade").css("opacity", 1 - $(window).scrollTop() / 550);
    console.log(scroll);
});
$(window).scroll(function(){
    $(".masthead").css("opacity", 1 - $(window).scrollTop() / 550);
    console.log(scroll);
});