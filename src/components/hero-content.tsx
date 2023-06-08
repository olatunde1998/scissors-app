import React from "react";
import brushUnderlineImage from "../assets/images/brush.svg";
import ChainImage from "../assets/images/chain.svg";
import TriangleBlob from "../assets/images/triangle_blob.svg";
import { Link } from "react-router-dom";

function HeroContent() {
  return (
    <div className="flex justify-center items-center ">
      <div className="w-[90%] sm:w-[90%] md:w-[85%] mt-[100px] sm:mt-[100px]">
        <h1 className="text-[19px] sm:text-[30px] md:text-[30px] lg:text-5xl   text-center leading-[32px] sm:leading-[50px]  font-bold lines">
          Optimize Your Online Experience with Our Advanced
          <span className="relative text-[#005AE2] inline-block ml-[2px] mt-[10px]">
            URL Shortening
            <span
              className="sm:block absolute inset-0 after:bg-cover after:bg-no-repeat w-pseudo-width w-pseudo-width-sm top-[30px] sm:left-[10px] sm:top-[40px] z-50"
              style={{
                backgroundImage: `url(${brushUnderlineImage})`,
                backgroundRepeat: "no-repeat",
                height: "22px",
              }}
            ></span>
          </span>{" "}
          Solution
        </h1>

        <p className="pt-5 text-center lg:w-[50%] mt-[10px] sm:mt-[] sm:mx-20 lg:mx-auto text-[14px] sm:leading-[28px]">
          Personalize your shortened URLs to align with your brand identity.
          Utilize custom slugs, branded links, and domain customization options
          to reinforce your brand presence and enhance user engagement.
        </p>

        <div className="mt-[32px] text-center w-[50%] sm:w-[30%] lg:w-[20%] flex justify-between mx-auto">
          <button className=" px-[16px] py-[4px] rounded-full text-white bg-[#005AE2] inline-block">
            Sign Up
          </button>
          <Link to="" className="text-[#005AE2]  text-[16px] inline-block">
            Learn more
          </Link>
        </div>


        <div className="flex sm:[80%]  mt-[80px] relative">
          <img
            className="hidden sm:block w-[150px] absolute left-[140px] lg:left-[50%] z-[-3] border-red-400"
            src={TriangleBlob}
            alt=""
          />

          <div className="flex w-[100%] sm:w-[400px] border-[#005AE2] border-[1px] p-[20px] rounded-[24px] ml-auto sm:mr-20">
            <div>
              <div className="sm:w-[76%] mx-auto">
                <img src={ChainImage} alt="" />
              </div>
              <p className="text-[14px] text-center ">
                Seamlessly transform your long URLs into concise and shareable
                links with just few clicks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroContent;
