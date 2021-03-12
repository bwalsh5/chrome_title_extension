
var isOn = true;

document.getElementById('turnon').addEventListener("click", function() {
      // isOn.toggle();

      // if (isOn == true) {

    chrome.tabs.query({url: '<all_urls>'}, tabs => {

        tabs.forEach(tab =>
            chrome.tabs.sendMessage(tab.id, { isOn } )
          );
     });
// isOn = false;

// }
   });



   var isOff = true;

   document.getElementById('turnoff').addEventListener("click", function() {
         // isOn.toggle();

         // if (isOn == true) {

       chrome.tabs.query({url: '<all_urls>'}, tabs => {

           tabs.forEach(tab =>
               chrome.tabs.sendMessage(tab.id, { isOff } )
             );
        });
   // isOn = false;

   // }
      });
