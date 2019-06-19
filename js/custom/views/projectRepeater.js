function projectRepeaterViewPageLoad() {
}

function projectRepeaterViewPreSwitchTemplate(url, key) {
    loadProjectItems(url, key);
}


function loadProjectItems(url, key) {
    var localValue = getLocalData(key); 
    if (localValue === "" || localValue === null) {
        $.get(url, function (data) {
            console.log("$.get");
            getProjectItems(data, key);
            searchControlViewPreSwitchTemplate();
        });
    }
    else {
        var data = JSON.parse(localValue); 
        switchTemplate("projectsRepeaterPartial", data);
        searchControlViewPreSwitchTemplate();
    }    
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

function filterAndDisplayProjectItems(filter, searchControlParentView) {
    var localValue = getLocalData(searchControlParentView); 
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