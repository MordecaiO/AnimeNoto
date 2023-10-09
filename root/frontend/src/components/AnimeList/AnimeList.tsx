import { AnimeListProps } from "../../vite-env";

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
        {items !== undefined && items.length > 3 ? (
          <div className="tile-preview-collage">
            {items?.slice(0, 4)?.map((item) => {
              return (
                <img className="collage-img" src={item.images.jpg.image_url} />
              );
            })}
          </div>
        ) : (
          <img className="full-img" />
        )}
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
