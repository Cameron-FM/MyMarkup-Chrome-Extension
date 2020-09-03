chrome.tabs.onUpdated.addListener(function (tabid, changeInfo) {
  if (changeInfo.status === "complete") {
    chrome.tabs.executeScript(tabid, { file: 'js/content-script.js' });
    chrome.storage.sync.get(['MyMarkup'], function (result) {
      chrome.tabs.sendMessage(tabid, result.MyMarkup)
    })
  }
});

chrome.tabs.onActivated.addListener(function (activeInfo) {
  chrome.tabs.executeScript(activeInfo.tabId, { file: 'js/content-script.js' });
  chrome.storage.sync.get(['MyMarkup'], function (result) {
    chrome.tabs.sendMessage(activeInfo.tabId, result.MyMarkup)
  })
})



