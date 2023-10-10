import { AnimeListProps } from "../../vite-env";
import { CollageImage } from "../CollageImage/CollageImage";

import "./AnimeList.css";
export const AnimeList = ({
  name,
  items,
  lastUpdated,
  defList,
}: AnimeListProps): JSX.Element => {
  return (
    <div className="menu-container">
      <article className="tile-container">
        <div className="tile-preview">
          <CollageImage items={items} />
        </div>
        <div className="tile-details">
          <span className="tile-title">{name}</span>
          <span className="tile-status">{items?.length}</span>
          <span className="tile-update">{lastUpdated}</span>
        </div>{" "}
      </article>
      <span className="def-list-flag">{defList ? "default list" : ""}</span>
      <button className="context-button">...</button>
    </div>
  );
};
