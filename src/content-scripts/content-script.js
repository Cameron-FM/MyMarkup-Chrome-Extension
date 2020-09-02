
console.log('Content-Script Loaded')
chrome.runtime.onMessage.addListener(function (msg) {
    console.log(msg)
})