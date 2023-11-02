import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

// AUTH IMAGE
import authImage from "../../../assets/Images/auth.png";

// REACT ICONS
import { AiOutlineLock, AiOutlineMail } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

// FIREBASE SERVICES
import {
  auth,
  googleAuthProvider,
} from "../../../config/firebase.config";
import {
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleAuthProvider);
      navigate("/");
    } catch (e) {
      console.log("Error Message", e);
    }
  };

  const signInWithEmailPassword = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      navigate(`/artist/${user.uid}`);
    } catch (error) {
      setError(true);
      console.error("Error signing in: ", error);
    }
  };

  return (
    <>
      <section className="grid lg:grid-cols-2 lg:gap-10 xl:gap-16 lg:min-h-screen">
        <div className="">
          <img
            src={authImage}
            alt="bgAuth Image"
            className="h-[232px] w-full object-cover object-center lg:h-full"
          />
        </div>
        <div className="grid gap-8 my-8 max-w-[17.5rem] mx-auto lg:max-w-sm lg:mx-0 xl:my-24 lg:items-center lg:my-44 lg:gap-0">
          <div className="grid gap-5">
            <h1 className="text-4xl leading-10 lg:text-5xl lg:leading-6">
              Login Account
            </h1>
            <p className="text-base leading-6 lg:text-xl">
              Welcome! enter your details and start creating, collecting and
              selling NFTs.
            </p>
          </div>
          <form className="grid gap-8">
            <div className="grid gap-8">
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
            {error && <p className="text-red-500">{error}</p>}
            <div className="grid gap-5">
              <button
                onClick={signInWithEmailPassword}
                type="button"
                className="flex h-[46px] px-12 justify-center gap-3 self-stretch bg-purple rounded-3xl items-center"
              >
                Login
              </button>
              <button
                onClick={signInWithGoogle}
                type="button"
                className="flex h-[46px] px-12 justify-center gap-3 self-stretch bg-transparent border rounded items-center"
              >
                <FcGoogle /> Google
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
