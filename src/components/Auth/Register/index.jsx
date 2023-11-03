import React, { useContext, useState } from "react";
import authImage from "../../../assets/Images/auth.png";
import { AiOutlineLock, AiOutlineMail, AiOutlineUser } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import {
  auth,
  googleAuthProvider,
  storage,
} from "../../../config/firebase.config";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import noUser from "../../../assets/Images/nouser.jpg";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db } from "../../../config/firebase.config";

export default function Register() {
  const [avatar, setAvatar] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const handleAvatarChange = async (e) => {
    const file = e.target.files[0];

    if (file) {
      const storageRef = ref(storage, "avatars/" + file.name);

      try {
        await uploadBytes(storageRef, file);
        const downloadURL = await getDownloadURL(storageRef);
        setAvatar(downloadURL);
      } catch (error) {
        console.error("Error uploading avatar: ", error);
      }
    }
  };

  const signIn = async () => {
    try {
      if (validateInputs()) {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;

        await updateProfile(user, { displayName: username, photoURL: avatar });

        const userId = user.uid;
        const userDocRef = doc(db, "users", userId);

        await setDoc(userDocRef, {
          uid: userId,
          username,
          avatar,
        });

        dispatch({ type: "REGISTER", payload: user });
        navigate(`/artist/${userId}`);
      }
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;

      if (errorCode === "auth/weak-password") {
        setError("The password is too weak.");
      } else if (errorCode === "auth/email-already-in-use") {
        setError("The email address is already in use.");
      } else {
        setError(errorMessage);
      }
      console.error("Error creating user: ", error);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleAuthProvider);
      navigate("/");
    } catch (e) {
      console.log("Error Message", e);
    }
  };

  const validateInputs = () => {
    if (!username || !email || !password) {
      setError("Please fill in all the fields.");
      return false;
    }

    if (password.length < 6) {
      setError("Password should be at least 6 characters long.");
      return false;
    }

    setError("");
    return true;
  };

  return (
    <>
      <section className="grid lg:grid-cols-2 lg:gap-10 xl:gap-16 lg:min-h-screen">
        <div className="">
          <img
            src={authImage}
            alt=""
            className="h-[232px] w-full object-cover object-center lg:h-full"
          />
        </div>
        <div className="grid gap-8 my-8 max-w-[17.5rem] mx-auto lg:max-w-sm lg:mx-0 lg:my-20 lg:gap-10 xl:my-24 ">
          <div className="grid gap-5">
            <h1 className="text-4xl leading-10 lg:text-5xl lg:leading-6">
              Create Account
            </h1>
            <p className="text-base leading-6 lg:text-xl">
              Welcome! enter your details and start creating, collecting and
              selling NFTs.
            </p>
          </div>
          <form className="grid gap-8">
            {error && <div className="text-white text-center bg-red/50 rounded p-2">{error}</div>}
            <div className="grid gap-4">
              <div className="grid">
                <img
                  src={avatar || noUser}
                  alt=""
                  className="rounded-full lg:w-56 lg:mx-auto object-cover object-center"
                />
              </div>
              <div className="grid bg-transparent items-center px-5 py-4 border rounded">
                <input
                  type="file"
                  className="file:bg-black-secondary shadow-md file:text-white"
                  onChange={handleAvatarChange}
                />
              </div>
              <div className="flex gap-3 bg-white items-center px-5 py-4 rounded-full text-black-secondary">
                <AiOutlineUser color="#2B2B2B" size={20} />
                <input
                  type="text"
                  placeholder="Username"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="flex gap-3 bg-white items-center px-5 py-4 rounded-full text-black-secondary">
                <AiOutlineMail color="#2B2B2B" size={20} />
                <input
                  type="email"
                  placeholder="Email Address"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex gap-3 bg-white items-center px-5 py-4 rounded-full text-black-secondary">
                <AiOutlineLock color="#2B2B2B" size={20} />
                <input
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="grid gap-5">
              <button
                onClick={signIn}
                type="button"
                className="flex h-[46px] px-12 justify-center gap-3 self-stretch bg-purple rounded-3xl items-center"
              >
                Create Account
              </button>
              <button
                onClick={signInWithGoogle}
                type="button"
                className="flex h-[46px] px-12 justify-center gap-3 self-stretch bg-transparent border rounded items-center"
              >
                <FcGoogle /> Google
              </button>
            </div>
            <div className="flex justify-center gap-3 text-center text-sm">
              Do you have an account?{" "}
              <a href="/login" className="text-gray">
                Login
              </a>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
