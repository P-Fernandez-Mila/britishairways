export async function GET(): Promise<Response> {
  const res = await fetch(
    "https://run.mocky.io/v3/ef7020e5-04a9-4f68-8f8f-ca49198f5396"
  );
  const data = await res.json();

  // Define a type for the expected structure of frequentFlyerProfile
  type FrequentFlyerProfile = {
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    tierStatus: string;
    milesBalance: number;
    pointsBalance: number;
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
    };
    preferences: {
      seatPreference: string;
      mealPreference: string;
      specialAssistance: string;
      newsletterSubscription: boolean;
    };
  };

  // Define a type for the expected API response structure
  type ApiResponse = {
    frequentFlyerProfile: FrequentFlyerProfile;
  };

  // Check if the posts object is of type ApiResponse
  if (!("frequentFlyerProfile" in data)) {
    throw new Error(
      "The API response does not contain the expected frequentFlyerProfile field."
    );
  }

  const frequentFlyerProfile: FrequentFlyerProfile = (data as ApiResponse)
    .frequentFlyerProfile;

  // Define the type for the personal data to be returned
  type PersonalData = {
    name: string;
    lastName: string;
    dateOfBirth: string;
    loyaltyData: {
      tierStatus: string;
      milesBalance: number;
      pointsBalance: number;
    };
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
    };
    preferences: {
      seatPreference: string;
      mealPreference: string;
      specialAssistance: string;
      newsletterSubscription: boolean;
    };
  };

  // Extract the necessary data from the API response
  const personalData: PersonalData = {
    name: frequentFlyerProfile.firstName,
    lastName: frequentFlyerProfile.lastName,
    dateOfBirth: frequentFlyerProfile.dateOfBirth,
    loyaltyData: {
      tierStatus: frequentFlyerProfile.tierStatus,
      milesBalance: frequentFlyerProfile.milesBalance,
      pointsBalance: frequentFlyerProfile.pointsBalance,
    },
    contactInformation: {
      email: frequentFlyerProfile.contactInformation.email,
      phone: frequentFlyerProfile.contactInformation.phone,
      address: {
        street: frequentFlyerProfile.contactInformation.address.street,
        city: frequentFlyerProfile.contactInformation.address.city,
        state: frequentFlyerProfile.contactInformation.address.state,
        zipCode: frequentFlyerProfile.contactInformation.address.zipCode,
        country: frequentFlyerProfile.contactInformation.address.country,
      },
    },
    preferences: {
      seatPreference: frequentFlyerProfile.preferences.seatPreference,
      mealPreference: frequentFlyerProfile.preferences.mealPreference,
      specialAssistance: frequentFlyerProfile.preferences.specialAssistance,
      newsletterSubscription:
        frequentFlyerProfile.preferences.newsletterSubscription,
    },
  };

  return new Response(JSON.stringify(personalData), {
    headers: { "Content-Type": "application/json" },
  });
}
