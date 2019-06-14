var templates = {
    "introPartial": {
        "container": "#templateHolder",
        "contents": "partials/intro.html #introPartial",
        "view": "#view",
        "cache": "",
        "initView": function () {
            introViewPageLoad();
        }
    },
    "pinnedPartial": {
        "container": "#introPartialTemplateHolder",
        "contents": "partials/pinned.html #pinnedPartial",
        "view": "#introPartialView",
        "cache": "",
        "initView": function () {
            pinnedViewPageLoad();
        }
    },
    "portfolioPartial": {
        "container": "#templateHolder",
        "contents": "partials/portfolio.html #portfolioPartial",
        "view": "#view",
        "cache": "",
        "initView": function () { 
        }
    }
};

function getTemplateProperties(templateName) { 
    return templates[templateName];
}

var switchTemplateView = {};

function switchTemplate(templateName) {
    /// <summary>Method to switch to a different template.</summary>
    /// <param name="templateName" type="string">The template to be loaded.</param> 

    var templateProperties = getTemplateProperties(templateName);

    if (templateProperties.cache !== "" && templateProperties.cache !== null) {
        renderTemplateToView(templateProperties.view, templateProperties.cache, switchTemplateView);
        templateProperties.initView();
        return; 
    }

    $(templateProperties.container).load(templateProperties.contents, function () {
        templateProperties.cache = document.getElementById(templateName).innerHTML;
        renderTemplateToView(templateProperties.view, templateProperties.cache, switchTemplateView);
        templateProperties.initView();
    });
}

function renderTemplateToView(htmlViewID, htmlTemplate, jsData) {
    /// <summary>Helper method to cache partial views and not request again.</summary>

    var output = Mustache.render(htmlTemplate, jsData);
    $(htmlViewID).html(output);
}
 
 