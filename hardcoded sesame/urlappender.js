window.onload = function() {
    var why
    function onGot(textfile)
    {
        var pie = textfile.textfile
        var blob = document.getElementById("blob")
        blob.href = "file:" + pie
    }

    function error(error)
    {
        console.log("sadge")
    }
    function  whyJS(whyyy)
    {
        why = whyyy
        onGot(why)
    }
    let textfile = browser.storage.sync.get("textfile")
    textfile.then(whyJS, error)
}
