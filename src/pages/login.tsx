import React, { FC } from "react";
import LeftContainer from "../components/loginComponents/leftContainer";
import RightContainer from "../components/loginComponents/rightContainer";

type loginProps = {
  name: string;
};

const Login: FC<loginProps> = ({ name }) => {
  return (
    <div className="text-[#1F4D36] md:flex justify-between h-screen ">
      <LeftContainer />
      <RightContainer />
    </div>
  );
};

export default Login;
