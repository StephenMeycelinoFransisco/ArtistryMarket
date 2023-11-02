import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";
import { db } from "../config/firebase.config";

const UserCollectionRef = collection(db, 'users');
 class UserDataService {

  // add design
  addUser = (newUser) => {
    return addDoc(UserCollectionRef, newUser);
  }

  // update design 
  updateUser = (id, updateUser) => {
    const userDoc = doc(db, 'users', id);
    return updateDoc(userDoc, updateUser);
  } 

  // delete design
  deleteUser = (id) => {
    const userDoc = doc(db, 'users', id);
    return deleteDoc(userDoc)
  }

  // Get all data design
  getAllUser = () => {
    return getDocs(UserCollectionRef)
  }
  // Get design by ID
  getUser = (id) => {
    const userDoc = doc(db, 'users', id);
    return getDoc(userDoc)
  }

   // Mengikuti pengguna
   followUser = (followingId, followerId) => {
    const followerDoc = doc(db, "users", followerId);
    const followingDoc = doc(db, "users", followingId);

    // Tambahkan pengguna yang diikuti ke daftar following pengguna follower
    return Promise.all([
      updateDoc(followerDoc, {
        following: arrayUnion(followingId),
      }),
      updateDoc(followingDoc, {
        followers: arrayUnion(followerId),
      }),
    ]);
  }

  // Berhenti mengikuti pengguna
  unfollowUser = (followingId, followerId) => {
    const followerDoc = doc(db, "users", followerId);
    const followingDoc = doc(db, "users", followingId);

    // Hapus pengguna yang diikuti dari daftar following pengguna follower
    return Promise.all([
      updateDoc(followerDoc, {
        following: arrayRemove(followingId),
      }),
      updateDoc(followingDoc, {
        followers: arrayRemove(followerId),
      }),
    ]);
  }
 }

 export default new UserDataService()