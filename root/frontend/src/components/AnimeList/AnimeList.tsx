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
      <article className="al-tile-container">
        <div className="al-tile-preview">
          <CollageImage items={items} />
        </div>
        <div className="al-tile-details">
          <span className="al-tile-title">{name}</span>
          <span className="al-tile-status">{items?.length}</span>
          <span className="al-tile-update">{lastUpdated}</span>
        </div>{" "}
      </article>
      <span className="def-list-flag">{defList ? "default list" : ""}</span>
      <button className="context-button">...</button>
    </div>
  );
};
