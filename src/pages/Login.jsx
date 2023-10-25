import React, { useContext, useState } from "react";
import Input from "../components/Elements/Input/Input";
import { AiOutlineLock, AiOutlineMail } from "react-icons/ai";
import Button from "../components/Elements/Button/Button";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errorMsg, setErrorMsg] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, form.email, form.password, { rememberMe: true })
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChangeForm = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });

    validateLogin(e);
  };

  const validateLogin = (e) => {
    const { name, value } = e.target;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

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
      } else if (!passwordRegex.test(value)) {
        setErrorMsg({
          ...errorMsg,
          password:
            "Password harus memiliki setidaknya 8 karakter, 1 karakter khusus, angka, dan huruf.",
        });
      } else {
        setErrorMsg({
          ...errorMsg,
          password: "",
        });
      }
    } 
  };

  return (
    <>
      <section className="grid lg:grid-cols-2 lg:gap-[40px] lg:items-center">
        <img
          className="w-full h-[232px] object-cover object-center lg:h-full"
          src="https://s3-alpha-sig.figma.com/img/0b34/7e10/5d353eae4c7b063b0da73eddb78c3a89?Expires=1698624000&Signature=OJ~87lnlkJ4h7P3fdL3oSETHYs16c6-w95WiSEu2Fl~b1X7zesIr8u4QduUjcorWjtemskHEc5c9PxzTf0z~7mUasRBNh0Lc9xQ9ixYpHo3nEprQNwvm8b4oT9uKn4yCltceNrYpT7GJvUxjKXCuiMgZj2I1OCpOT9j9L2GncsvLcIYEjCX1-~8fWovrp81-mKQ54sqoUeC7iYXvfcbuPGbil1am0nSo3KpgqttksY6XhF~ErD4fMIouFwGFZBGrdfbvaX3qJUPRBr2z1aQldCpliAirsFwjo8EIcDfTj~~Dc38DPdWGD-xW-lL-xXlrmLg6aupjwCmf77U-71R6RQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt=""
        />
        <div className="grid max-w-[17.5rem] mx-auto my-8 mb-2 gap-5 lg:max-w-sm lg:mx-0 xl:max-w-md">
          <h1 className="text-4xl font-semibold leading-10 capitalize xl:text-[51px]">
            Welcome to Artisty
          </h1>
          <p className="leading-6 xl:text-[22px]">
            Welcome! Enter your details and start creating, collecting, and
            selling NFTs.
          </p>
          <div className="grid my-5 mb-2">
            <form
              className="grid gap-4 xl:max-w-xs"
              onSubmit={(e)=> handleLogin(e)}
            >
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
              <Button
                text={"Login"}
                className={"bg-purple py-3 rounded-full px-12"}
              />
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
