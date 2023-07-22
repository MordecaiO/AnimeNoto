type FetchResultsProps = {
  input: string;
};
async function fetchResults({ input }: FetchResultsProps) {
  const response = await fetch(`https://api.jikan.moe/v4/anime?q=${input}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
}

export default fetchResults;
