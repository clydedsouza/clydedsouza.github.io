var templates = {
    "introPartial": {
        "container": "#templateHolder",
        "contents": "partials/intro.html #introPartial",
        "view": "#view",
        "cache": "",
        "initView": function () {
            introViewPageLoad();
        },
        "preSwitchTemplate": function () {
            introViewPreSwitchTemplate();
        }
    },
    "pinnedPartial": {
        "container": "#introPartialTemplateHolder",
        "contents": "partials/pinned.html #pinnedPartial",
        "view": "#introPartialView",
        "cache": "",
        "initView": function () {
            pinnedViewPageLoad();
        },
        "preSwitchTemplate": function () {
            //pinnedViewPreSwitchTemplate();
        }
    },
    "projectsPartial": {
        "container": "#templateHolder",
        "contents": "partials/projects.html #projectsPartial",
        "view": "#view",
        "cache": "",
        "initView": function () { 
            projectViewPageLoad();
        },
        "preSwitchTemplate": function () {
            projectViewPreSwitchTemplate();
        }
    },
    "projectsRepeaterPartial": {
        "container": "#projectsPartialTemplateHolder",
        "contents": "partials/projectsRepeater.html #projectsRepeaterPartial",
        "view": "#projectsPartialView",
        "cache": "",
        "initView": function () {
            projectRepeaterViewPageLoad();
        },
        "preSwitchTemplate": function () {
           // projectViewPreSwitchTemplate();
        }
    },
    "speakingPartial": {
        "container": "#templateHolder",
        "contents": "partials/speaking.html #speakingPartial",
        "view": "#view",
        "cache": "",
        "initView": function () {
            speakingViewPageLoad();
        },
        "preSwitchTemplate": function () {
            speakingViewPreSwitchTemplate();
        }
    },
};

function getTemplateProperties(templateName) { 
    return templates[templateName];
}

function renderTemplateToView(htmlViewID, htmlTemplate, jsData) {
    /// <summary>Helper method to cache partial views and not request again.</summary>

    var output = Mustache.render(htmlTemplate, jsData);
    $(htmlViewID).html(output);
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


 