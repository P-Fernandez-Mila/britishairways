export async function GET(request: Request): Promise<Response> {
  const url = new URL(request.url);

  //Here the app manipulates the data, in order to work with the current api responses
  const params = new URLSearchParams(url.search);
  //Get the last name and pnr from the search URL
  const lastname = params.get("lastname");
  const pnr = params.get("pnr");
  let dataExist = false;

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

  interface ErrorResponse {
    status: number;
    error: string;
    message: string;
  }

  interface SearchResult {
    passenger: Passenger | undefined;
    trips: {
      pnr: string | undefined;
      itinerary: FlightSegment[] | undefined;
    };
  }

  let notFound: ErrorResponse | null = null;
  let resultFind: Trips | null = null;
  let searchResult: SearchResult | ErrorResponse | null;

  // In order to prevent unnecessary calls in this demo project, I created an array from the know list of PNRs,
  //  and after that the system decides what endpoint is going to call

  if (lastname && pnr) {
    dataExist =
      lastname.toLowerCase() === "simpson" &&
      ["ZT1234", "ZT2345", "ZT3456", "ZT4567", "ZT5678"].includes(pnr);
  }

  //Check if the data exist on the API response
  if (dataExist) {
    //When exist, the system calls the API and gets the information
    const res = await fetch(
      "https://run.mocky.io/v3/c648e1f6-a12e-4bee-a810-e7d7097089cf"
    );
    const allResults = await res.json();
    console.log(allResults);
    resultFind = allResults.find((result: Trips) => result.pnr === pnr);
    searchResult = {
      passenger: resultFind?.passenger,
      trips: [
        {
          pnr: resultFind?.pnr,
          itinerary: resultFind?.itinerary,
        },
      ],
    };
  } else {
    // If the data not exist the system returns 404, in a real scenario the api endpoint should be the same for not found and for the results
    const res = await fetch(
      "https://run.mocky.io/v3/9e7cc823-9b8f-44b6-9df2-5f35876211a7"
    );
    notFound = await res.json();
    searchResult = notFound;
  }
  return new Response(JSON.stringify(searchResult), {
    headers: { "Content-Type": "application/json" },
  });
}
