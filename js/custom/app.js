// Start here
$(document).ready(function () {
    switchTemplate("introPartial", {});

    $("#display nav a").on('click', function () {
        $("#display nav a").removeClass('active');
        $(this).addClass('active');
        templates[$(this).attr('data-partialview')].preSwitchTemplate(); 
    });
});