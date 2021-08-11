import './Login.css';
import { useContext, useState } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import {
    handleFbSignIn,
    handleGoogleSignIn,
    handleSignOut,
    initializedLoginFramework,
    signInUserWithEmailAndPassword,
    signUpUserWithEmailAndPassword
} from './LoginManager';
import { Container } from '@material-ui/core';


function Login() {
    const [newUser, setNewUser] = useState(false); // For the toggle user form

    // Main user state
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        photo: ''
    });
    // const { name, email, password, photo } = user;


    // Initialized Login Framework func call and
    // SignIn and SignOut with firebase popUP
    // ----------------------------------------------
    initializedLoginFramework();
    // ...


    // For Context APIs & Protected com
    // -----------------------------------
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    let history = useHistory();
    let location = useLocation();
    // let auth = useAuth();
    let { from } = location.state || { from: { pathname: "/" } };


    // SignUp, SignIn & SignOut Response || Google && Facebook
    const handleResponse = (res, redirect) => {
        setUser(res);
        setLoggedInUser(res); // Context APIs
        if (redirect) {
            history.replace(from); // Context APIs
        }
    }

    // Google Sign In func
    // ------------------------
    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(res => {
                handleResponse(res, true);
            })
    }

    // Facebook Sign In func
    // --------------------------
    const facebookSignIn = () => {
        handleFbSignIn()
            .then(res => {
                handleResponse(res, true);
                // setUser(res);
                // setLoggedInUser(res);
                // history.replace(from);
                // console.log('Login data', res);
            })
    }

    // Google & Facebook Sign Out func
    // ------------------------------------
    const toggleSignOut = () => {
        handleSignOut()
            .then(res => {
                handleResponse(res, false);
            })
    }


    // Email and Password valided with regular-expretion
    // ------------------------------------------------------
    // onBlur email && pass valided func
    const handleBlur = (e) => {
        let isFieldValid = true;
        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value); // string + @ + string + . + string === spsimon@gmail.com
        }
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 8; // any keyword > 8;
            const passwordHasNumber = /\d{1}/.test(e.target.value); // Number (0-9);
            isFieldValid = isPasswordValid && passwordHasNumber; // keyword + number === pass52word (mixed);
        }
        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }


    // For the sign-in OR sign-up/toggle form func
    // ------------------------------------------------
    // Sign-up to create new user func
    const handleSubmit = (e) => {
        if (newUser && user.email && user.password) {
            signUpUserWithEmailAndPassword(user.name, user.email, user.password)
                .then(res => {
                    handleResponse(res, true);
                })
        }

        // Sign-in to older user func
        if (!newUser && user.email && user.password) {
            signInUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    handleResponse(res, true);
                })
        }

        e.preventDefault(); // Stop the reload page
    }

    return (
        <Container className="main-log">
            <h1>Login your google account</h1>
            <button onClick={googleSignIn}>Sign In Google</button>
        </Container>
    );
}

export default Login;
