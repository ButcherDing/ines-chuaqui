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
  setDoc,
  collection,
  writeBatch,
  // query,
  // getDocs,
  QueryDocumentSnapshot,
} from "firebase/firestore";

import { getStorage, ref, getDownloadURL } from "firebase/storage";

// import { Gallery } from "../../store/categories/categories.types";

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
const firebaseApp = initializeApp(firebaseConfig);
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

////////////////// Create users

export type ObjectToAdd = {
  title: string;
};

export const addCollectionAndDocuments = async <T extends ObjectToAdd>(
  collectionKey: string,
  objectsToAdd: T[]
): Promise<void> => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("done");
};

///////////////// Sign in methods

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const signInEmailPass = async (email: string, password: string) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

// export const getCategoriesAndDocuments = async (
//   collectionName: string
// ): Promise<Category[]> => {
//   const collectionRef = collection(db, collectionName);
//   const q = query(collectionRef);
//   const querySnapshot = await getDocs(q);
//   return querySnapshot.docs.map(
//     (docSnapshot) => docSnapshot.data() as Category
//   );
// };
// try to avoid casting like this, but kind of necessary when dealing with 3rd party APIs

export type AdditionalInformation = {
  displayName?: string;
};

export type UserData = {
  createdAt: Date;
  displayName: string;
  email: string;
};

export const createUserDocumentFromAuth = async (
  userAuth: User,
  additionalInformation = {} as AdditionalInformation
): Promise<void | QueryDocumentSnapshot<UserData>> => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
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
  return userSnapshot as QueryDocumentSnapshot<UserData>;
};
//// sign up
export const createAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};
//// sign out
export const signOutUser = async () => await signOut(auth);

// deprecated? No, look at our new getCurrentUser
export const onAuthStateChangedListener = (callback: NextOrObserver<User>) =>
  onAuthStateChanged(auth, callback);

export const getCurrentUser = (): Promise<User | null> => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe();
        resolve(userAuth);
      },
      reject
    );
  });
};
