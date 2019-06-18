function teachingViewPageLoad() {
    projectRepeaterViewPreSwitchTemplate("https://api.clydedsouza.net/all-teaching.json", "key-teaching");
}


function teachingViewPreSwitchTemplate() {
    switchTemplate("teachingPartial", {});
}

