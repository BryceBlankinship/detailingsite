import { getAuth, sendSignInLinkToEmail, isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth";
  
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBcM8TB1ybuwB4-KRHZdSokvzxZIr5nvEA",
    authDomain: "detailingwebsite.firebaseapp.com",
    databaseURL: "https://detailingwebsite-default-rtdb.firebaseio.com",
    projectId: "detailingwebsite",
    storageBucket: "detailingwebsite.appspot.com",
    messagingSenderId: "538423621463",
    appId: "1:538423621463:web:f3765191985987d711b012",
    measurementId: "G-PR9TDNKL9C"
  };


  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth =  firebase.auth();

var email = document.getElementById("email");

const actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be in the authorized domains list in the Firebase Console.
    url: 'https://detailingwebsite.firebaseapp.com/auth.html',
    // This must be true.
    handleCodeInApp: true,
    dynamicLinkDomain: 'example.page.link'
};

sendSignInLinkToEmail(auth, email, actionCodeSettings).then(() => {
      // The link was successfully sent. Inform the user.
      // Save the email locally so you don't need to ask the user for it again
      // if they open the link on the same device.
    window.localStorage.setItem('emailForSignIn', email);
      // ...
}).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
      // ...
});


// Confirm the link is a sign-in with email link.
const auth = getAuth();
if (isSignInWithEmailLink(auth, window.location.href)) {
  // Additional state parameters can also be passed via URL.
  // This can be used to continue the user's intended action before triggering
  // the sign-in operation.
  // Get the email if available. This should be available if the user completes
  // the flow on the same device where they started it.
  let email = window.localStorage.getItem('emailForSignIn');
  if (!email) {
    // User opened the link on a different device. To prevent session fixation
    // attacks, ask the user to provide the associated email again. For example:
    email = window.prompt('Please provide your email for confirmation');
  }
  // The client SDK will parse the code from the link for you.
  signInWithEmailLink(auth, email, window.location.href)
    .then((result) => {
      // Clear email from storage.
      window.localStorage.removeItem('emailForSignIn');
      // You can access the new user via result.user
      // Additional user info profile not available via:
      // result.additionalUserInfo.profile == null
      // You can check if the user is new or existing:
      // result.additionalUserInfo.isNewUser
    })
    .catch((error) => {
      // Some error occurred, you can inspect the code: error.code
      // Common errors could be invalid email and invalid or expired OTPs.
    });
}

  //active user to homepage
  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      var email = user.email;
      alert("Active user "+email);

    }else{
      alert("No Active user Found")
    }
  })