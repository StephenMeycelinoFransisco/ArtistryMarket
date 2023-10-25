import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export async function fetchDataFromFirestore() {
  try {
    const productsQuery = await getDocs(collection(db, "products"));
    const usersQuery = await getDocs(collection(db, "users"));

    const productsData = [];
    const usersData = [];

    productsQuery.forEach((productDoc) => {
      const productData = productDoc.data();
      productsData.push(productData);
    });

    usersQuery.forEach((userDoc) => {
      const userData = userDoc.data();
      usersData.push(userData);
    });

    const combinedData = productsData.map((product) => {
      const user = usersData.find((user) => user.uid === product.userId);
	  console.log('Menampilkan data user', user);
	  console.log('Menampilkan data user berdasarkan uid', user.uid);
	  console.log('Menampilkan data product berdasarkan userId', product.userId);
      return { ...product, user };
    });

    return combinedData;
  } catch (err) {
    console.log(err);
    return [];
  }
}
