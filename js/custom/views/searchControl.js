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
    var multiselectData = {categories : [], madeUsing: []};

    for (var i = 0; i < projectItemsData.projects.length; i++) {

        if (key === "projectsPartial") {
            for (var j = 0; j < projectItemsData.projects[i].madeUsing.length; j++) {
                multiselectData.madeUsing.push(projectItemsData.projects[i].madeUsing[j]); 
            } 
        }

        multiselectData.categories.push(projectItemsData.projects[i].category);
        
    } 

    var refinedMultiselectData = { categories: [], madeUsing: [] };
    
    $.each(multiselectData.categories, function (i, el) { 
        var targetData = refinedMultiselectData.categories.map(function (a) { return a.label; }); 
        if ($.inArray(el, targetData) === -1) {
            refinedMultiselectData.categories.push({
                label: el,
                title: el,
                value: el
            }); 
        }
    });     

    if (key === "projectsPartial") {
        $.each(multiselectData.madeUsing, function (i, el) {
            var targetData = refinedMultiselectData.madeUsing.map(function (a) { return a.label; });
            if ($.inArray(el, targetData) === -1) {
                refinedMultiselectData.madeUsing.push({
                    label: el,
                    title: el,
                    value: el
                });
            }
        });
        $('#example-getting-started').multiselect({
            enableFiltering: true,
            includeSelectAllOption: true,
            maxHeight: 200,
            nonSelectedText: 'Filter by tech',
            templates: {
                filter: '<li class="multiselect-item multiselect-filter"><div class="input-group"><span class="input-group-addon"><i class="mdi mdi-magnify material-icons"></i></span><input class="form-control multiselect-search" type="text"></div></li>',
                filterClearBtn: '<span class="input-group-btn"><button class="btn btn-default multiselect-clear-filter" type="button"><i class="mdi mdi-close material-icons"></i></button></span>'
            }
        });
        $('#example-getting-started').multiselect('dataprovider', refinedMultiselectData.madeUsing);
    }
    else {
        $('#example-getting-started').hide();
    }


    $('#categoriesMultiselect').multiselect({
        enableFiltering: true,
        includeSelectAllOption: true,
        maxHeight: 200,
        nonSelectedText: 'Filter by category',
        templates: {
            filter: '<li class="multiselect-item multiselect-filter"><div class="input-group"><span class="input-group-addon"><i class="mdi mdi-magnify material-icons"></i></span><input class="form-control multiselect-search" type="text"></div></li>',
            filterClearBtn: '<span class="input-group-btn"><button class="btn btn-default multiselect-clear-filter" type="button"><i class="mdi mdi-close material-icons"></i></button></span>'
        }
    });
    $('#categoriesMultiselect').multiselect('dataprovider', refinedMultiselectData.categories);
}
