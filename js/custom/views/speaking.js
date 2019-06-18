function speakingViewPageLoad() {
    projectRepeaterViewPreSwitchTemplate("https://api.clydedsouza.net/all-speaking.json", "speakingPartial");
    searchControlViewPreSwitchTemplate();
}


function speakingViewPreSwitchTemplate() {
    switchTemplate("speakingPartial", {});
}

