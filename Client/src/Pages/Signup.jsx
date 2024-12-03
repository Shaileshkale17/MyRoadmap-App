import React, { useState } from "react";
import InputBox from "../components/InputBox";
import Heading from "../components/heading";
import Button from "../components/Button";
import GoogleButton from "react-google-button";
import { Link } from "react-router-dom";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [confirm_password, setConfirm_password] = useState("");
  const Submit = (e) => {
    e.preventDefault();
    console.log(`Login${email}and ${Password}`);
  };
  return (
    <div className="w-full h-screen text-center bg-bodyColor flex justify-center items-center">
      <div className="bg-[#C6DCE4]  md:h-[33rem] md:w-[27rem] max-h-full max-w-full rounded-md border border-solid border-black  md:px-0 px-5">
        <Heading Title="Sign up" font="font-medium" />
        <form
          onSubmit={Submit}
          className="flex flex-col justify-center items-center  gap-5">
          <InputBox
            label="Email ID"
            id="email"
            type="Email"
            key="email"
            setInputValue={setEmail}
            InputValue={email}
            width=" md:w-[21rem] w-[15rem]"
          />
          <InputBox
            label="Password"
            id="password"
            type="password"
            key="password"
            setInputValue={setPassword}
            InputValue={Password}
            width=" md:w-[21rem] w-[15rem]"
          />
          <InputBox
            label="Confirm Password"
            id="confirm_password"
            type="password"
            key="confirm_password"
            setInputValue={setConfirm_password}
            InputValue={confirm_password}
            width=" md:w-[21rem] w-[15rem]"
          />
          <Button title="Sign up" type="submit" key="Signup" />
        </form>
        <div className="flex items-center justify-center  mt-7 mb-4  max-w-full">
          <GoogleButton
            onClick={() => {
              console.log("Google button clicked");
            }}
          />
        </div>
        <p className="text-[#007be5] md:pb-0 pb-2 ">
          <span className="text-[#00000099]">your account?</span>
          <Link to="/"> Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
