chrome.tabs.onUpdated.addListener(function (tabid, changeInfo) {
  if (changeInfo.status === "complete") {
    chrome.tabs.executeScript(tabid, { file: 'js/content-script.js' });
    chrome.storage.sync.get(['MyMarkup'], function (result) {
      if (result.MyMarkup == undefined) {
        console.log("I am  not retrieved!!")
      }
      chrome.tabs.sendMessage(tabid, result.MyMarkup)
    })
  }
});



