export async function getStrapiData(url: string) {
  const baseUrl = "http://localhost:1337";
  try {
    const response = await fetch(baseUrl + url + "?populate=*");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
