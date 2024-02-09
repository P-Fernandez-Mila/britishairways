export async function GET(): Promise<Response> {
  const res = await fetch(
    "https://run.mocky.io/v3/c648e1f6-a12e-4bee-a810-e7d7097089cf"
  );
  const posts = await res.json();

  interface Passenger {
    firstName: string;
    lastName: string;
    passengerType: string;
  }

  interface FlightSegment {
    departureAirport: string;
    arrivalAirport: string;
    departureTime: string;
    arrivalTime: string;
    flightNumber: string;
    airlineCode: string;
    class: string;
  }

  interface Trips {
    passenger: Passenger;
    pnr: string;
    itinerary: FlightSegment[];
  }

  // Define a type for the expected API response structure
  type ApiResponse = Trips[];
  // Convert posts object to ApiResponse type
  const myTrips: ApiResponse = posts as ApiResponse;

  // Check if all passengers are the same
  const allSamePassenger = myTrips.every(
    (trip, _, array) =>
      trip.passenger.firstName === array[0].passenger.firstName &&
      trip.passenger.lastName === array[0].passenger.lastName &&
      trip.passenger.passengerType === array[0].passenger.passengerType
  );
  if (allSamePassenger) {
    const responseObject = {
      passenger: myTrips[0].passenger,
      trips: myTrips.map((trip) => ({
        pnr: trip.pnr,
        itinerary: trip.itinerary,
      })),
    };

    return new Response(JSON.stringify(responseObject), {
      headers: { "Content-Type": "application/json" },
    });
  } else {
    throw new Error("The API response has inconsistency in its data.");
  }
}
