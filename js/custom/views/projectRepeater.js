function projectRepeaterViewPageLoad() {
}

function projectRepeaterViewPreSwitchTemplate() {
    loadProjectItems();
}


function loadProjectItems() {
    $.get("https://api.clydedsouza.net/all-projects.json", function (data) {
        getProjectItems(data);
    });
}

function getProjectItems(data) {
    var allProjectData = { projects: [] };
    for (var i = 0; i < Object.keys(data).length; i++) {
        allProjectData.projects.push(data[Object.keys(data)[i]]);
    }
    allProjectData.projects = allProjectData.projects.reverse();
    switchTemplate("projectsRepeaterPartial", allProjectData);
}
