import React from "react";
import TodayPrimaryCard from "../components/cards/TodayPrimaryCard";
import TodaySecondaryCard from "../components/cards/TodaySecondaryCard";

const Today: React.FC = () => {
  return (
    <>
      <TodayPrimaryCard />
      <TodaySecondaryCard />
    </>
  );
};

export default Today;
