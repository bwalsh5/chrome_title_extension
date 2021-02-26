
chrome.runtime.onMessage.addListener(request => {

  if(request.name) {
   document.title = request.name
  
  }


})
