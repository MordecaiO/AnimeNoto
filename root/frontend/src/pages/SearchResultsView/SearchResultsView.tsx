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
        <nav className="navbar">
          <div className="navbar-left">
            <a className="logo-wrapper" href="/">
              <img
                className="anime-noto"
                src="../../animenoto_logo.png"
                alt="AnimeNoto Logo"
              ></img>
              <b className="logo-text">AnimeNoto</b>
            </a>
          </div>
          <div className="navbar-middle">
            <div className="searchbar-wrapper">
              <form onSubmit={handleSubmit} className="searchbar-main">
                <input
                  className="searchbar-term"
                  placeholder="Search catalogue"
                  name="search"
                />
                <button type="submit" className="searchbar-submit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    fill="currentColor"
                    className="bibi-search"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
          <div className="navbar-right">
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
            <a className="login">Login</a>
            <a className="sign-up">Sign up</a>
          </div>
        </nav>
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
