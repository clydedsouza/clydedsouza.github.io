function projectDetailsViewPageLoad() {
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
            var newdate = new Date();
            newdate.setDate(newdate.getDate() + 3);
            allProjectData.expiresOn = newdate.getTime();
            storeDataLocally("projectDetailsPartial", allProjectData); 
            findAndProcessPortfolioItems(allProjectData);
        });
    }
    else {
        findAndProcessPortfolioItems(localValue); 
    }
}

function loadProjectDetailsContent(url) {
    console.log(url);
    $.get(url, function (data) {
        var parsedYaml = yamlFront.loadFront(data);
        var parsedYamlHtml = marked(parsedYaml.__content);
        $("#projectDetailsContainer").html(parsedYamlHtml);
    });  
} 
 

