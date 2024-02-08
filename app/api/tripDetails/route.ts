export async function GET(): Promise<Response> {
  const res = await fetch(
    "https://run.mocky.io/v3/c18fc4dd-3aa7-4b0a-822e-cb0118ec7a09"
  );
  const posts = await res.json();

  // Define the response interfaces
  interface Segment {
    departureAirport: string;
    arrivalAirport: string;
    departureTime: string;
    arrivalTime: string;
    flightNumber: string;
    airlineCode: string;
    class: string;
  }

  interface Traveler {
    firstName: string;
    lastName: string;
    passengerType: string;
  }

  interface ContactInformation {
    email: string;
    phone: string;
  }

  interface Ticketing {
    ticketNumbers: string[];
    issueDate: string;
    status: string;
  }

  interface TravelAgency {
    name: string;
    agentID: string;
    contact: string;
  }

  interface Remark {
    type: string;
    text: string;
  }

  interface TripDetails {
    pnr: string;
    bookingReference: string;
    travelers: Traveler[];
    itinerary: { segment: Segment }[];
    contactInformation: ContactInformation;
    ticketing: Ticketing;
    travelAgency: TravelAgency;
    remarks: Remark[];
  }

  type ApiResponse = {
    tripDetails: TripDetails;
  };

  // Check if the posts object is of type ApiResponse
  if (!("pnr" in posts)) {
    throw new Error(
      "The API response does not contain the expected tripDetails field."
    );
  }
  const tripDetails: TripDetails = posts;
  return new Response(JSON.stringify(tripDetails), {
    headers: { "Content-Type": "application/json" },
  });
}
