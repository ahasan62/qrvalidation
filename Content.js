chrome.extension.onMessage.addListener(
    function(request, sender, sendResponse) {
      if (request.text && (request.text == "getDOM")) {
        sendResponse({ dom: document.body.innerHTML });
      }
    }
  );