function projectRepeaterViewPageLoad() {
}

function projectRepeaterViewPreSwitchTemplate(url, key) {
    loadProjectItems(url, key);
}


function loadProjectItems(url, key) {
    var localValue = getLocalData(key); 
    if (localValue === "" || localValue === null) {
        $.get(url, function (data) { 
            getProjectItems(data, key);
            searchControlViewPreSwitchTemplate();
        });
    }
    else { 
        switchTemplate("projectsRepeaterPartial", localValue);
        searchControlViewPreSwitchTemplate();
    }    
}

function getProjectItems(data, key) {
    var allProjectData = { projects: [] };
    for (var i = 0; i < Object.keys(data).length; i++) {
        allProjectData.projects.push(data[Object.keys(data)[i]]); 
    }
    allProjectData.projects = allProjectData.projects.reverse();
    var newdate = new Date();
    newdate.setDate(newdate.getDate() + 3 );
    allProjectData.expiresOn = newdate.getTime();
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
    var localdata = window.localStorage.getItem(dataKey);
    if (localdata === "" || localdata === null) {
        return "";
    }
    localdata = JSON.parse(localdata);
    if (localdata.expiresOn < new Date().getTime()) {
        return "";
    }
    return localdata; //window.localStorage.getItem(dataKey);
}
 
 
 