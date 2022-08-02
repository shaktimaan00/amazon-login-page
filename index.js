const firebaseConfig = {
    apiKey: "AIzaSyAJwDp2GepcBo13MxAE-nCPdxuz-LHExQw",
    authDomain: "login-page-4f95f.firebaseapp.com",
    projectId: "login-page-4f95f",
    storageBucket: "login-page-4f95f.appspot.com",
    messagingSenderId: "829861558322",
    appId: "1:829861558322:web:be4c61cc449fc2d9cea42b",
    measurementId: "G-3BSDKXGVH0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

function signUp(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);

    promise.catch(e => alert(e.message));
    alert('SignUp Successfully !!!')
}

firebase.auth().onAuthStateChanged((user) => {
    if(user){
        var email = user.email;
        alert("Active user " + email);
    }
    else{
        alert("NO Active user found");
    }
})