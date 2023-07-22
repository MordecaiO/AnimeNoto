async function fetchResults(userInput: string) {
  const response = await fetch(`https://api.jikan.moe/v4/anime?q=${userInput}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
}

export default fetchResults;
