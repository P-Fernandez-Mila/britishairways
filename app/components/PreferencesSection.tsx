import React, { FC } from "react";

import Input from "antd/es/input/Input";
interface PreferencesProps {
  preferences: {
    seatPreference: string;
    mealPreference: string;
    specialAssistance: string;
    newsletterSubscription: boolean;
  } | null;
}
const Preferences: FC<PreferencesProps> = ({ preferences }) => {
  if (preferences !== null) {
    const {
      seatPreference,
      mealPreference,
      specialAssistance,
      newsletterSubscription,
    } = preferences;

    return (
      <div className="flex flex-col items-start ">
        <p>Seat: {seatPreference}</p>
        <p>Meal: {mealPreference}</p>
        <p>Special Assistance: {specialAssistance}</p>
        <div className="w-full flex flex-row items-center">
          <p className="flex-grow w-full text-left">Newsletter Subscription</p>
          <Input
            type="checkbox"
            disabled
            checked={newsletterSubscription}
            className="h-8 w-30"
          />
        </div>
      </div>
    );
  } else {
    return <div>No data available</div>;
  }
};

export default Preferences;
