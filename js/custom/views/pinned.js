function pinnedViewPageLoad() {
}

function loadPinnedProjects() {
    $.get("https://api.clydedsouza.net/all-pinned.json", function (data) {
        getPinnedProjects(data);
    });
}

function getPinnedProjects(data) {
    var pinnedProjectData = {projects:[]};
    for (var i = 0; i < Object.keys(data).length; i++) {
        pinnedProjectData.projects.push(data[Object.keys(data)[i]]);
    }
    switchTemplate("pinnedPartial", pinnedProjectData);
}

