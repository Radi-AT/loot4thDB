import { getFirestore } from "firebase/firestore/lite";
import { doc, collection, setDoc, addDoc, getDocs } from 'firebase/firestore/lite';
import { firebaseInstance } from '../main';

export const db = getFirestore(firebaseInstance);

export const setData = async () => {
  // Add a new document in collection "test"
  await setDoc(doc(db, "test", "LA hola"), {
    name: "Los Angeles",
    state: "CA",
    country: "EEUU"
  });
};

// async function setData() {
//   // Add a new document in collection "test"
//   await setDoc(doc(db, "test", "LA hola"), {
//     name: "Los Angeles",
//     state: "CA",
//     country: "EEUU"
//   });
// }

export const addData = async () => {
  // Add a new document with a generated id.
  await addDoc(collection(db, "test"), {
    name: "Tokyo",
    country: "Japan"
  });
};

// async function addData() {
//   // Add a new document with a generated id.
//   await addDoc(collection(db, "test"), {
//     name: "Tokyo",
//     country: "Japan"
//   });
// }

export function getCollection(collectionName) {
  return getDocs(collection(db, collectionName));
}
