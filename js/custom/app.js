var appVersion = 0.1;

// Start here
$(document).ready(function () {
    manageWebsiteRouting(window.location.href);
    loadRandomHighlight();
    showCookieNotice();

    $("nav a").on('click', function () {  
        activateNavigationMenuItem($(this).attr('data-partialview'));
        templates[$(this).attr('data-partialview')].preSwitchTemplate(); 
    }); 

    $(".cookie-notice a:first-child").on('click', function () {
        document.cookie = "cookie-accepted=true";
        $(".cookie-notice").hide();
    }); 

    var browserURL = "";
    $(window).on('popstate', function (event) {
        // This handles the browser back and forward button.
        // The if..else is because when clicking read more to view project details
        // it seemed to go in a recursive loop maxing out call stack.
        if (browserURL === "") {
            browserURL = window.location.href;
            manageWebsiteRouting(window.location.href);
        }
        else {
            if (browserURL !== window.location.href) {
                browserURL = window.location.href;
                manageWebsiteRouting(window.location.href);
            }
        } 
    });

    // Loading spinner...
    setTimeout(function () {
        document.getElementById("loading").classList.add("animated");
        document.getElementById("loading").classList.add("fadeOut");
        setTimeout(function () {
            document.getElementById("loading").classList.remove("animated");
            document.getElementById("loading").classList.remove("fadeOut");
            document.getElementById("loading").style.display = "none";
        }, 800);
    }, 1500);
});

function showCookieNotice() {
    var cookieAccepted = getCookie("cookie-accepted");
    if (!cookieAccepted) return false;
    $(".cookie-notice").hide();
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}