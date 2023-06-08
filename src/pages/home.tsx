import { FC } from "react";
import Faq from "../components/homeComponents/accondion/faq";
import Revolution from "../components/homeComponents/revolution";
import TrimForm from "../components/homeComponents/trimForm";
import Adaeze from "../components/adaeze";
import Adaeze2 from "../components/adaeze2";
import { Link } from "react-router-dom";

type homeProps = {
  name: string;
};

const Home: FC<homeProps> = () => {
  return (
    <div>
      <div className="mt-4 mx-2 flex justify-between">
        <div>
          <Link to="/home"> Home</Link>
        </div>
        <div>
          <Link to="/register" className="mr-4">
            Go to Register
          </Link>
          <Link to="/">Go to Login</Link>
        </div>
      </div>

      <div className="text-[16px] text-green-800  mt-20 flex flex-col items-center justify-center px- md:mt-0 md:text-[28px]">
        <div>
          <Adaeze />
        </div>
        <div>
          <Adaeze2 />
        </div>
        <div className="mx-auto flex items-center justify-center bg-[#1E3448] border-[.02rem] w-full  py-20">
          <TrimForm />
        </div>
        <div className="my-20">
          <Faq />
        </div>
        <div className="mb-8 bg-[#1E3448] border-[.02rem] w-full  py-10">
          <Revolution />
        </div>
      </div>
    </div>
  );
};

export default Home;
