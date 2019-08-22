﻿function projectDetailsViewPageLoad() {
    var projectURL = $("#projectDetailsContainer").attr('data-project-url');
    loadProjectDetailsContent(projectURL);
}

function projectDetailsViewPreSwitchTemplate(url) { 
    if (url[url.length - 1] === "/") {
        url = url.substring(0, url.length - 1);
    }
    var projectID = url.substr(url.lastIndexOf('/') + 1);

    var findAndProcessPortfolioItems = function (portfolioItems) {
        for (var i = 0; i < portfolioItems.projects.length; i++) {
            var basename = portfolioItems.projects[i].basename.toString().replace(".pin", ""); 
            if (projectID === basename) { 
                redirectToProjectDetails(projectID, portfolioItems.projects[i].relativeURL);
                break;
            } 
        }
    };

    var localValue = getLocalData("projectDetailsPartial");
    if (localValue === "" || localValue === null) {
        $.get("https://api.clydedsouza.net/complete-portfolio.json", function (data) {
            var allProjectData = { projects: [] };
            for (var i = 0; i < Object.keys(data).length; i++) {
                allProjectData.projects.push(data[Object.keys(data)[i]]);
            }
            allProjectData.expiresOn = getExpiryTime();
            storeDataLocally("projectDetailsPartial", allProjectData); 
            findAndProcessPortfolioItems(allProjectData);
        });
    }
    else {
        findAndProcessPortfolioItems(localValue); 
    }
}

function loadProjectDetailsContent(url) {
    var localValue = getLocalData(url);
    var isLocalValueEmpty = localValue === "" || localValue === null;
    var projectDetailsLoadingInProgress = getLocalData("loadProjectDetailsContent");

    if (isLocalValueEmpty && !projectDetailsLoadingInProgress) {
        storeDataLocally("loadProjectDetailsContent", true); 
        $.get(url, function (data) { 
            var parsedYaml = yamlFront.loadFront(data);
            var parsedYamlHtml = marked(parsedYaml.__content);
            storeDataLocally(url, parsedYamlHtml); 
            $("#projectDetailsContainer").html(parsedYamlHtml);
            storeDataLocally("loadProjectDetailsContent", false); 
        });  
    }
    else {
        $("#projectDetailsContainer").html(localValue);
        storeDataLocally("loadProjectDetailsContent", false); 
    }
    
} 
 

