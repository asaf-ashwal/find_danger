export default async function getData(
  url,
  baseUrl = "https://spiestestserver-onjv.onrender.com/",
  method,
  headers,
  body
) {
  try {
    const DB = method
      ? await fetch(baseUrl + url, {
          method,
          body: JSON.stringify({
            body,
          }),
          headers,
        })
      : await fetch(baseUrl + url);

    const data = await DB.text();
    // console.log(data);
    
    return data;
  } catch (error) {
    console.error(error);
  }
}
// getData('people')