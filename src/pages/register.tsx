import React, { FC } from "react";

type registerProps = {
  name: string;
};

const Register: FC<registerProps> = ({ name }) => {
  return (
    <div className="text-[16px] text-green-800  mt-20 flex items-center justify-center px-8 md:mt-40 md:text-[28px]">
      <p>{name}</p>
    </div>
  );
};

export default Register;
