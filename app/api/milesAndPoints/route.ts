export async function GET(): Promise<Response> {
  const res = await fetch(
    "https://run.mocky.io/v3/ef7020e5-04a9-4f68-8f8f-ca49198f5396"
  );
  const posts = await res.json();

  // Define a type for the expected structure of frequentFlyerProfile

  type Travel = {
    year: string;
    flightsTaken: number;
    milesEarned: number;
  };

  type FrequentFlyerProfile = {
    tierStatus: string;
    milesBalance: number;
    pointsBalance: number;
    travelHistory: Travel[];
  };

  // Define a type for the expected API response structure
  type ApiResponse = {
    frequentFlyerProfile: FrequentFlyerProfile;
  };
  // Check if the posts object is of type ApiResponse
  if (!("travelHistory" in posts.frequentFlyerProfile)) {
    throw new Error(
      "The API response does not contain the expected travelHistory field."
    );
  }

  const frequentFlyerProfile: FrequentFlyerProfile = (posts as ApiResponse)
    .frequentFlyerProfile;

  // Define the type for the personal data to be returned
  type PointsData = {
    tierStatus: string;
    milesBalance: number;
    pointsBalance: number;
    travelHistory: Travel[];
  };

  // Extract the necessary data from the API response
  const pointsData: PointsData = {
    tierStatus: frequentFlyerProfile.tierStatus,
    milesBalance: frequentFlyerProfile.milesBalance,
    pointsBalance: frequentFlyerProfile.pointsBalance,
    travelHistory: frequentFlyerProfile.travelHistory,
  };

  return new Response(JSON.stringify(pointsData), {
    headers: { "Content-Type": "application/json" },
  });
}
