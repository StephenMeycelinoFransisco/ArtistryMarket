import React, { useContext, useState } from "react";
import Input from "../components/Elements/Input/Input";
import { BiUser } from "react-icons/bi";
import { AiOutlineLock, AiOutlineMail } from "react-icons/ai";
import Button from "../components/Elements/Button/Button";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";
import { AuthContext } from "../context/AuthContext";
import { addDoc, collection } from "firebase/firestore";

export default function Register() {
  const [error, setError] = useState(false);

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const [errorMsg, setErrorMsg] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const handleChangeForm = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });

    validateRegister(e);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const { username, email, password } = form;

    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;

        // Set the displayName for the user
        await updateProfile(user, { displayName: username });

        // Now, user.displayName won't be null
        console.log("User's displayName:", user.displayName);

        // Generate a new document ID for the user data
        const docRef = await addDoc(collection(db, "users"), {
          uid: user.uid,
          username,
        });

        console.log("Document written with ID: ", docRef.id);

        dispatch({ type: "REGISTER", payload: user });
        navigate("/");
      })
      .catch((error) => {
        setError(true);
        console.error(error);
      });
  };

  const validateRegister = (e) => {
    const { name, value } = e.target;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (name === "email") {
      if (value === "") {
        setErrorMsg({
          ...errorMsg,
          email: "Email tidak boleh kosong.",
        });
      } else if (!emailRegex.test(value)) {
        setErrorMsg({
          ...errorMsg,
          email: "Masukkan email yang valid.",
        });
      } else {
        setErrorMsg({
          ...errorMsg,
          email: "",
        });
      }
    } else if (name === "password") {
      if (value === "") {
        setErrorMsg({
          ...errorMsg,
          password: "Password tidak boleh kosong.",
        });
      } else {
        setErrorMsg({
          ...errorMsg,
          password: "",
        });
      }
    } else if (name === "username") {
      if (value === "") {
        setErrorMsg({
          ...errorMsg,
          username: "Username tidak boleh kosong.",
        });
      } else {
        setErrorMsg({
          ...errorMsg,
          username: "",
        });
      }
    } else if (name === "confirmpassword") {
      if (value === "") {
        setErrorMsg({
          ...errorMsg,
          confirmpassword: "Konfirmasi password tidak boleh kosong.",
        });
      } else if (value !== form.password) {
        setErrorMsg({
          ...errorMsg,
          confirmpassword: "Konfirmasi password tidak cocok.",
        });
      } else {
        setErrorMsg({
          ...errorMsg,
          confirmpassword: "",
        });
      }
    }
  };

  return (
    <section className="grid lg:grid-cols-2 lg:gap-[40px] lg:items-center">
      <img
        className="w-full h-[232px] object-cover object-center lg:h-full"
        src="https://s3-alpha-sig.figma.com/img/0b34/7e10/5d353eae4c7b063b0da73eddb78c3a89?Expires=1698624000&Signature=OJ~87lnlkJ4h7P3fdL3oSETHYs16c6-w95WiSEu2Fl~b1X7zesIr8u4QduUjcorWjtemskHEc5c9PxzTf0z~7mUasRBNh0Lc9xQ9ixYpHo3nEprQNwvm8b4oT9uKn4yCltceNrYpT7GJvUxjKXCuiMgZj2I1OCpOT9j9L2GncsvLcIYEjCX1-~8fWovrp81-mKQ54sqoUeC7iYXvfcbuPGbil1am0nSo3KpgqttksY6XhF~ErD4fMIouFwGFZBGrdfbvaX3qJUPRBr2z1aQldCpliAirsFwjo8EIcDfTj~~Dc38DPdWGD-xW-lL-xXlrmLg6aupjwCmf77U-71R6RQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        alt=""
      />
      <div className="grid max-w-[17.5rem] mx-auto my-8 mb-2 gap-5 lg:max-w-sm lg:mx-0 xl:max-w-md">
        <h1 className="text-4xl font-semibold leading-10 capitalize xl:text-[51px]">
          Create account
        </h1>
        <p className="leading-6 xl:text-[22px]">
          Welcome! enter your details and start creating, collecting and selling
          NFTs.
        </p>
        <div className="grid my-5 mb-2">
          <form className="grid gap-4 xl:max-w-xs" onSubmit={handleSubmitForm}>
            <div className="grid gap-2">
              <Input
                icon={<BiUser color="#BDBDBD" />}
                type="text"
                onChange={handleChangeForm}
                name="username"
                placeholder="Username"
                value={form.username}
                className={"rounded-full h-11"}
              />
              {errorMsg.username && (
                <p className="text-red">{errorMsg.username}</p>
              )}
            </div>
            <div className="grid gap-2">
              <Input
                icon={<AiOutlineMail color="#BDBDBD" />}
                type="email"
                onChange={handleChangeForm}
                name="email"
                placeholder="Email Address"
                value={form.email}
                className={"rounded-full h-11"}
              />
              {errorMsg.email && <p className="text-red">{errorMsg.email}</p>}
            </div>
            <div className="grid gap-2">
              <Input
                icon={<AiOutlineLock color="#BDBDBD" />}
                type="password"
                onChange={handleChangeForm}
                name="password"
                placeholder="Password"
                value={form.password}
                className={"rounded-full h-11"}
              />
              {errorMsg.password && (
                <p className="text-red">{errorMsg.password}</p>
              )}
            </div>
            <div className="grid gap-2">
              <Input
                icon={<AiOutlineLock color="#BDBDBD" />}
                type="password"
                onChange={handleChangeForm}
                name="confirmpassword"
                placeholder="Confirm Password"
                value={form.confirmpassword}
                className={"rounded-full h-11"}
              />
              {errorMsg.confirmpassword && (
                <p className="text-red">{errorMsg.confirmpassword}</p>
              )}
            </div>
            <Button
              text={"Create Account"}
              className={"bg-purple py-3 rounded-full px-12"}
            />
          </form>
        </div>
      </div>
    </section>
  );
}
