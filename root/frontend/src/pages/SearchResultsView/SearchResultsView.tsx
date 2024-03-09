import "./SearchResultsView.css";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { AnimeProps, SearchResultsViewProps } from "../../vite-env";
import { useNavigate } from "react-router-dom";
import { TileItem } from "../../components/TileItem/TileItem";

export default function SearchResultsView({
  lists,
  handleAddAnime,
  handleDeleteAnime,
  isAnimeInList,
}: SearchResultsViewProps) {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [page, setPage] = useState(1);
  const { data, isPreviousData } = useQuery({
    queryKey: ["anime", { searchTerm, page }],
    queryFn: async () => {
      const response = await fetch(
        `https://api.jikan.moe/v4/anime?q=` + searchTerm + "&page=" + page
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
    keepPreviousData: true,
  });

  const animes = data?.data ?? [];
  const hasNextPage = data?.pagination?.has_next_page ?? false;
  console.log(data);
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
              <form
                onSubmit={handleSubmit}
                className="searchbar-main"
                autoComplete="off"
              >
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
            <button onClick={() => navigate("/lists")} className="lists-button">
              Lists
            </button>

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
      <button
        disabled={page === 1}
        onClick={() => setPage((old) => Math.max(old - 1, 0))}
      >
        Previous Page
      </button>
      <span> {page}</span>
      <button
        disabled={isPreviousData || !hasNextPage}
        onClick={() => {
          if (!isPreviousData && hasNextPage) {
            setPage((old) => old + 1);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
        }}
      >
        Next Page
      </button>
    </div>
  );
}
