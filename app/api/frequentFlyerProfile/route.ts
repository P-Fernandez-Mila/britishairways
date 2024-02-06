export async function GET(): Promise<Response> {
  const res = await fetch("https://run.mocky.io/v3/ef7020e5-04a9-4f68-8f8f-ca49198f5396");
  const posts = await res.json();

  // Define a type for the expected structure of frequentFlyerProfile
  type FrequentFlyerProfile = {
    firstName: string;
    lastName: string;
    dateOfBirth: string;
  };

  // Define a type for the expected API response structure
  type ApiResponse = {
    frequentFlyerProfile: FrequentFlyerProfile;
  };

  // Check if the posts object is of type ApiResponse
  if (!('frequentFlyerProfile' in posts)) {
    throw new Error('The API response does not contain the expected frequentFlyerProfile field.');
  }

  const frequentFlyerProfile: FrequentFlyerProfile = (posts as ApiResponse).frequentFlyerProfile;

  // Define the type for the personal data to be returned
  type PersonalData = {
    name: string;
    lastName: string;
    dateOfBirth: string;
  };

  // Extract the necessary data from the API response
  const personalData: PersonalData = {
    name: frequentFlyerProfile.firstName,
    lastName: frequentFlyerProfile.lastName,
    dateOfBirth: frequentFlyerProfile.dateOfBirth,
  };

  return new Response(JSON.stringify(personalData), {
    headers: { 'Content-Type': 'application/json' },
  });
}