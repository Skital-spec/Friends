 function gotologin(){
    window.location.href = "/login.html";
  }
  
 document.getElementById("signup").onclick = function() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    // ...
  })
  .then(()=>window.location.href ="/home.html")
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });}
  function closesignup(){
    document.getElementById("overlay").style.display = "none";
  }
  function opensignup(){
    document.getElementById("overlay").style.display = "block"
  }
 
  document.getElementById("google").onclick = function (){
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    firebase.auth().languageCode = 'en';
// To apply the default browser preference instead of explicitly setting it.
// firebase.auth().useDeviceLanguage();
provider.setCustomParameters({
  'login_hint': 'user@example.com'
});
firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // IdP data available in result.additionalUserInfo.profile.
      // ...
  })
  .then(()=> window.location.href = "/home.html")

  .catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
    
  });
  }
