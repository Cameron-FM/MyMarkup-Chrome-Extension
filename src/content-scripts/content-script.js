var stringToHTML = function (str) {
    var parser = new DOMParser();
    var doc = parser.parseFromString(str, 'text/html');
    return doc.body;
};

chrome.runtime.onMessage.addListener(function (pageEdits) {
    let url = window.location.href
    pageEdits.forEach((edit) => {
        if (edit.url === url) {
            let elementsToReplace = [...document.querySelectorAll(edit.el)]
            elementsToReplace.forEach((element) => {
                if (edit.replace != "") {
                    element.replaceWith(stringToHTML(edit.replace))
                }
            })
        }
    })
})