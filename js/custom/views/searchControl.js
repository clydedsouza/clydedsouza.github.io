function searchControlViewPageLoad() {
    initSearchControls(); 
}

function searchControlViewPreSwitchTemplate() {
    switchTemplate("searchControlPartial", {});
}

function initSearchControls() {
    var searchControlParentView = $("nav a.active").attr('data-partialview');

    $("#searchTxt").on("keyup", function () {
        var searchInput = $("#searchTxt").val(); 
        if (searchInput.length > 0 && searchInput.length < 3) {
            return;
        }
        var filter = {
            searchText: searchInput,
            showInactive: $("#includeInactive").is(":checked")
        };
        filterAndDisplayProjectItems(filter, searchControlParentView);
    });
    $("#includeInactive").change(function () { 
        var filter = {
            searchText: $("#searchTxt").val(),
            showInactive: this.checked
        }; 
        filterAndDisplayProjectItems(filter, searchControlParentView); 
    });
}

function getSearchMultiselectOptions(searchMultiselectSelectedOptions) {
    var selectedOptions = [];
    for (var so = 0; so < searchMultiselectSelectedOptions.length; so++) {
        selectedOptions.push(searchMultiselectSelectedOptions[so].label);
    }
    return selectedOptions;
}
