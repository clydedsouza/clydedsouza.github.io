function booksViewPageLoad() {
    projectRepeaterViewPreSwitchTemplate("https://api.clydedsouza.net/all-teaching.json", "booksPartial");
    searchControlViewPreSwitchTemplate();
}


function booksViewPreSwitchTemplate() {
    switchTemplate("booksPartial", {});
}

