function searchControlViewPageLoad() {
    initSearchControls();
    console.log("searchControlViewPageLoad");
}


function searchControlViewPreSwitchTemplate() {
    switchTemplate("searchControlPartial", {});
}


function initSearchControls() {
    var searchControlParentView = $("#display nav a.active").attr('data-partialview');

    initMultiselect(searchControlParentView);

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

function initMultiselect(key) {
    console.log("initMultiselect");

    var localValue = getLocalData(key); 
    var projectItemsData = JSON.parse(localValue); 
    var multiselectCategories = [];

    for (var i = 0; i < projectItemsData.projects.length; i++) {

        if (key === "projectsPartial") {
            for (var j = 0; j < projectItemsData.projects[i].madeUsing.length; j++) {
                multiselectCategories.push( projectItemsData.projects[i].madeUsing[j] );
            } 
        }
        
    }
    console.log(multiselectCategories); 
    var uniqueNames = [];
    $.each(multiselectCategories, function (i, el) {
        if ($.inArray(el, uniqueNames) === -1) uniqueNames.push(el);
    });

    var multiselectCategoriesData = [];
    for (var k = 0; k < uniqueNames.length; k++) {
        multiselectCategoriesData.push({
            label: uniqueNames[k],
            title: uniqueNames[k],
            value: uniqueNames[k]
        });
    }
    console.log(multiselectCategoriesData);
    $('#example-dropUp').multiselect({
        enableFiltering: true,
        includeSelectAllOption: true,
        maxHeight: 400,
        dropUp: true
    });
    $('#example-getting-started').multiselect({
        maxHeight: 200
    });
    $('#example-getting-started').multiselect('dataprovider', multiselectCategoriesData);
}
