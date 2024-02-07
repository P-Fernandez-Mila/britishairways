import React, { FC } from "react";

interface ContactInformationSectionProps {
  contactInformation: {
    email: string;
    phone: string;
    address: {
      street: string;
      city: string;
      state: string;
      zipCode: string;
      country: string;
    };
  } | null;
}
const ContactInformationSection: FC<ContactInformationSectionProps> = ({
  contactInformation,
}) => {
  if (contactInformation !== null) {
    const {
      email,
      phone,
      address: { street, city, state, zipCode, country },
    } = contactInformation;

    return (
      <div className="flex flex-col items-start ">
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
        <p>Address</p>
        <hr className="w-full"></hr>
        <div className="flex flex-col items-start pl-10">
          <p>Street: {street}</p>
          <p>City: {city}</p>
          <p>State: {state}</p>
          <p>ZipCode: {zipCode}</p>
          <p>Country: {country}</p>
        </div>
      </div>
    );
  } else {
    return <div>No data available</div>;
  }
};

export default ContactInformationSection;
