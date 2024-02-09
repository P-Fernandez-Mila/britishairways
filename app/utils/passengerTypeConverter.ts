export function passengerTypeConverter(passengerType: string) {
  if (passengerType === "INF") {
    return "Infant";
  } else if (passengerType === "ADT") {
    return "Adult";
  } else if (passengerType === "CHD") {
    return "Child";
  } else {
    return passengerType;
  }
}
