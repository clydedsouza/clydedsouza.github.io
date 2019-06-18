function projectViewPageLoad() {
    projectRepeaterViewPreSwitchTemplate("https://api.clydedsouza.net/all-projects.json", "projectsPartial");
    searchControlViewPreSwitchTemplate();
}


function projectViewPreSwitchTemplate() {
    switchTemplate("projectsPartial", {});
}

