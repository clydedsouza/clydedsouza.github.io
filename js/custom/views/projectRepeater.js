function projectRepeaterViewPageLoad() {
}

function projectRepeaterViewPreSwitchTemplate(url, key) {
    loadProjectItems(url, key);
}


function loadProjectItems(url, key) {
    $.get(url, function (data) {
        getProjectItems(data, key);
    });
}

function getProjectItems(data, key) {
    var allProjectData = { projects: [] };
    for (var i = 0; i < Object.keys(data).length; i++) {
        allProjectData.projects.push(data[Object.keys(data)[i]]);
    }
    allProjectData.projects = allProjectData.projects.reverse();
    storeDataLocally(key, allProjectData); 
    switchTemplate("projectsRepeaterPartial", allProjectData);
}

function filterAndDisplayProjectItems(filter) {
    var localValue = getLocalData("key-projects"); 
    if (localValue === "" || localValue === null) {
        return;
    }

    var projectItemData = JSON.parse(localValue);
    if (filter.searchText !== "") {
        projectItemData = applySearchFilter(filter, projectItemData);
    }
     
    switchTemplate("projectsRepeaterPartial", projectItemData);
}

function applySearchFilter(searchFilter, projectItemData) {
    var allProjectData = { projects: [] };
    for (var i = 0; i < projectItemData.projects.length; i++) {

        if (projectItemData.projects[i].title.toLowerCase().indexOf(searchFilter.searchText) > -1) {
            allProjectData.projects.push(projectItemData.projects[i]);
        }
    }

    return allProjectData;
}


function storeDataLocally(dataKey, dataValue) {
    window.localStorage.setItem(dataKey, JSON.stringify(dataValue));
}

function getLocalData(dataKey) {
    return window.localStorage.getItem(dataKey);
}