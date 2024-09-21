// Import necessary Firebase SDK functions
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc, addDoc, collection, getDocs, query, where, } from "firebase/firestore"; // Firestore imports
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage"; // Firebase Storage functions

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
const storage = getStorage();
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



const uploadImage = async (imageFile) => {
    try {

        console.log(imageFile, "image fileeeeeeee");
        // Create a storage reference for the image
        const imageRef = ref(storage, `products/${imageFile.name}`);

        // Upload the image
        await uploadBytes(imageRef, imageFile);

        // Get the download URL
        const downloadURL = await getDownloadURL(imageRef);
        console.log(downloadURL, "download urlll");
        return downloadURL;
    } catch (error) {
        console.error("Error uploading image:", error);
        throw error;
    }
};

// Function to save a product to Firestore with an image
const saveProduct = async (product) => {
    try {
        // Check if there is an image to upload
        let imageURL = null;
        if (product.image) {
            imageURL = await uploadImage(product.image); // Upload image and get the URL
        }

        // Prepare product data including the image URL
        const productData = {
            ...product,
            image: imageURL // Store the image URL
        };

        // Add a new product document to the "products" collection
        await addDoc(collection(db, "products"), productData);
        console.log("Product saved successfully:", productData);
    } catch (error) {
        console.error("Error saving product:", error);
        throw error;
    }
};

const getAllProducts = async () => {
    try {
        // Reference to the 'products' collection in Firestore
        const querySnapshot = await getDocs(collection(db, "products"));

        // Create an array to store all the products
        const products = [];

        querySnapshot.forEach((doc) => {
            // Push each document's data into the products array
            products.push({ id: doc.id, ...doc.data() });
        });

        return products; // Return the list of all products
    } catch (error) {
        console.error("Error fetching all products:", error);
        throw error;
    }
};
const getProductsByType = async (type) => {
    try {
        // Reference to the 'products' collection with a query to filter by type
        const q = query(collection(db, "products"), where("type", "==", type));

        // Execute the query
        const querySnapshot = await getDocs(q);

        // Create an array to store the filtered products
        const products = [];

        querySnapshot.forEach((doc) => {
            // Push each document's data into the products array
            products.push({ id: doc.id, ...doc.data() });
        });

        return products; // Return the filtered products by type
    } catch (error) {
        console.error(`Error fetching products of type ${type}:`, error);
        throw error;
    }
};

export { saveProduct };
export { registerUser, loginUser, resetPassword, getCurrentUserData, isLoggedIn, getAllProducts, getProductsByType };
