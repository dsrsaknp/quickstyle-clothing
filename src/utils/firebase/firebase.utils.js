// initialises app here base don the config object.
import { initializeApp } from 'firebase/app';

import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    GoogleAuthProvider,
    onAuthStateChanged
} from 'firebase/auth';
import {
    getFirestore,
    doc,
    setDoc,
    getDoc,
    collection,
    writeBatch,
    query,
    getDocs
} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDWJ-V9X0BpO42Ot1-KNot-NmaeROqyHPw",
    authDomain: "quickstyle-clothing-db.firebaseapp.com",
    projectId: "quickstyle-clothing-db",
    storageBucket: "quickstyle-clothing-db.appspot.com",
    messagingSenderId: "1098801000543",
    appId: "1:1098801000543:web:fd6ccbcb7f5c10b9b3ebea"
};

// # Initialize Firebase app; Create an app instance
initializeApp(firebaseConfig);

// # Create a provider instance for auth service
const provider = new GoogleAuthProvider();   // provider instance needed for individual functionality 
provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();   // auth service
export const logInWithGooglePopup = () => signInWithPopup(auth, provider);
export const logInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

// # After getting authenticated using popup, the response/auth response is utilised to get user info. 
export const db = getFirestore();

// # Create collection and objects in db
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    console.log('inside firebase utils');
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    objectsToAdd.forEach(object => {
        console.log('object :', object);
        const docRef = doc(collectionRef, object.title.toLowerCase());
        batch.set(docRef, object);
    });

    await batch.commit();
    console.log('done');
}

// # Fetch documents from the given collection key/name
export const getDocumentsFromCollection = async () => {
    // get the collection reference
    const collectionRef = collection(db, 'categories');
    // generating query ()
    const q = query(collectionRef);    // returns an object
    // get collection snapshot
    const querySnapshot = await getDocs(q);
    // map the elements into an object and return
    const categoryMap = querySnapshot.docs.reduce((acc, queryDoc) => {
        const { title, items } = queryDoc.data();
        acc[title.toLowerCase()] = items;     // Hash table
        return acc;
    }, {})
    return categoryMap;
}


// # Create user doc in firestore db
export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
    if (!userAuth) return;

    // doc(): create a user doc object using this function
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log('[user doc object created locally]: userDocRef', userDocRef);

    // getDoc() : access the locally created doc using this function
    const userDocSnapshot = await getDoc(userDocRef);   // one snapshot
    console.log('[Access the locally created user doc object] : getDoc(userDocRef)', userDocSnapshot);

    // .exists() : check if the locally created doc exists in firebase db
    console.log('[Does doc already exists in firestore ?] : ', userDocSnapshot.exists());

    if (!userDocSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            // storing user doc in firestore db
            await setDoc(userDocRef, {
                createdAt,
                displayName,
                email,
                ...additionalInformation
            })
            console.log('[User doc now created in firestore] : ', userDocSnapshot.exists());
        } catch (error) {
            console.log('error while creating the user : ', error.message);
        }
    }
    return userDocRef;
}

// # Sign up using email and Password
export const createAuthUserWithEmailAndPassword = async (displayName, email) => {
    if (!displayName || !email) return;
    return await createUserWithEmailAndPassword(auth, displayName, email);
}

// # Sign in using email and Password
export const logInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password);
}

// # Sign out
export const signOutUser = async () => {
    return await signOut(auth);
};

// # Auth state change listener
export const onAuthStateChangeListener = async (callback) => {
    return await onAuthStateChanged(auth, callback);
};

// A LISTENER IS CREATED INTERNALLY BY onAuthStateChanges WITH THE THREE KEY METHODS
// return await onAuthStateChanged(auth, callback, errorCallback, completeCallback)
// {
//      next: callback,
//      error: errorCallback,
//      complete: completeCallback
// }