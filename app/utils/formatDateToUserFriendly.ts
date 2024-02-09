export function formatDateToUserFriendly(dateString: string): string {
  const date = new Date(dateString);

  // Options for toLocaleString()
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  };

  const userFriendlyDate = date.toLocaleString("en-US", options);

  return userFriendlyDate;
}
