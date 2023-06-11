import React from "react";

type singleStatProp = {
  id: number;
  statValue: string;
  statDescription: string;
};

const SingleStat = ({ statValue, statDescription }: singleStatProp) => {
  return (
    <div className="w-[50%] sm:w-[120px] lg:w-[170px] sm:mb-[10px] mt-[10px] md:mt-[0px]">
      <h3 className="font-bold sm:text-[22px]">{statValue}</h3>
      <p className="text-[14px] sm:text-[16px]">{statDescription}</p>
    </div>
  );
};

export default SingleStat;
