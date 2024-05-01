import { collection, addDoc } from "firebase/firestore"
import db from '../firebase/init.js'

export async function createUser(userData) {
  const colRef = collection(db, 'users');
  try {
    const docRef = await addDoc(colRef, userData);
    console.log('Document was created with ID:', docRef.id);
    return docRef;
  } catch (error) {
    console.error('Error adding document:', error);
    throw error;  // Re-throw to handle it in the Vue component
  }
}