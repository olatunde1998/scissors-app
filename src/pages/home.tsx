import { FC } from "react";
import Faq from "../components/homeComponents/accondion/faq";
import Revolution from "../components/homeComponents/revolution";
import TrimForm from "../components/homeComponents/trimForm";

type homeProps = {
  name: string;
};

const Home: FC<homeProps> = () => {
  return (
    <div className="text-[16px] text-green-800  mt-20 flex flex-col items-center justify-center px- md:mt-0 md:text-[28px]">
      <div>
        <Faq />
      </div>
      <div className="my-8 border-[.02rem] border-[#005AE2] w-full bg-white py-4">
        <Revolution />
      </div>
      <div className=" mx-auto">
        <TrimForm />
      </div>
    </div>
  );
};

export default Home;
