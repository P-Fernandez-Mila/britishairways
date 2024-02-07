import React, { FC } from "react";

interface LoyaltyInformationSectionProps {
  loyaltyData: {
    tierStatus: string;
    milesBalance: number;
    pointsBalance: number;
  } | null;
}
const LoyaltyInformationSection: FC<LoyaltyInformationSectionProps> = ({
  loyaltyData,
}) => {
  if (loyaltyData !== null) {
    const { tierStatus, milesBalance, pointsBalance } = loyaltyData;
    return (
      <div className="flex flex-col items-start ">
        <p>Tier: {tierStatus}</p>
        <p>Miles: {milesBalance}</p>
        <p>Points: {pointsBalance}</p>
      </div>
    );
  } else {
    return <div>No data available</div>;
  }
};

export default LoyaltyInformationSection;
