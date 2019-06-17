// Start here
$(document).ready(function () {
    if (!containsPermanentRedirectURLs(window.location.href)) {
        switchTemplate("introPartial", {});
    }
    else {
        redirectOldURLs(window.location.href);
    }
    

    $("#display nav a").on('click', function () {
        $("#display nav a").removeClass('active');
        $(this).addClass('active');
        templates[$(this).attr('data-partialview')].preSwitchTemplate(); 
    });
});