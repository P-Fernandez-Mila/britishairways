"use client";
import React, { useEffect, useState } from "react";
import { Form, Input, Alert, Collapse } from "antd";
import type { CollapseProps } from "antd";
import { API, SERVER_RESPONSE_ERROR, SERVER_RESPONSE_UNEXPECTED_ERROR } from "../utils/constants/strings";
import LoyaltyInformationSection from "@/components/LoyaltyInformationSection";
import ContactInformationSection from "@/components/ContactInformationSection";
import Preferences from "@/components/PreferencesSection";
import Loader from "@/components/Loader";
import ErrorReturnToHome from "@/components/ErrorReturnToHome";

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

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const getFrequentFlyerProfile = async () => {
      try {
        const response = await fetch(`${API}/frequentFlyerProfile`);
        if (!response.ok) {
          setError(SERVER_RESPONSE_ERROR);
          throw new Error(SERVER_RESPONSE_ERROR);
        }
        const data = await response.json();
        if ("error" in data) {
          setError(data.error);
        } else {
          setFrequentFlyerProfile(data);
          setLoyaltyData(data.loyaltyData);
          setContactInformation(data.contactInformation);
          setPreferences(data.preferences);
        }
      } catch (err) {
        setError(SERVER_RESPONSE_UNEXPECTED_ERROR);
      } finally {
        setLoading(false);
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
  if (loading) return <Loader />;
  if (error) return <ErrorReturnToHome error={error} />;
  return (
    <section>
      <h1 className="m-10 w-100">Frequent Flyer Profile</h1>
      <Alert
        message="On this version, the information can not be updated, if you want to update your information visit one of our stores"
        type="info"
      />

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
        <Form.Item label="Last Name" name="lastName" valuePropName="lastname">
          <Input disabled={true} value={frequentFlyerProfile?.lastName}></Input>
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
    </section>
  );
};

export default Profile;
