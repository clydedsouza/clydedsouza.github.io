function teachingViewPageLoad() {
    projectRepeaterViewPreSwitchTemplate("https://api.clydedsouza.net/all-teaching.json", "teachingPartial");
}


function teachingViewPreSwitchTemplate() {
    switchTemplate("teachingPartial", {});
}

