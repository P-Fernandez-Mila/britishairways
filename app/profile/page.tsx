"use client";
import React, { useEffect, useState } from "react";
import { Form, Spin, Input, Alert, Collapse } from "antd";
import type { CollapseProps } from "antd";
import { API } from "../constants/strings";
import LoyaltyInformationSection from "@/components/LoyaltyInformationSection";
import ContactInformationSection from "@/components/ContactInformationSection";
import Preferences from "@/components/PreferencesSection";

interface FrequentFlyerProfile {
  name?: string;
  lastName?: string;
  dateOfBirth?: string;
}

interface LoyaltyData {
  tierStatus: string;
  milesBalance: number;
  pointsBalance: number;
}

interface ContactInformation {
  email: string;
  phone: string;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
}
interface Preferences {
  seatPreference: string;
  mealPreference: string;
  specialAssistance: string;
  newsletterSubscription: boolean;
}

const Profile: React.FC = () => {
  const [frequentFlyerProfile, setFrequentFlyerProfile] =
    useState<FrequentFlyerProfile | null>(null);
  const [loyaltyData, setLoyaltyData] = useState<LoyaltyData | null>(null);
  const [contactInformation, setContactInformation] =
    useState<ContactInformation | null>(null);
  const [preferences, setPreferences] = useState<Preferences | null>(null);
  useEffect(() => {
    const getFrequentFlyerProfile = async () => {
      try {
        const response = await fetch(`${API}/frequentFlyerProfile`);
        const data = await response.json();
        setFrequentFlyerProfile(data);
        setLoyaltyData(data.loyaltyData);
        setContactInformation(data.contactInformation);
        setPreferences(data.preferences);
      } catch (error) {
        console.error(error);
        return (
          <Alert
            message="Something went wrong please contact one of our stores to get support"
            type="error"
          />
        );
      }
    };

    getFrequentFlyerProfile();
  }, []);

  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: "Executive Club information",
      children: <LoyaltyInformationSection loyaltyData={loyaltyData} />,
    },
    {
      key: "2",
      label: "Contact Information",
      children: (
        <ContactInformationSection contactInformation={contactInformation} />
      ),
    },
    {
      key: "3",
      label: "⚙️ Preferences",
      children: <Preferences preferences={preferences} />,
    },
  ];

  return (
    <section>
      <h1 className="m-10 w-100">Frequent Flyer Profile</h1>
      <Alert
        message="On this version, the information can not be updated, if you want to update your information visit one of our stores"
        type="info"
      />
      {frequentFlyerProfile ? (
        <>
          <Form className="m-0">
            <Form.Item label="Profile Picture">
              <img
                src={
                  "https://dollstoysngifts.co.uk/cdn/shop/products/the-simpsons-bart-simpson-with-skateboard-figpin-classic-3-inch-pin-870-747385.webp?v=1671044994"
                }
                alt="avatar"
                style={{ maxHeight: "100px" }}
                className=".profile-picture"
              />
            </Form.Item>
            <Form.Item label="Name" name="name" valuePropName="name">
              <Input disabled={true} value={frequentFlyerProfile?.name}></Input>
            </Form.Item>
            <Form.Item
              label="Last Name"
              name="lastName"
              valuePropName="lastname"
            >
              <Input
                disabled={true}
                value={frequentFlyerProfile?.lastName}
              ></Input>
            </Form.Item>
            <Form.Item
              label="Date of Birth"
              name="dateOfBirth"
              valuePropName="dateofbirth"
            >
              <Input
                disabled={true}
                value={frequentFlyerProfile?.dateOfBirth}
              ></Input>
            </Form.Item>
          </Form>
          <div className="w-full">
            <Collapse items={items} />
          </div>
        </>
      ) : (
        <div
          className="flex align-center w-full justify-center mt-10"
          aria-label="Loader"
        >
          <Spin size="large" />
        </div>
      )}
    </section>
  );
};

export default Profile;
