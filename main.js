$(document).ready(function () {
    $(".navbut").on("click", function () {
        console.info(this);
        $(this).siblings().removeClass("clicked");
        $(this).addClass("clicked");
    });
});