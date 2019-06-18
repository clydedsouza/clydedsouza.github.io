function searchControlViewPageLoad() {
    initSearchControls();
}


function searchControlViewPreSwitchTemplate() {
    switchTemplate("searchControlPartial", {});
}


function initSearchControls() {
    var searchControlParentView = $("#display nav a.active").attr('data-partialview');
    var data = []; 
    for (var i = 0; i < 100; i++) {
        data.push({
            label: 'Option ' + (i + 1) ,
            title: 'Option ' + (i + 1) ,
            value: i + '-'
        });
    }
    $('#example-getting-started').multiselect('dataprovider', data);
    //$('#example-getting-started').multiselect();

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
