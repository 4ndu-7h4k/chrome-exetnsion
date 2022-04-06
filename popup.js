// let changeColor = document.getElementById("changeColor");
// let saveActionButton = document.getElementById('saveActionId');
// console.log("buttion clicked");
// saveActionButton.addEventListener('click', async () =>  {
//     myArray = [];
//     console.log("buttion clicked");
//     chrome.tabs.query({"currentWindow": true},  //{"windowId": targetWindow.id, "index": tabPosition});
//     function (array_of_Tabs) {  //Tab tab
//         arrayLength = array_of_Tabs.length;
//         //alert(arrayLength);
//         for (var i = 0; i < arrayLength; i++) {
//             myArray.push(array_of_Tabs[i].url);
//         }
//         obj = JSON.parse(JSON.stringify(myArray));
//         document.write.getElementById("text").innerHTML = obj.stringify();
//     });
// });
let changeColor = document.getElementById("changeColor");
console.log("bfjdbfjhdsbjfds");
changeColor.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: setPageBackgroundColor,
    });
  });
  
  // The body of this function will be executed as a content script inside the
  // current page
  function setPageBackgroundColor() {
    chrome.storage.sync.get("color", ({ color }) => {
      document.body.style.backgroundColor = color;
    });
  }