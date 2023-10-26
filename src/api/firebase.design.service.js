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

const DesignCollectionRef = collection(db, 'designs');
 class DesignDataService {

  // add design
  addDesign = (newDesign) => {
    return addDoc(DesignCollectionRef, newDesign);
  }

  // update design 
  updateDesign = (id, updateDesign) => {
    const designDoc = doc(db, 'designs', id);
    return updateDoc(designDoc, updateDesign);
  } 

  // delete design
  deleteDesign = (id) => {
    const designDoc = doc(db, 'designs', id);
    return deleteDoc(designDoc)
  }

  // Get all data design
  getAllDesign = () => {
    return getDocs(DesignCollectionRef)
  }
  
  // Get design by ID
  getDesign = (id) => {
    const designDoc = doc(db, 'designs', id);
    return getDoc(designDoc);
  }
  
 }

 export default new DesignDataService()