import React, { useState } from "react";
import InputBox from "../components/InputBox";
import Heading from "../components/heading";
import Button from "../components/Button";
import GoogleButton from "react-google-button";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Submit = (e) => {
    e.preventDefault();
    if (!/\S+@\S+\.\S+/.test(email)) {
      console.error("Invalid email format");
      return;
    }
    if (password.length < 6) {
      console.error("Password must be at least 6 characters");
      return;
    }
    console.log(`Login ${email} and ${password}`);
  };

  return (
    <div className="w-full h-screen text-center bg-bodyColor flex justify-center items-center">
      <div className="bg-[#C6DCE4]  md:h-[27rem] md:w-[27rem] max-h-full max-w-full rounded-md border border-solid border-[#000] md:px-0 px-5">
        <Heading Title="Login" font="font-medium" />
        <form
          onSubmit={Submit}
          className="flex flex-col justify-center items-center  gap-5">
          <InputBox
            label="Email ID"
            id="email"
            type="Email"
            setInputValue={setEmail}
            InputValue={email}
            width=" md:w-[21rem] w-[15rem]"
          />
          <InputBox
            label="Password"
            id="password"
            type="password"
            setInputValue={setPassword}
            InputValue={password}
            width=" md:w-[21rem] w-[15rem]"
          />
          <Button title="Login" type="submit" />
        </form>
        <div className="flex items-center justify-center  mt-7 mb-4  max-w-full">
          <GoogleButton
            onClick={() => {
              console.log("Google button clicked");
            }}
          />
        </div>

        <p className="text-[#007be5] md:pb-0 pb-2 ">
          <span className="text-[#00000099]">No account?</span>
          <Link to="/signup"> Create one</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
