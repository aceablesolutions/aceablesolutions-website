const firebaseConfig = {
    apiKey: "AIzaSyADDxxUvjCUR2N_VYnS0lDUx9KFjHmUJxU",
    authDomain: "aceablesolutions-website.firebaseapp.com",
    databaseURL: "https://aceablesolutions-website-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "aceablesolutions-website",
    storageBucket: "aceablesolutions-website.appspot.com",
    messagingSenderId: "188019109122",
    appId: "1:188019109122:web:ce90b2ee84a0d3f865a61b",
    measurementId: "G-JNL920YL13"
  };

  firebase.initializeApp(firebaseConfig);

  document.getElementById("contactForm").addEventListener("submit", submitForm);

  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var email = getElementVal("email");
    var message = getElementVal("message");
  
    saveMessage(name, email, message);

    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //  remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    // reset the form
    document.getElementById("contactForm").reset();
  }

  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };
  
  const saveMessage = (name, email, message) => {
    var database = firebase.database();
    const clientRef = database.ref('clients');

    clientRef.push().set({
    name: name,
    email: email,
    message: message
    });
  }