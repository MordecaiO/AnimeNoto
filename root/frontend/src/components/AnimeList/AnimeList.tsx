import { AnimeListProps } from "../../vite-env";
import { CollageImage } from "../CollageImage/CollageImage";

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
          <span className="tile-title">
            {name + defList ? "default list" : ""}
          </span>
          <span className="tile-status">{items?.length}</span>
          <span className="tile-update">{lastUpdated}</span>
        </div>{" "}
      </article>
      <button className="context-button">...</button>
    </div>
  );
};
