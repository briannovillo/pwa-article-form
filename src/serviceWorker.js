export function register() {
    window.addEventListener('load', function() {
      window.addEventListener('online', sendToAPI);
      window.addEventListener('offline', saveOnLocalStorage);
    });
}

function saveOnLocalStorage() {
  //Check to see if local storage is supported
  if(window.localStorage) {
    // If user is not connected to internet save data on local storage
    console.log("Saving on local storage");

    let fields = ["id", "title-main", "body"];
    fields.forEach(field => {
      document.getElementById(field).addEventListener("change", () => {
        window.localStorage.setItem(field, document.getElementById(field).value);
      });
    });

  } else {
    console.log("Local Storage not supported in browser");
  }
}

function sendToAPI() {
  // Send to api and refresh inputs
  if (document.getElementById("id").value && document.getElementById("title-main").value && document.getElementById("body").value) {
    console.log("Sending data to api");
    document.getElementById("submit").click();
  }
}
