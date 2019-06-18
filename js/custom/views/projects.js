function projectViewPageLoad() {
    projectRepeaterViewPreSwitchTemplate("https://api.clydedsouza.net/all-projects.json", "key-projects");
    searchControlViewPreSwitchTemplate();
}


function projectViewPreSwitchTemplate() {
    switchTemplate("projectsPartial", {});
}

