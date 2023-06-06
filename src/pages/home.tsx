import  { FC } from "react";
import Typed from "react-typed";

type homeProps = {
  name: string;
};

const Home: FC<homeProps> = ({ name }) => {
  return (
    <div className="text-[16px] text-green-800  mt-20 flex items-center justify-center px-8 md:mt-40 md:text-[28px]">
      <Typed
        strings={["Hellooooooooooo!!! Frontend Engineering AltSchoolers"]}
        typeSpeed={200}
        backSpeed={200}
        loop
        className="flex items-center justify-center text-[18px] px-2 md:text-[32px]"
      />
    </div>
  );
};

export default Home;
