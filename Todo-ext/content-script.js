chrome.runtime.sendMessage(
   
    {message:"hello"},
    function (response){
        console.log(response.farewell)
    }
  )