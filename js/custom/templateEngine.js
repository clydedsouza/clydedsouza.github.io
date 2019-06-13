﻿var templateNames = {
    intro: "introPartial",
    pinned: "pinnedPartial"
};

var templateCacheHolder = {
    intro: "",
    pinned: ""
};

var switchTemplateView = {};

function switchTemplate(templateName) {
    /// <summary>Method to switch to a different template.</summary>
    /// <param name="templateName" type="string">The template to be loaded.</param> 

    if (templateName === templateNames.intro) {
        if (templateCacheHolder.intro === "" || templateCacheHolder.intro === null) {
            $("#templateHolder").load("partials/intro.html #introPartial", function () { 
                templateCacheHolder.intro = document.getElementById(templateName).innerHTML;
                renderTemplateToView(templateCacheHolder.intro, switchTemplateView, "#view"); 
                postRenderViewInitialise(templateName);
            });
        }
        else {
            renderTemplateToView(templateCacheHolder.intro, switchTemplateView, "#view");  
            postRenderViewInitialise(templateName);
        }
    }
    else if (templateName === templateNames.pinned) {
        if (templateCacheHolder.pinned === "" || templateCacheHolder.pinned === null) {
            $("#introPartialTemplateHolder").load("partials/pinned.html #pinnedPartial", function () {
                templateCacheHolder.pinned = document.getElementById(templateName).innerHTML;
                renderTemplateToView(templateCacheHolder.pinned, switchTemplateView, "#introPartialView");
            });
            postRenderViewInitialise(templateName);
        }
        else {
            renderTemplateToView(templateCacheHolder.pinned, switchTemplateView, "#introPartialView");
            postRenderViewInitialise(templateName);
        }
    }
}

function renderTemplateToView(htmlTemplate, jsData, htmlContainerId) {
    /// <summary>Helper method to cache partial views and not request again.</summary>

    var output = Mustache.render(htmlTemplate, jsData);
    $(htmlContainerId).html(output);
}

function postRenderViewInitialise(templateName) {
    if (templateName === templateNames.intro) {
        introViewPageLoad();
    }
    else if (templateName === templateNames.pinned) {
        pinnedViewPageLoad();
    }
}

 