function projectViewPageLoad() { 
    projectRepeaterViewPreSwitchTemplate("https://api.clydedsouza.net/all-projects.json", "projectsPartial");
}


function projectViewPreSwitchTemplate() {
    switchTemplate("projectsPartial", {});
}

