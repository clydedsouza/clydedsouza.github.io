function pinnedViewPageLoad() {
}

function pinnedViewPreSwitchTemplate() {
    loadPinnedItems();
}

function loadPinnedItems() {
    var localValue = getLocalData("pinnedPartial");
    if (localValue !== "" && localValue !== null) {
        switchTemplate("projectsRepeaterPartial", localValue);
        return; 
    }
    $.get("https://api.clydedsouza.net/all-pinned.json", function (data) {
        getProjectItems(data, "pinnedPartial");
    });  
} 
 

