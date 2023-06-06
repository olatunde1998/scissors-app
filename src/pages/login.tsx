import React, { FC } from "react";

type loginProps = {
  name: string;
};

const Login: FC<loginProps> = ({ name }) => {
  return (
    <div className="text-[16px] text-green-800  mt-20 flex items-center justify-center px-8 md:mt-40 md:text-[28px]">
       <p>{name}</p>
    </div>
  );
};

export default Login;
