// serviceworker registration

//hvis der er en  "serviceWorker" i browseren, så registeres(importes) js
//navigator = browser
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("serviceworker.js")

    .then (registration => {
        //console.log("SW registered");
        //console.log(registration)
    }).catch(error => {
        //console.log("SW register failed");
       // console.log(error)
    })

} else {
    //browser does not support service worker
    alert("PWA not supported");
    //you can do non PWA stuff here
}