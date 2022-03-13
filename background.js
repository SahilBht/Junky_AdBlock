chrome.webRequest.onBeforeRequest.addListener(
    function(details){ return {cancel : true}},
    { urls: ["*://*.zedo.com/*", "*://*.grammarly.com/*", "*://business.linkedin.com/*", "*://ads.google.com/googleads/*", "*://*.googleadservices.com/*", "*://try.bravesoftware.com/*", "*://shutterstock.com/ad/stock-footage/*", "*://wix.com/*"]},
    ["blocking"]
)
