import React, { FC } from "react";
import Link from "next/link";
import { createLoyaltyURL } from "@/utils/constants/strings";
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
    const loyaltyURL: string = createLoyaltyURL(tierStatus);
    return (
      <div className="flex flex-col items-start ">
        <p>Tier: {tierStatus}</p>
        <p>Miles: {milesBalance}</p>
        <p>Points: {pointsBalance}</p>
        <Link href={loyaltyURL} target="_blank">
          Check your benefits!
        </Link>
      </div>
    );
  } else {
    return <div>No data available</div>;
  }
};

export default LoyaltyInformationSection;
