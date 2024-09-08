// Import the necessary functions from Firebase SDK
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAF24JRzJyPEdPjzq7ttcREm31SSzD9c7Q",
    authDomain: "hostingcontainers.firebaseapp.com",
    projectId: "hostingcontainers",
    storageBucket: "hostingcontainers.appspot.com",
    messagingSenderId: "819755646541",
    appId: "1:819755646541:web:dafc61512eb0fb284ae604",
    measurementId: "G-SV4V2ZD7EL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);

// Register new user function
const registerUser = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        // Signed in
        const user = userCredential.user;
        console.log("Registration successful:", user);
        return user;
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error during registration:", errorCode, errorMessage);
        throw error;
    }
};

// Login function
const loginUser = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        // Signed in
        const user = userCredential.user;
        console.log("Login successful:", user);
        return user;
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error during login:", errorCode, errorMessage);
        throw error;
    }
};

// Forgot Password function
const resetPassword = async (email) => {
    try {
        await sendPasswordResetEmail(auth, email);
        console.log("Password reset email sent to:", email);
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error during password reset:", errorCode, errorMessage);
        throw error;
    }
};


export { registerUser, loginUser, resetPassword };
