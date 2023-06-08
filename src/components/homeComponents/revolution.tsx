import React, { FC } from "react";
import Button from "../button/button";

type revolutionProps = {
  //   name: string;
};

const Revolution: FC<revolutionProps> = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-white text-xl text-center md:text-2xl">Revolutionizing Link Optimization</p>
      <Button
        btnText="Click Me"
        btnIcon
        className="bg-[#005AE2] text-white text-[18px] py-2 mt-8"
      />
    </div>
  );
};
export default Revolution;
