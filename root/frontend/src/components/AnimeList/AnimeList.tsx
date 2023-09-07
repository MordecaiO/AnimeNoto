import { AnimeListProps } from "../../vite-env";

export const AnimeList = ({
  name,
  items,
  lastUpdated,
}: AnimeListProps): JSX.Element => {
  return (
    <div className="menu-container">
      <article className="tile-container">
        <div className="tile-preview">
          <img src={""} alt="preview" />
        </div>
        <div className="tile-details">
          <span className="tile-title">{name}</span>
          <span className="tile-status">{items.length}</span>
          <span className="tile-update">{lastUpdated}</span>
        </div>{" "}
      </article>
      <button className="context-button">...</button>
    </div>
  );
};
