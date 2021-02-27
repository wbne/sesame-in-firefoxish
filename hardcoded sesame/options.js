function saveOptions(e) {
  e.preventDefault();
  browser.storage.sync.set({
    textfile: document.querySelector("#owo").value
  });
}

function restoreOptions() {
  function setCurrentText(result) {
    document.querySelector("#owo").value = result.textfile || "owo"
  }

  function onError(error) {
    console.log(`Error: ${error}`);
  }

  let getting = browser.storage.sync.get("textfile");
  getting.then(setCurrentText, onError);
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("body").addEventListener("submit", saveOptions);
