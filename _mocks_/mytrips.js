export const myTrips = {
  passenger: {
    firstName: "Bart",
    lastName: "Simpson",
    passengerType: "CHD",
  },
  trips: [
    {
      pnr: "ZT1234",
      itinerary: [
        {
          departureAirport: "SPF",
          arrivalAirport: "NYC",
          departureTime: "2023-07-01T09:00:00Z",
          arrivalTime: "2023-07-01T12:00:00Z",
          flightNumber: "AB101",
          airlineCode: "AB",
          class: "Economy",
        },
      ],
    },
    {
      pnr: "ZT2345",
      itinerary: [
        {
          departureAirport: "SPF",
          arrivalAirport: "MIA",
          departureTime: "2023-08-15T13:00:00Z",
          arrivalTime: "2023-08-15T17:00:00Z",
          flightNumber: "CD202",
          airlineCode: "CD",
          class: "Economy",
        },
        {
          departureAirport: "MIA",
          arrivalAirport: "SPF",
          departureTime: "2023-08-22T19:00:00Z",
          arrivalTime: "2023-08-22T23:00:00Z",
          flightNumber: "CD203",
          airlineCode: "CD",
          class: "Economy",
        },
      ],
    },
    {
      pnr: "ZT3456",
      itinerary: [
        {
          departureAirport: "SPF",
          arrivalAirport: "LAX",
          departureTime: "2023-09-10T08:00:00Z",
          arrivalTime: "2023-09-10T10:30:00Z",
          flightNumber: "EF303",
          airlineCode: "EF",
          class: "Economy",
        },
      ],
    },
    {
      pnr: "ZT4567",
      itinerary: [
        {
          departureAirport: "SPF",
          arrivalAirport: "ORD",
          departureTime: "2023-10-05T07:00:00Z",
          arrivalTime: "2023-10-05T10:00:00Z",
          flightNumber: "GH404",
          airlineCode: "GH",
          class: "Economy",
        },
        {
          departureAirport: "ORD",
          arrivalAirport: "LAS",
          departureTime: "2023-10-12T16:00:00Z",
          arrivalTime: "2023-10-12T18:00:00Z",
          flightNumber: "GH505",
          airlineCode: "GH",
          class: "Economy",
        },
        {
          departureAirport: "LAS",
          arrivalAirport: "SPF",
          departureTime: "2023-10-19T14:00:00Z",
          arrivalTime: "2023-10-19T17:30:00Z",
          flightNumber: "GH606",
          airlineCode: "GH",
          class: "Economy",
        },
      ],
    },
    {
      pnr: "ZT5678",
      itinerary: [
        {
          departureAirport: "SPF",
          arrivalAirport: "ATL",
          departureTime: "2023-11-23T11:00:00Z",
          arrivalTime: "2023-11-23T14:00:00Z",
          flightNumber: "IJ707",
          airlineCode: "IJ",
          class: "Economy",
        },
        {
          departureAirport: "ATL",
          arrivalAirport: "JFK",
          departureTime: "2023-11-30T09:00:00Z",
          arrivalTime: "2023-11-30T11:00:00Z",
          flightNumber: "IJ808",
          airlineCode: "IJ",
          class: "Economy",
        },
        {
          departureAirport: "JFK",
          arrivalAirport: "SPF",
          departureTime: "2023-12-07T17:00:00Z",
          arrivalTime: "2023-12-07T20:00:00Z",
          flightNumber: "IJ909",
          airlineCode: "IJ",
          class: "Economy",
        },
      ],
    },
  ],
};
