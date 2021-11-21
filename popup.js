window.addEventListener('load', function (evt) {
    chrome.extension.getBackgroundPage().chrome.tabs.executeScript(null, {
        file: 'test.js'
    });;
});


chrome.runtime.onMessage.addListener(function (message) {
    document.getElementById('linksList').innerHTML = message;
});