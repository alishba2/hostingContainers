// Import necessary Firebase SDK functions
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore"; // Firestore imports

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

// Initialize Firebase Authentication and Firestore
const auth = getAuth(app);
const db = getFirestore(app); // Firestore initialization

// Register new user and store additional data in Firestore
const registerUser = async (email, password, fullName, phone) => {
    try {
        // Create user in Firebase Authentication
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Store additional data in Firestore
        const userDoc = {
            uid: user.uid,  // Store user's UID
            email: user.email,  // Store email
            fullName: fullName,  // Store full name
            phone: phone,  // Store phone number
            createdAt: new Date(),  // Store the registration timestamp
        };

        // Create a document for the user in Firestore under the 'users' collection
        await setDoc(doc(db, "users", user.uid), userDoc);
        console.log("User registration and Firestore doc creation successful:", user);

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

// Get Current User Data
const getCurrentUserData = async () => {
    try {
        const auth = getAuth();
        const user = auth.currentUser; // Get the currently logged-in user

        if (user) {
            // User is signed in, retrieve user document from Firestore
            const userDocRef = doc(db, "users", user.uid);
            const userDocSnapshot = await getDoc(userDocRef);

            if (userDocSnapshot.exists()) {
                // The document exists, return the user data
                const userData = userDocSnapshot.data();
                console.log("Current user data:", userData);
                return userData;
            } else {
                console.log("No user data found in Firestore");
                return null;
            }
        } else {
            console.log("No user is signed in");
            return null;
        }
    } catch (error) {
        console.error("Error fetching current user data:", error);
        throw error;
    }
};

// Check if a user is logged in
const isLoggedIn = () => {
    return new Promise((resolve) => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            unsubscribe();  // Stop listening after we get the result
            resolve(!!user);  // Resolve with true if user exists, otherwise false
        });
    });
};

export const logout = async () => {
    try {
        await auth.signOut();
        console.log('User logged out successfully');
        // Optionally, you can redirect the user or update the UI
    } catch (error) {
        console.error('Error logging out:', error);
    }
}

export { registerUser, loginUser, resetPassword, getCurrentUserData, isLoggedIn };
