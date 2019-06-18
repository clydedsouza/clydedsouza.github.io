function speakingViewPageLoad() {
    projectRepeaterViewPreSwitchTemplate("https://api.clydedsouza.net/all-speaking.json", "key-speaking");
}


function speakingViewPreSwitchTemplate() {
    switchTemplate("speakingPartial", {});
}

