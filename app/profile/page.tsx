"use client";
import React, { useEffect, useState } from "react";
import { Form, Spin } from "antd";
import { API } from "../constants/strings.js";

interface FrequentFlyerProfile {
  name?: string;
  lastName?: string;
  dateOfBirth?: string;
}

export function Profile() {
  const [frequentFlyerProfile, setFrequentFlyerProfile] =
    useState<FrequentFlyerProfile | null>(null);

  useEffect(() => {
    const getFrequentFlyerProfile = async () => {
      try {
        const response = await fetch(`${API}/frequentFlyerProfile`);
        const data = await response.json();
        setFrequentFlyerProfile(data);
      } catch (error) {
        console.error(error);
      }
    };

    getFrequentFlyerProfile();
  }, []);

  return (
    <section>
      <h1 className="m-10 w-100">Frequent Flyer Profile</h1>

      {frequentFlyerProfile ? (
        <Form className="m-10">
          <Form.Item label="Avatar">
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
            <input disabled={true} value={frequentFlyerProfile.name}></input>
          </Form.Item>
          <Form.Item label="Last Name" name="lastName" valuePropName="lastname">
            <input
              disabled={true}
              value={frequentFlyerProfile.lastName}
            ></input>
          </Form.Item>
          <Form.Item
            label="Date of Birth"
            name="dateOfBirth"
            valuePropName="dateofbirth"
          >
            <input
              disabled={true}
              value={frequentFlyerProfile.dateOfBirth}
            ></input>
          </Form.Item>
        </Form>
      ) : (
        <div
          className="flex align-center w-full justify-center"
          aria-label="Loader"
        >
          <Spin size="large" />
        </div>
      )}
    </section>
  );
}

export default Profile;
