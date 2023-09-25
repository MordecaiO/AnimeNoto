import "./SearchResultsView.css";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { AnimeProps } from "../../vite-env";
import { Link } from "react-router-dom";
import { TileItem } from "../../components/TileItem/TileItem";
import { animeLists } from "../MultiListView/testDB";
import { useLists } from "../../hooks/useLists";
export default function SearchResultsView() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [lists, handleAddAnime, handleDeleteAnime, isAnimeInList] =
    useLists(animeLists);
  console.log("lists", lists);
  const results = useQuery({
    queryKey: ["animes", searchTerm],
    queryFn: async () => {
      const response = await fetch(
        `https://api.jikan.moe/v4/anime?q=` + searchTerm
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();

      return data;
    },
  });

  const animes = results?.data?.data ?? [];
  console.log("ani", animes);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    setSearchTerm(formData.get("search") as string);
    e.currentTarget.reset();
    e.currentTarget.focus();
  };
  return (
    <article>
      <section className="srv-header">
        <div className="left inner-wrapper">
          <Link to={`lists`}>
            <button className="srv-lists-button">Lists</button>
          </Link>
        </div>
        <div className="centre inner-wrapper">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512"
            className="icon"
          >
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
          </svg>
          <form onSubmit={handleSubmit}>
            <input
              className="srv-searchbar"
              placeholder="Search catalogue"
              name="search"
            />
            <button type="submit">Go</button>
          </form>
        </div>
        <div className="right inner-wrapper">
          <div className="srv-buttons">
            <button className="srv-sort">Sort</button>
            <button className="srv-filter">Filter</button>
          </div>
        </div>
      </section>
      <section className="srv-results-container">
        {animes.map((anime: AnimeProps, i: number) => {
          return (
            <TileItem
              id={anime.mal_id}
              anime={anime}
              key={i}
              name={anime.title}
              status={anime.status}
              genres={anime.genres}
              imgUrl={anime.images.jpg.image_url}
              lists={lists}
              handleAddAnime={handleAddAnime}
              handleDeleteAnime={handleDeleteAnime}
              isAnimeInList={isAnimeInList}
            />
          );
        })}
      </section>
      <button className="srv-top-button">Back to top</button>
    </article>
  );
}
