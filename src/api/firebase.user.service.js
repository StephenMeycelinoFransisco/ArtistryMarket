import { db } from "../firebase";
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const UserCollectionRef = collection(db, 'user');
 class UserDataService {

  // add design
  addUser = (newUser) => {
    return addDoc(UserCollectionRef, newUser);
  }

  // update design 
  updateUser = (id, updateUser) => {
    const userDoc = doc(db, 'user', id);
    return updateDoc(userDoc, updateUser);
  } 

  // delete design
  deleteUser = (id) => {
    const userDoc = doc(db, 'user', id);
    return deleteDoc(userDoc)
  }

  // Get all data design
  getAllUser = () => {
    return getDocs(UserCollectionRef)
  }
  // Get design by ID
  getUser = () => {
    const userDoc = doc(db, 'user', id);
    return getDoc(userDoc)
  }
 }

 export default new UserDataService()