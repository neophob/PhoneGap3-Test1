//The Revealing Module Pattern
var app = (function(){
    // Application Constructor
    function initialize() {
        bindEvents();
    }

    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    function bindEvents() {
        document.addEventListener('deviceready', onDeviceReady, false);
    }

    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    function onDeviceReady() {
        receivedEvent('deviceready');
    }

    function createMyUser(aNumber) {
        //hint, we're not looking for existing users, but create a new user each time!
        var myContact = navigator.contacts.create({"displayName": "Test User"+aNumber});
        myContact.note = "This contact has a note.";
        console.log("try to save user");
        myContact.save(onContactSaveSuccess, onContactSaveError);
        console.log("The contact, " + myContact.displayName + ", note: " + myContact.note);
    }

    // Update DOM on a Received Event
    function receivedEvent(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');
        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }

    function onContactSaveSuccess(contact) {
        showAlertMsg("Successfully saved user: "+contact.displayName);
    }

    function onContactSaveError(contact) {
	   showAlertMsg("Save Failed");
    }


return {
  initialize:initialize,
  createMyUser:createMyUser
}

}());

