﻿function searchControlViewPageLoad() {
    initSearchControls();
}


function searchControlViewPreSwitchTemplate() {
    switchTemplate("searchControlPartial", {});
}


function initSearchControls() {
    var searchControlParentView = $("#display nav a.active").attr('data-partialview');

    $("#searchBtn").on("click", function () {
        var filter = { searchText: $("#searchTxt").val() };
        filterAndDisplayProjectItems(filter, searchControlParentView);
    });
    $("#searchTxt").on("keyup", function () {
        var searchInput = $("#searchTxt").val();
        if (searchInput.length > 0 && searchInput.length < 3) {
            return;
        }
        var filter = { searchText: searchInput };
        filterAndDisplayProjectItems(filter, searchControlParentView);
    });
}
