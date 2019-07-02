// Start here
$(document).ready(function () {
    redirectOldURLs(window.location.href);
    
    $("#display nav a").on('click', function () {  
        $("#display nav a").removeClass('active');
        $(this).addClass('active');
        templates[$(this).attr('data-partialview')].preSwitchTemplate(); 
    }); 

    var browserURL = "";
    $(window).on('popstate', function (event) {
        // This handles the browser back and forward button.
        // The if..else is because when clicking read more to view project details
        // it seemed to go in a recursive loop maxing out call stack.
        console.log("****************");
        if (browserURL === "") {
            browserURL = window.location.href;
            redirectOldURLs(window.location.href);
        }
        else {
            if (browserURL !== window.location.href) {
                browserURL = window.location.href;
                redirectOldURLs(window.location.href);
            }
        } 
    });
});