// Views

function isProjectsURL(url) {
    return url.indexOf("#/projects") > 0;
}

function isProjectDetailsURL(url) {
    return url.indexOf("#/projects/") > 0;
}

function isSpeakingURL(url) {
    return url.indexOf("#/speaking") > 0;
}

function isTeachingURL(url) {
    return url.indexOf("#/teaching") > 0;
}

function isAboutURL(url) {
    return url.indexOf("#/") > 0;
}

// Manage website routes

function redirectOldURLs(url) {
    
    if (isProjectDetailsURL(url)) {
        templates["projectDetailsPartial"].preSwitchTemplate();
    }
    else if (isProjectsURL(url)) {
        templates["projectsPartial"].preSwitchTemplate();
    }
    else if (isTeachingURL(url)) {
        templates["teachingPartial"].preSwitchTemplate(); 
    }
    else if (isSpeakingURL(url)) {
        templates["speakingPartial"].preSwitchTemplate(); 
    }
    else {
        templates["introPartial"].preSwitchTemplate();  
    }
}