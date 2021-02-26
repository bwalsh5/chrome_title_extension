
document.getElementById('submit').addEventListener("click", function() {
    var name = document.getElementById("input").value;
    document.getElementById("demo").innerHTML = '<b>' + "uNamed It: " + '</b>' + name;

    chrome.tabs.query({url: '<all_urls>'}, tabs => {

        tabs.forEach(tab =>
            chrome.tabs.sendMessage(tab.id, { name } )
          );
     });


});
