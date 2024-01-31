export async function GET() {
  const res = await fetch(
    "https://run.mocky.io/v3/ef7020e5-04a9-4f68-8f8f-ca49198f5396"
  );
  const posts = await res.json();

  // Extract the necessary data from the API response
  const frequentFlyerProfile = posts.frequentFlyerProfile;
  const personalData = {
    name: frequentFlyerProfile.firstName,
    lastName: frequentFlyerProfile.lastName,
    dateOfBirth: frequentFlyerProfile.dateOfBirth,
  };

  console.log(personalData);

  return Response.json(personalData);
}