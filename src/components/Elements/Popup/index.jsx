import React, { useState, useEffect } from "react";
import { auth, storage } from "../../../config/firebase.config";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import DesignDataService from "../../../services/firebase.design";
import { Timestamp } from "firebase/firestore";

export default function Popup({ closePopup, addDesign, editDesign, getDesign }) {
  const [file, setFile] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [tags, setTags] = useState([]); // State untuk menyimpan nilai "tags"

  useEffect(() => {
    if (editDesign) {
      setName(editDesign.name);
      setDescription(editDesign.description);
      setPrice(editDesign.price);
      setTags(editDesign.tags || []);
    }
  }, [editDesign]);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];

    if (file) {
      const storageRef = ref(storage, "design/" + file.name);

      try {
        await uploadBytes(storageRef, file);
        const downloadURL = await getDownloadURL(storageRef);
        setFile(downloadURL);
      } catch (error) {
        console.error("Error uploading avatar: ", error);
      }
    }
  };

  const handleTagChange = (e) => {
    const { value } = e.target;
    // Perbarui state "tags" berdasarkan nilai checkbox yang dipilih/dicentang
    if (tags.includes(value)) {
      setTags(tags.filter(tag => tag !== value));
    } else {
      setTags([...tags, value]);
    }
  };

  const handleSubmit = async () => {
    if (!file || !name || !description || !price) {
      alert("Harap isi semua bidang.");
      return;
    }

    const currentTimeStamp = Timestamp.now();
    const user = auth.currentUser;
    const userId = user ? user.uid : null;

    if (!userId) {
      alert("User is not authenticated. Unable to add/update design.");
      return;
    }

    const designData = {
      userId: userId,
      name: name,
      description: description,
      price: price,
      tags: tags,
      file: file,
      timestamp: currentTimeStamp,
    };

    try {
      if (editDesign) {
        await DesignDataService.updateDesign(editDesign.id, designData);
        alert("Data design berhasil diperbarui.");
      } else {
        await addDesign(designData);
        alert("Data design berhasil disimpan.");
      }
      closePopup();
      getDesign();
    } catch (error) {
      console.error("Error adding/updating design: ", error);
    }
  };

  return (
    <div className="p-8 rounded">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        {editDesign ? "Edit Design" : "New Design"}
      </h2>
      <div className="grid bg-white mb-4 p-2 rounded">
        <input
          type="file"
          onChange={handleFileChange}
          className="file:bg-black file:text-white text-black-secondary"
        />
      </div>
      <input
        type="text"
        placeholder="Design Name..."
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border p-2 rounded mb-4 text-black-secondary"
      />
      <input
        type="text"
        placeholder="Tags (comma-separated)..."
        value={tags.join(", ")}
        onChange={(e) => {
          const tagsArray = e.target.value.split(",").map((tag) => tag.trim());
          setTags(tagsArray);
        }}
        className="w-full border p-2 rounded mb-4 text-black-secondary"
      />
      <input
        type="text"
        placeholder="Description.."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full border p-2 rounded mb-4 text-black-secondary"
      />
      <input
        type="number"
        placeholder="Price..."
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="w-full border p-2 rounded mb-4 text-black-secondary"
      />
       
      <button
        onClick={handleSubmit}
        className="font-semibold py-2 px-4 rounded bg-black text-white text-center"
      >
        {editDesign ? "Update" : "Submit"}
      </button>
    </div>
  );
}
