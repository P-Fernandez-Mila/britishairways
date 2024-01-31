"use client";
import React, { useEffect, useState } from "react";
import NavBar  from "../components/Navbar";

const Profile = () => {
  const [frequentFlyerProfile, setFrequentFlyerProfile] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/frequentFlyerProfile"
        );
        const data = await response.json();
        setFrequentFlyerProfile(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <NavBar></NavBar>
      <div>
        <h1>Frequent Flyer Profile</h1>
        <div>
          {frequentFlyerProfile ? (
            <>
              <img
                className="max-h-100"
                src={
                  "https://dollstoysngifts.co.uk/cdn/shop/products/the-simpsons-bart-simpson-with-skateboard-figpin-classic-3-inch-pin-870-747385.webp?v=1671044994"
                }
                alt="avatar"
                style={{ maxHeight: "100px" }}
              />
              <p>First Name: {frequentFlyerProfile.name}</p>
              <p>Last Name: {frequentFlyerProfile.lastName}</p>
              <p>Date of Birth: {frequentFlyerProfile.dateOfBirth}</p>
            </>
          ) : (
            <p>Loading...</p>
          )}{" "}
        </div>
      </div>
    </div>
  );
};

export default Profile;
