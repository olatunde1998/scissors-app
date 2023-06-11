import React from "react";
import SingleStat from "../statComponents/singleStat";

type SingleStatProp = {
  id: number;
  statValue: string;
  statDescription: string;
}[];

const StatList = ({ stats }: { stats: SingleStatProp }) => {
  const handleList = (): JSX.Element => {
    return (
      <>
        {stats.map((stat) => (
          <SingleStat key={stat.id} {...stat} />
        ))}
      </>
    );
  };

  return <>{handleList()}</>;
};

export default StatList;
