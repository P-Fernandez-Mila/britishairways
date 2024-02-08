export async function GET(): Promise<Response> {
  const res = await fetch(
    "https://run.mocky.io/v3/ef7020e5-04a9-4f68-8f8f-ca49198f5396"
  );
  const posts = await res.json();

  type Flight = {
    flightNumber: string;
    departureAirport: string;
    arrivalAirport: string;
    departureDate: string;
  };

  type FrequentFlyerProfile = {
    upcomingFlights: Flight[];
  };

  // Define a type for the expected API response structure
  // Define a type for the expected API response structure
  type ApiResponse = {
    frequentFlyerProfile: FrequentFlyerProfile;
  };

  // Check if the posts object is of type ApiResponse
  if (!("frequentFlyerProfile" in posts)) {
    throw new Error(
      "The API response does not contain the expected frequentFlyerProfile field."
    );
  }

  const frequentFlyerProfile: FrequentFlyerProfile = (posts as ApiResponse)
    .frequentFlyerProfile;

  // Define the type for the personal data to be returned

  // Extract the necessary data from the API response
  const flightsData = frequentFlyerProfile.upcomingFlights.map((flight) => {
    return {
      flightNumber: flight.flightNumber,
      departureAirport: flight.departureAirport,
      arrivalAirport: flight.arrivalAirport,
      departureDate: flight.departureDate,
    };
  });

  return new Response(JSON.stringify(flightsData), {
    headers: { "Content-Type": "application/json" },
  });
}
