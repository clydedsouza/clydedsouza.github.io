﻿function projectRepeaterViewPageLoad() {
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
    allProjectData.expiresOn = getExpiryTime();
    storeDataLocally(key, allProjectData); 
    switchTemplate("projectsRepeaterPartial", allProjectData);
}

function filterAndDisplayProjectItems(filter, searchControlParentView) {
    var projectItemData = getLocalData(searchControlParentView); 
    if (projectItemData === "" || projectItemData === null) {
        return;
    }

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

function redirectToProjectDetails(projectID, relativeURL) {
    var projectURL = doesProjectIDContainPin(projectID) ? projectID.replace(".pin", "") : projectID;
    var projectDetailsOutput = {
        data: "https://raw.githubusercontent.com/clydedsouza/clydedsouza-web-api/gh-pages" + relativeURL
    };
    switchTemplate("projectDetailsPartial",  projectDetailsOutput );
    window.location.href = "/#/portfolio/" + projectURL; 
}

function doesProjectIDContainPin(projectID) {
    return projectID.indexOf(".pin") > 0;
}