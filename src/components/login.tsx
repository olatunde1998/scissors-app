import React, { FC } from "react";

type loginProps = {
  name: string;
};

const Login: FC<loginProps> = ({ name }) => {
  return (
    <div className="text-[48px] text-green-800 flex items-center justify-center">
      login
      {name}
    </div>
  );
};

export default Login;
