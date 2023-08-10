async function fetchResults<T>(request: Request): Promise<T> {
  const response = await fetch(`https://api.jikan.moe/v4/anime?q=${request}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const apiResults = response.json();
  console.log("apiResults", apiResults);
  return apiResults;
}

export default fetchResults;
