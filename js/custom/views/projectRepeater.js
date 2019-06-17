function projectRepeaterViewPageLoad() {
}

function projectRepeaterViewPreSwitchTemplate(url) {
    loadProjectItems(url);
}


function loadProjectItems(url) {
    $.get(url, function (data) {
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
