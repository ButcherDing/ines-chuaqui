import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  NextOrObserver,
  User,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  getDocs,
  setDoc,
  query,
  collection,
  writeBatch,
  QueryDocumentSnapshot,
} from "firebase/firestore";

import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { SERIES_DATA } from "../../assets/series-data/series-data";

//////////////////////////

//////////// CONFIG

const firebaseConfig = {
  apiKey: "AIzaSyA1Kii6LFuGn10JjliymmOZv3lgn3x4wlM",
  authDomain: "ines-chuaqui-v2.firebaseapp.com",
  projectId: "ines-chuaqui-v2",
  storageBucket: "ines-chuaqui-v2.appspot.com",
  messagingSenderId: "837872538964",
  appId: "1:837872538964:web:9b2303250749db190e24c1",
};

///////////////// Initialize Firebase
// const firebaseApp = initializeApp(firebaseConfig);
initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

//// services
export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
////////////////// Storage

// Create a reference with an initial file path and name

export const getFirebaseStorageUrl = async (path: string) => {
  return getDownloadURL(ref(storage, path))
    .then((url) => {
      return url;
    })
    .catch((err) => {
      console.log(err);
      // Handle any errors
    });
};

////////////////// Get Collection from DB

export const getDocumentFromFirebase = async (
  collectionName: string,
  documentName: string
) => {
  const docRef = doc(db, collectionName, documentName);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
  } else {
    // doc.data() will be undefined in this case
    console.error("No such document!");
  }
};

export type ObjectToAdd = {
  title: string;
};

// note: extends, not 'is'.
export const addCollectionAndDocuments = async <T extends ObjectToAdd>(
  collectionKey: string,
  objectsToAdd: T[]
): Promise<void> => {
  // where is the db, which collection? Apparently it creates one even if it doesn't exist.
  const collectionRef = collection(db, collectionKey);
  // how do you write a batch on my db?
  const batch = writeBatch(db);
  // this is why it's an array of objects, so that we can iterate through each of them.
  objectsToAdd.forEach((object) => {
    // give the object a name based on our 'title' property
    const docRef = doc(collectionRef, object.title.toLowerCase());
    // set this object in our array to our batch of operations
    batch.set(docRef, object);
  });
  // write our batch of collection objects to the db
  await batch.commit();
  console.log("batch committed");
};

//// example call
// addCollectionAndDocuments("series", SERIES_DATA);

export const getCollectionAndDocuments = async (collectionName: string) => {
  const collectionRef = collection(db, collectionName);
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((docSnapshot) => docSnapshot.data());
};

////////////////////////////////////////////////////////////////

// export const addDocumentToCollection = async (
//   collectionKey: string,
//   documentName: string,
//   document: object
// ): Promise<void> => {
//   await setDoc(doc(db, collectionKey, documentName), document);
//   console.log("document added");
// };

// addDocumentToCollection("series", "skulls", skullsJson);

///////////////// Sign in methods

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const signInEmailPass = async (email: string, password: string) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

////////////////// Create users

export type AdditionalInformation = {
  displayName?: string;
};

export type UserData = {
  createdAt: Date;
  displayName: string;
  email: string;
};

// smells bad
export const createUserDocumentFromAuth = async (
  userAuth: User,
  additionalInformation = {} as AdditionalInformation
): Promise<void | QueryDocumentSnapshot<UserData>> => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    // can add other properties below
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (err) {
      console.log("error creating user", err);
    }
  }
  // does this make sense here? what if no userSnapshot? error handling...
  return userSnapshot as QueryDocumentSnapshot<UserData>;
};
//// sign up
export const createAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return;

  const res = await createUserWithEmailAndPassword(auth, email, password);
  return res;
};
//// sign out
export const signOutUser = async () => {
  await signOut(auth);
};
// not sure how this works anymore
export const onAuthStateChangedListener = (callback: NextOrObserver<User>) =>
  onAuthStateChanged(auth, callback);

export const getCurrentUser = (): Promise<User | null> => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe();
        console.log(userAuth);
        resolve(userAuth);
      },
      reject
    );
  });
};
