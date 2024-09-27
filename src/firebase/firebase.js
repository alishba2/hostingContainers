// Import necessary Firebase SDK functions
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc, addDoc, collection, getDocs, query, where, } from "firebase/firestore"; // Firestore imports
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage"; // Firebase Storage functions
import { deleteDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDbUPUQcn-Q7mRD0nKjQ4p7j2qwZSWilUo",
    authDomain: "crypto-598ab.firebaseapp.com",
    projectId: "crypto-598ab",
    storageBucket: "crypto-598ab.appspot.com",
    messagingSenderId: "405849273477",
    appId: "1:405849273477:web:b149735dc01b9fe77e65ec",
    measurementId: "G-PVZFVY0QJ9"
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


export const checkIfAdmin = async () => {
    try {
        const userData = await getCurrentUserData();
        return userData?.isAdmin || false; // Return true if isAdmin exists and is true, otherwise false
    } catch (error) {
        console.error("Error checking admin status:", error);
        return false; // In case of error, assume the user is not admin
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
const saveProduct = async (product) => {
    try {
        const imageURLs = [];

        // Check if there are images to upload
        if (product.images && product.images.length > 0) {
            for (const image of product.images) {
                const imageURL = await uploadImage(image); // Upload each image and get the URL
                imageURLs.push(imageURL); // Add URL to the array
            }
        }

        // Prepare product data including the array of image URLs
        const productData = {
            ...product,
            images: imageURLs // Store the array of image URLs
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

// Function to add a blog
async function addBlog(blogName, blogDescription, imageFile) {
    try {
        // Upload image to Firebase Storage
        const imageRef = ref(storage, `blogImages/${imageFile.name}`);
        const snapshot = await uploadBytes(imageRef, imageFile);
        const imageUrl = await getDownloadURL(snapshot.ref);

        // Create blog entry in Firestore
        const blogRef = await addDoc(collection(db, "blogs"), {
            blogName: blogName,
            blogDescription: blogDescription,
            imageUrl: imageUrl, // Storing the image URL
            createdAt: new Date() // Optional: Add a timestamp
        });

        console.log("Blog added with ID: ", blogRef.id);
    } catch (error) {
        console.error("Error adding blog: ", error);
    }
}
// Function to get all blogs
async function getBlogs() {
    try {
        const blogs = [];
        const querySnapshot = await getDocs(collection(db, "blogs"));

        querySnapshot.forEach((doc) => {
            blogs.push({
                id: doc.id,
                ...doc.data() // Get all the blog data (name, description, imageUrl)
            });
        });

        console.log("Blogs: ", blogs);
        return blogs;
    } catch (error) {
        console.error("Error getting blogs: ", error);
    }
}

const deleteProduct = async (productId) => {
    try {
        // Reference to the product document
        const productRef = doc(db, "products", productId);

        // Delete the document
        await deleteDoc(productRef);
        console.log(`Product with ID ${productId} deleted successfully.`);
    } catch (error) {
        console.error("Error deleting product:", error);
        throw error;
    }
};


// Function to delete a blog by ID
const deleteBlog = async (blogId) => {
    try {
        // Reference to the blog document
        const blogRef = doc(db, "blogs", blogId);

        // Delete the document
        await deleteDoc(blogRef);
        console.log(`Blog with ID ${blogId} deleted successfully.`);
    } catch (error) {
        console.error("Error deleting blog:", error);
        throw error;
    }
};
const saveContactForm = async (formData) => {
    try {
        const docRef = await addDoc(collection(db, "contacts"), formData);
        console.log("Contact form submitted successfully:", docRef.id);
    } catch (error) {
        console.error("Error submitting contact form:", error);
        throw error;
    }
};
export { saveProduct, deleteProduct, deleteBlog, saveContactForm };
export { registerUser, loginUser, resetPassword, getCurrentUserData, isLoggedIn, getAllProducts, getProductsByType, addBlog, getBlogs };
