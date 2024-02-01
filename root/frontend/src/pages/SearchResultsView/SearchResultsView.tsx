import "./SearchResultsView.css";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { AnimeProps, SearchResultsViewProps } from "../../vite-env";
import { Link } from "react-router-dom";
import { TileItem } from "../../components/TileItem/TileItem";

export default function SearchResultsView({
  lists,
  handleAddAnime,
  handleDeleteAnime,
  isAnimeInList,
}: SearchResultsViewProps) {
  const [searchTerm, setSearchTerm] = useState<string>("");

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    setSearchTerm(formData.get("search") as string);
    e.currentTarget.reset();
    e.currentTarget.focus();
  };
  return (
    <div className="main">
      <header className="header">
        <div className="header-left">
          <div className="logo-wrapper">
            <img
              className="anime-noto"
              src="../../animenoto_logo.png"
              alt="AnimeNoto Logo"
            ></img>
          </div>
          <div className="lists-button-wrapper">
            <Link
              to="lists"
              state={{
                lists: lists,
              }}
            >
              <button className="lists-button">Lists</button>
            </Link>
          </div>
        </div>
        <div className="header-right">
          <div className="searchbar-wrapper">
            <form onSubmit={handleSubmit} className="searchbar-main">
              <input
                className="searchbar-term"
                placeholder="Search catalogue"
                name="search"
              />
              <button type="submit" className="searchbar-submit">
                Search
              </button>
            </form>
          </div>
        </div>

      </header>
      <section className="results-container">
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
      {/* <button className="srv-top-button">Back to top</button> */}
    </div>
  );
}
