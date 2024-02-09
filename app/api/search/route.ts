export async function GET(request: { url: string | URL }) {
  const url = new URL(request.url);
  const params = new URLSearchParams(url.search);
  const lastname = params.get("lastname");
  const pnr = params.get("pnr");
  let dataExist: Boolean = false;
  if (lastname && pnr) {
    dataExist =
      lastname.toLowerCase() === "simpson" &&
      ["ZT1234", "ZT2345", "ZT3456", "ZT4567", "ZT5678"].includes(pnr);
  }
  console.log();
  // Return a response (this is just a placeholder, you would generate a response based on your logic)
  return new Response(`Lastname: ${dataExist}`, {
    headers: { "Content-Type": "text/plain" },
  });
}
