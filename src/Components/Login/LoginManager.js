import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

export const initializedLoginFramework = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    } else {
        firebase.app(); // if already initialized, use that one
    }
}

// Google Sign In func
// ------------------------
export const handleGoogleSignIn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(googleProvider)
        .then(res => {
            const { photoURL, displayName, email } = res.user;
            const signedInUser = {
                isSignedIn: true,
                name: displayName,
                email: email,
                photo: photoURL,
                success: true
            };
            return signedInUser;
        })
        .catch(err => {
            console.log(err);
            console.log(err.message);
        })
}

// Facebook Sign In func
// --------------------------
export const handleFbSignIn = () => {
    const facebookProvider = new firebase.auth.FacebookAuthProvider();
    return firebase.auth().signInWithPopup(facebookProvider)
        .then(function (result) {
            var user = result.user;
            user.success = true;
            return user;
        })
        .catch(err => {
            console.log(err);
            console.log(err.message);
        })
}

// Google & Facebook Sign Out func
// ------------------------------------
export const handleSignOut = () => {
    return firebase.auth().signOut()
        .then(res => {
            const signedOutUser = {
                isSignedIn: false,
                name: '',
                email: '',
                photo: '',
                error: '',
                success: false
            }
            return signedOutUser;
        })
        .catch(err => {
            console.log(err);
        });
}


// For the sign-in OR sign-up/toggle form func
// ------------------------------------------------
// Sign-up to create new user func
export const signUpUserWithEmailAndPassword = (name, email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(res => {
            // console.log(res);
            const newUserInfo = res.user;
            newUserInfo.error = '';
            newUserInfo.success = true;
            updateUserProfile(name);
            return newUserInfo;
        })
        .catch((error) => {
            const newUserInfo = {};
            newUserInfo.error = error.message;
            newUserInfo.success = false;
            return newUserInfo;
        });
}

// Sign-in to older user func
export const signInUserWithEmailAndPassword = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
        .then(res => {
            // console.log(res);
            const newUserInfo = res.user;
            newUserInfo.error = '';
            newUserInfo.success = true;
            return newUserInfo;
            // setLoggedInUser(newUserInfo); // Logged In With Context APIs
            // history.replace(from); // for shipment page
            // console.log('SignIn user info', res.user);
        })
        .catch((error) => {
            const newUserInfo = {};
            newUserInfo.error = error.message;
            newUserInfo.success = false;
            return newUserInfo;
        });
}


// Update user profile/props func
// -----------------------------------
const updateUserProfile = name => {
    const user = firebase.auth().currentUser;

    user.updateProfile({
        displayName: name
    })
        .then(() => {
            console.log('User name updated successfully');
        })
        .catch((error) => {
            console.log(error);
        });
}