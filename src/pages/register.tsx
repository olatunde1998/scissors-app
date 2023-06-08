import React, { FC } from "react";
import LeftContainer from "../components/loginComponents/leftContainer";
import RightContainer from "../components/registerComponents/rightContainer";

type registerProps = {
  name: string;
};

const Register: FC<registerProps> = ({ name }) => {
  return (
    <div className="text-[#1F4D36] md:flex justify-between h-screen ">
      <LeftContainer />
      <RightContainer />
    </div>
  );
};

export default Register;
