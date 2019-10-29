chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.create({ url: 'https://adamoore.net/cookiesExp.html' });
});
