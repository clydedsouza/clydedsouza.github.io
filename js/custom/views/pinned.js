function pinnedViewPageLoad() {
}

function pinnedViewPreSwitchTemplate() {
    loadPinnedItems();
}

function loadPinnedItems() {
    $.get("https://api.clydedsouza.net/all-pinned.json", function (data) {
        getPinnedItems(data);
    });
}

function getPinnedItems(data) {
    var pinnedProjectData = {projects:[]};
    for (var i = 0; i < Object.keys(data).length; i++) {
        pinnedProjectData.projects.push(data[Object.keys(data)[i]]);
    }
    switchTemplate("pinnedPartial", pinnedProjectData);
}

