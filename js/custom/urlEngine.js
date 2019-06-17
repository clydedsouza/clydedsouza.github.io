function containsPermanentRedirectURLs(url) {
    return containsOldProjectURL(url) || containsOldAboutURL(url);
}

function containsOldProjectURL(url) {
    return url.indexOf("#/projects") > 0;
}

function containsOldAboutURL(url) {
    return url.indexOf("#/") > 0;
}

function redirectOldURLs(url) {
    if (containsOldProjectURL(url)) {
        switchTemplate("projectsPartial", {});
    }
    else {
        switchTemplate("introPartial", {});
    }
}