var done = false;
chrome.webNavigation.onCompleted.addListener( function () {
  if(!done)
  {
    chrome.windows.create({url: "chrome-extension://kddbcffhaihonajchhbcifhgkkdeidom/index.html", type:"popup"})
    done = true;
  }
}, {url: [{pathContains: 'testweb.html'}]})
