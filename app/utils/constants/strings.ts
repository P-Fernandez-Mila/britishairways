// API
export const API: string = "http://localhost:3000/api/";

// HOME PAGE
export const WELCOME_MESSAGE: string = "Welcome to British Airways";
export const COME_IN_MESSAGE: string =
  "Hello, please come in, have a seat, make yourself comfortable while we finish preparing this app for you";
export const DISCLAIMER_HOME: string =
  "⚠️ This site uses mock data, so the information present here is not real";

//Loyalty URL
export function createLoyaltyURL(tierStatus: string) {
  return `https://www.britishairways.com/en-gb/executive-club/tiers-and-benefits/${tierStatus.toLowerCase()}-benefits`;
}

//Generic Error messages
export const SERVER_RESPONSE_ERROR: string =
  "There was an error on the server call, please contact one of our stores to get support.";

export const SERVER_RESPONSE_UNEXPECTED_ERROR: string =
  "There was an error on the server call,please contact one of our stores to get support.";
