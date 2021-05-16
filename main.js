// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA4GH_6xC1PMaCw56NEWGQYaXn9TCIBhgc",
    authDomain: "vulpixskirn.firebaseapp.com",
    databaseURL: "https://vulpixskirn-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "vulpixskirn",
    storageBucket: "vulpixskirn.appspot.com",
    messagingSenderId: "336974063790",
    appId: "1:336974063790:web:07cf42269e64075aa1253f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
var database = firebase.database();
  
// Reference messages collection

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
    e.preventDefault();
    console.log("form submit")
    // Get values
    var name = getInputVal('name');
    var attendance = getRadioInputVal('attendance');
    var adults = getInputVal('adults');
    var children = getInputVal('children');

    // Save message
    saveMessage(name, attendance, adults, children);

    // Show alert

    // Clear form

}

// Function to get get form values
function getInputVal(id){
    return document.getElementById(id).value;
}

function getRadioInputVal(name) {
    return document.forms.attendanceForm.attendance.value
}

// Save message to firebase
function saveMessage(name, attendance, adults, children){
    console.log("name", name);
    console.log("attendance", attendance);
    console.log("adults", adults);
    console.log("children", children);

    var newMessageRef = database.ref('attendance/' + name).push();
    newMessageRef.set({
        name: name,
        attendance:attendance,
        adults:adults,
        children:children
    });
}


console.log("herro")