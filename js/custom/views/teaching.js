function teachingViewPageLoad() {
    projectRepeaterViewPreSwitchTemplate("https://api.clydedsouza.net/all-teaching.json", "teachingPartial");
    searchControlViewPreSwitchTemplate();
}


function teachingViewPreSwitchTemplate() {
    switchTemplate("teachingPartial", {});
}

