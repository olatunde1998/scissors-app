"use client";

// import Image from "next/image";
// import Button from "../components/buttons/Button";
// import { auth } from "../components/firebase/firebase";
// import Input from "../components/input/input";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { BiHide, BiShow } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { auth, provider } from "../firebase/firebase";
import Input from "../input/input";

export default function RightContainer() {
  // const router = useRouter();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [show, setShow] = useState(false);
  const [confirmShow, setConfirmShow] = useState(false);

  const signUpWithEmailAndPassword = (e: any) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        // const name: string | null = userCredential.user.displayName;
        // const email = userCredential.user.email;
        // const profilePicture: string | null = userCredential.user.photoURL;

        // localStorage.setItem("name", name);
        // localStorage.setItem("email", email);
        // localStorage.setItem("profilePicture", profilePicture);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const signUpWithGoogleAuthentication = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);

        // const name: string | null = result.user.displayName;
        // const email = result.user.email;
        // const profilePicture: string | null = result.user.photoURL;

        // localStorage.setItem("name", name);
        // localStorage.setItem("email", email);
        // localStorage.setItem("profilePicture", profilePicture);

        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="px-4 text-[#1F4D36] w-full md:w-1/2  flex flex-col justify-center items-center">
      <p className="text-center text-[32px] mb-10 md:hidden ">Scissors App</p>
      <div className="px-4 w-full lg:w-[90%] xl:w-[60%]">
        <p className="text-center text-[32px] ">Welcome Back!</p>
        <p className="text-center">Signup an account</p>
        <form onSubmit={signUpWithEmailAndPassword}>
          <div className="mt-4">
            {/* {username} */}
            <Input
              inputIcon
              label="Username"
              type="text"
              placeholder="Enter your username"
              inputValue={username}
              onChangeValue={(e: any) => setUsername(e.target.value)}
            />
          </div>
          <div className="mt-4">
            {/* {email} */}
            <Input
              inputIcon
              label="Email"
              type="email"
              placeholder="Enter your email"
              inputValue={email}
              onChangeValue={(e: any) => setEmail(e.target.value)}
            />
          </div>

          <div className="mt-4 relative">
            <Input
              inputIcon
              label="Your Password"
              type={`${show ? "text" : "password"}`}
              placeholder="Enter your password"
              inputValue={password}
              onChangeValue={(e: any) => setPassword(e.target.value)}
            />
            <span
              className="absolute bottom-2 right-2 pt-4 flex items-center mr-[0.25rem] text-[#FF8447]"
              onClick={() => setShow(!show)}
            >
              <BiHide
                size={25}
                className={
                  show === false
                    ? "hidden items-center cursor-pointer"
                    : "text-gray-500"
                }
              />
              <BiShow
                size={25}
                className={
                  show === true
                    ? "hidden items-center cursor-pointer"
                    : "text-gray-500"
                }
              />
            </span>
          </div>

          <div className="mt-4 relative">
            <Input
              inputIcon
              label="Confirm Password"
              type={`${confirmShow ? "text" : "password"}`}
              placeholder="Confirm your password"
              inputValue={confirmPassword}
              onChangeValue={(e: any) => setConfirmPassword(e.target.value)}
            />
            <span
              className="absolute bottom-2 right-2 pt-4 flex items-center mr-[0.25rem] text-[#FF8447]"
              onClick={() => setConfirmShow(!confirmShow)}
            >
              <BiHide
                size={25}
                className={
                  confirmShow === false
                    ? "hidden items-center cursor-pointer"
                    : "text-gray-500"
                }
              />
              <BiShow
                size={25}
                className={
                  confirmShow === true
                    ? "hidden items-center cursor-pointer"
                    : "text-gray-500"
                }
              />
            </span>
          </div>

          <div className=" mt-4">
            {/* <Button
              className=" bg-[#1F4D36] text-[20px] text-white rounded-lg w-full hover:bg-white hover:text-[#1F4D36] hover:border-[#1F4D36] border-[.01rem]"
              btnText="Sign Up"
              btnIcon
            /> */}
            <button
              type="submit"
              className="py-3 bg-[#1F4D36] text-[20px] text-white rounded-lg w-full hover:bg-white hover:text-[#1F4D36] hover:border-[#1F4D36] border-[.01rem]"
            >
              {" "}
              Sign Up
            </button>
          </div>
        </form>

        {/* Google Authentication container */}
        <div
          className="mt-4  py-2 rounded-lg flex items-center justify-center cursor-pointer border-[#1F4D36] border-[.01rem]"
          onClick={signUpWithGoogleAuthentication}
        >
          <div>
            <img
              src="/assets/images/google.png"
              width={100}
              height={100}
              alt="google pics"
              className="w-[20px] h-[20px] "
            />
          </div>

          <p className="py-1 ml-4">Sign up with Google</p>
        </div>

        {/* Already have an account  */}
        <div className="mt-8">
          <p className="text-center ">
            Already have an account{" "}
            <Link to="/" className="ml-4">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
