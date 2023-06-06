import { IoIosAdd, IoIosRemove } from "react-icons/io";
import { FC, useState } from "react";

type questionProps = {
  heading: string;
  description: string;
};

const Questions: FC<questionProps> = ({ heading, description, }) => {
  const [displayWordOne, setDisplayWordOne] = useState(true);
  const [buttonOneDisplay, setButtonOneDisplay] = useState(false);
//   const [displayWordTwo, setDisplayWordTwo] = useState(true);
//   const [buttonTwoDisplay, setButtonTwoDisplay] = useState(false);
  const showResultOne = () => {
    setDisplayWordOne(false);
    setButtonOneDisplay(true);
  };
  const hiddenResultOne = () => {
    setDisplayWordOne(true);
    setButtonOneDisplay(false);
  };

//   const showResultTwo = () => {
//     setDisplayWordTwo(false);
//     setButtonTwoDisplay(true);
//   };
//   const hiddenResultTwo = () => {
//     setDisplayWordTwo(true);
//     setButtonTwoDisplay(false);
//   };

  return (
    <div>
      <div className="p-3   border-b-[.08rem] border-gray-300 md:w-[750px]">
        <div className="flex justify-between p-2">
          <h4 className="text-[16px] text-gray-700 text-left">{heading}</h4>
          <div className="text-center cursor-pointer">
            <IoIosAdd
              className={
                buttonOneDisplay === true
                  ? "hidden"
                  : "block text-black font-bold"
              }
              onClick={showResultOne}
              size={20}
            />
            <IoIosRemove
              className={
                buttonOneDisplay === false
                  ? "hidden text-black font-bold"
                  : "text-black"
              }
              onClick={hiddenResultOne}
              size={20}
            />
          </div>
        </div>

        <p
          className={
            displayWordOne === true
              ? "hidden text-left p-2"
              : displayWordOne === false
              ? "text-left p-2"
              : ""
          }
        >
          <p className="text-[14px] text-left text-gray-700">{description}"</p>
        </p>
      </div>
    </div>
  );
};

export default Questions;
