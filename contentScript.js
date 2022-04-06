chrome.runtime.sendMessage({name : "message"},(response) => {
    document.getElementById("secondary").innerHTML = "helooooooo";
});