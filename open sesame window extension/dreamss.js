var done = false;
chrome.tabs.onUpdated.addListener( function () {
  if(!done)
  {
    chrome.windows.create({url: "chrome-extension://kddbcffhaihonajchhbcifhgkkdeidom/index.html", type:"popup"})
    done = true;
  }
})
//this is incase you wanna keep chrome open???? probably will remove it later
/*chrome.tabs.onRemoved.addListener( function () {
  done = false;
})*/
