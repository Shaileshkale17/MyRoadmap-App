import React, { useState } from "react";
import InputBox from "../components/InputBox";
import Heading from "../components/heading";
import Button from "../components/Button";
import GoogleButton from "react-google-button";
import { Link } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const Submit = (e) => {
    e.preventDefault();
    console.log(`Login${email}and ${Password}`);
  };

  return (
    <div className="w-full h-screen text-center bg-bodyColor flex justify-center items-center ">
      <div className="bg-[#C6DCE4] 2xl:h-[43rem] 2xl:w-[43rem] md:h-[27rem] md:w-[27rem] max-h-full max-w-full rounded-md border border-solid border-[#000]  md:px-0 px-5">
        <Heading
          Title="Login"
          font="font-medium"
          style="2xl:text-7xl 2xl:m-10"
        />
        <form
          onSubmit={Submit}
          className="flex flex-col justify-center items-center 2xl:gap-12 gap-5 ">
          <InputBox
            label="Email ID"
            id="email"
            type="Email"
            key="email"
            setInputValue={setEmail}
            InputValue={email}
            width="2xl:w-[30rem] 2xl:h-[3.5rem] md:w-[21rem] w-[15rem]"
            lableStyle="2xl:text-3xl"
          />
          <InputBox
            label="Password"
            id="password"
            type="password"
            key="password"
            setInputValue={setPassword}
            InputValue={Password}
            lableStyle="2xl:text-3xl"
            width="2xl:w-[30rem] 2xl:h-[3.5rem] md:w-[21rem] w-[15rem]"
          />
          <Button
            title="Login"
            type="submit"
            key="Login"
            style="2xl:text-2xl 2xl:py-5 2xl:px-24 "
          />
        </form>
        <div className="flex items-center justify-center 2xl:mt-10 mt-7  mb-4 2xl:mb-10 max-w-full">
          <GoogleButton
            className="2xl:w-[30rem] 2xl:h-[3.5rem]"
            onClick={() => {
              console.log("Google button clicked");
            }}
          />
        </div>

        <p className="text-[#007be5] md:pb-0 pb-2 2xl:text-2xl">
          <span className="text-[#00000099]">No account?</span>
          <Link to="/signup"> Create one</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
