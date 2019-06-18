function speakingViewPageLoad() {
    projectRepeaterViewPreSwitchTemplate("https://api.clydedsouza.net/all-speaking.json", "speakingPartial");
}


function speakingViewPreSwitchTemplate() {
    switchTemplate("speakingPartial", {});
}

