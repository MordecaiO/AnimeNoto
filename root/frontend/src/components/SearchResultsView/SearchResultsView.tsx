import "./SearchResultsView.css";
import { TileItem } from "../TileItem/TileItem";
import { Both } from "../../vite-env";
import fetchResults from "./fetchResults";
import { useState } from "react";

export default function SearchResultsView() {
  const exampleSearchResults: Both[] = [
    {
      name: "Jujutsu Kaisen",
      src: "Jikan path",
      status: "airing",
      genres: ["horror", "supernatural"],
    },
    {
      name: "86",
      src: "Jikan path",
      status: "aired",
      genres: ["action", "adventure"],
    },
    {
      name: "Planetes",
      src: "Jikan path",
      status: "aired",
      genres: ["action", "romance", "slice of life"],
    },
    {
      name: "The Familiar of Zero",
      src: "Jikan path",
      status: "aired",
      genres: ["adventure", "romance"],
    },
    {
      name: "That Time I Got Reincarnated as a Slime",
      src: "Jikan path",
      status: "aired",
      genres: ["action", "adventure", "comedy", "fantasy"],
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");
  return (
    <article>
      <section className="srv-header">
        <div className="left inner-wrapper">
          <button className="srv-lists-button">Lists</button>
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
          <form
            onSubmit={(e) => {
              e.preventDefault();
              fetchResults(searchQuery);
            }}
          >
            <input
              className="srv-searchbar"
              placeholder="Search catalogue"
              name="q"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button id="search">Go</button>
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
        {exampleSearchResults.map((e) => {
          return <TileItem details={e} />;
        })}
      </section>
      <button className="srv-top-button">Back to top</button>
    </article>
  );
}
