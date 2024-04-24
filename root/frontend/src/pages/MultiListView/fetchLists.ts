import { AnimeListProps } from "../../vite-env";

export default async function fetchLists(userAuthId: string | undefined) {
  const baseURL = "http://localhost:5050/lists/";
  try {
    const response = await fetch(`${baseURL}${userAuthId?.substring(6) || ""}`);
    const fetchedLists: AnimeListProps[] = await response.json();
    console.log(fetchedLists);
    return fetchedLists;
  } catch (error) {
    console.error;
  }
}
