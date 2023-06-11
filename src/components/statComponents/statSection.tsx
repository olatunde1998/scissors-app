import React from "react";
import StatList from "../statComponents/statList";

type statType = {
  id: number;
  statValue: string;
  statDescription: string;
}[]; 

const stats: statType = [
  {
    id: 1,
    statValue: "3M",
    statDescription: "Active users",
  },
  {
    id: 2,
    statValue: "60M",
    statDescription: "Links & QR codes created",
  },
  {
    id: 3,
    statValue: "1B",
    statDescription: "Clicked & Scanned connections",
  },
  {
    id: 4,
    statValue: "300K",
    statDescription: "App Integrations",
  },
];

function StatSection() {
  return (
    <div className="flex w-[100%] lg:w-[90%] flex-col sm:flex-row  sm:justify-between px-[9%] bg-[#F9FBFD] py-[30px]">
      <div className="sm:ml-[10px] min-[850px]:ml-[0px] max-[1400px]:ml-[0px] md:ml-[80px]">
        <h2 className="font-bold text-[26px] w-[288px] sm:w-[260px] letter-spacing-[1.1] lg:mr-[20px]">
          One Stop.
          <br />
          Four <span className="text-[#005AE2]">Possibilities</span>.{" "}
        </h2>
      </div>

      <div className="flex w-[100%] flex-wrap flex-row">
        <StatList stats={stats} />
      </div>
    </div>
  );
}

export default StatSection;
