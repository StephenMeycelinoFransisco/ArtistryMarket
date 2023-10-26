import React, { useEffect, useState } from "react";
import Input from "../components/Elements/Input/Input";
import Select from "../components/Elements/Input/Select";
import Textarea from "../components/Elements/Input/Textarea";
import Button from "../components/Elements/Button/Button";
import { useNavigate } from "react-router-dom";
import { auth, storage } from "../firebase";
import { serverTimestamp } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import DesignDataService from "../api/firebase.design.service";

export default function AddProduct() {
  const [data, setData] = useState({});
  const [perc, setPerc] = useState(null);
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const uploadFile = () => {
      if (file) {
        const storageRef = ref(storage, `/image/${file.name}`);

        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("Upload is " + progress + "% done");
            setPerc(progress);
            switch (snapshot.state) {
              case "paused":
                console.log("Upload is paused");
                break;
              case "running":
                console.log("Upload is running");
                break;
              default:
                break;
            }
          },
          (error) => {
            console.log(error);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              setData((prev) => ({ ...prev, img: downloadURL }));
            });
          }
        );
      }
    };
    uploadFile();
  }, [file]);

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
    tags: [],
    description: "",
  });

  const handleOnChange = (e) => {
    const { name, value, type } = e.target;

    if (type === "file") {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onload = (event) => {
        setFormData({
          ...formData,
          [name]: event.target.result,
        });
      };

      reader.readAsDataURL(file);
      setFile(file);
    } else if (name === "tags") {
      // Memisahkan tag kustom dengan tanda koma
      const tagsArray = value.split(",").map((tag) => tag.trim());
      setFormData({
        ...formData,
        [name]: tagsArray,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (auth.currentUser && data.img) {
        const userId = auth.currentUser.uid;

        const newDesign = {
          name: formData.name,
          price: formData.price,
          category: formData.category,
          tags: formData.tags,
          description: formData.description,
          img: data.img,
          userId: userId,
          timeStamp: serverTimestamp(),
        };

        // Panggil method addDesign dari DesignDataService
        await DesignDataService.addDesign(newDesign);

        alert("Data berhasil ditambahkan");
        navigate("/artist/:id");
      } else {
        console.log("User is not authenticated or image is not uploaded.");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <section className="grid lg:grid-cols-2 lg:gap-[40px] lg:items-center">
        <img
          className="w-full h-[232px] object-cover object-center lg:h-full"
          src={
            formData.image ||
            "https://i.pinimg.com/564x/16/3e/39/163e39beaa36d1f9a061b0f0c5669750.jpg"
          }
          alt="Current profile photo"
        />
        <div className="grid max-w-[17.5rem] mx-auto my-8 mb-2 gap-5 lg:max-w-sm lg:mx-0 xl:max-w-md">
          <h1 className="text-4xl font-semibold leading-10 capitalize xl:text-[51px]">
            Add Image to Your Store
          </h1>
          <p className="leading-6 xl:text-[22px]">
            Welcome! Enter your details and start creating, collecting, and
            selling NFTs.
          </p>
          <div className="grid my-5 mb-2">
            <form
              className="grid gap-4 xl:max-w-xs"
              onSubmit={(e) => handleSubmit(e)}
            >
              <div className="grid gap-5">
                <Input
                  type="file"
                  onChange={handleOnChange}
                  name="image"
                  placeholder="Name of Image"
                  className="block w-full text-sm text-gray rounded"
                />

                <Input
                  type="text"
                  onChange={handleOnChange}
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  className="rounded"
                />

                <Input
                  type="number"
                  onChange={handleOnChange}
                  name="price"
                  placeholder="Price"
                  value={formData.price}
                  className="rounded"
                />

                <Select
                  className="rounded"
                  name="category"
                  onChange={handleOnChange}
                  value={formData.category}
                  options={[
                    { value: "art", label: "Art" },
                    { value: "collectibles", label: "Collectibles" },
                    { value: "music", label: "Music" },
                    { value: "photography", label: "Photography" },
                    { value: "video", label: "Video" },
                    { value: "utility", label: "Utility" },
                    { value: "sport", label: "Sport" },
                    { value: "virtualWorlds", label: "Virtual Worlds" },
                  ]}
                />

                <Input
                  type="text"
                  name="tags"
                  placeholder="Add Tags (comma-separated)"
                  onChange={handleOnChange}
                  value={formData.tags}
                  className="rounded"
                />

                <Textarea
                  className="rounded"
                  name="description"
                  onChange={handleOnChange}
                  placeholder="Description for your image"
                  value={formData.description}
                />

                <Button
                  disable={perc !== null && perc < 100}
                  text={"Submit"}
                  type={"submit"}
                  className={"bg-purple py-3 rounded px-12"}
                />
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
