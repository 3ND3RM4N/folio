$(document).ready(function () {
    $(".navbut").on("click", function () {
        //console.info();
        $(this).siblings().removeClass("clicked");
        $(this).addClass("clicked");
        $("."+$(this).attr("value")).addClass("show").siblings().removeClass("show");
    });
});