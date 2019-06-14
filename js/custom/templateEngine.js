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

function switchTemplate(templateName, templateData) {
    /// <summary>Method to switch to a different template.</summary>
    /// <param name="templateName" type="string">The template to be loaded.</param> 

    var template = getTemplateProperties(templateName);

    if (template.cache !== "" && template.cache !== null) {
        renderTemplateToView(template.view, template.cache, templateData);
        template.initView();
        return; 
    }

    $(template.container).load(template.contents, function () {
        template.cache = document.getElementById(templateName).innerHTML;
        renderTemplateToView(template.view, template.cache, templateData);
        template.initView();
    });
}

function renderTemplateToView(htmlViewID, htmlTemplate, jsData) {
    /// <summary>Helper method to cache partial views and not request again.</summary>

    var output = Mustache.render(htmlTemplate, jsData);
    $(htmlViewID).html(output);
}
 
 