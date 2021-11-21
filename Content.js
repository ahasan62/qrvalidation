chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){

    console.log('HEYO! i am a content script!');
    console.log(message);

});