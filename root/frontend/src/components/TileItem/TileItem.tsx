import { TileItemProps } from "../../vite-env";
import "./TileItem.css";

export const TileItem = ({
  name,
  genres,
  status,
  imgUrl,
  list,
}: TileItemProps): JSX.Element => {
  return (
    <div className="menu-container">
      <article className="tile-container">
        {list ? (
          <>
            <div className="tile-preview">
              <img src={""} alt="preview" />
            </div>
            <div className="tile-details">
              <span className="tile-title">{name} </span>
              <span className="tile-status">3</span>
            </div>{" "}
          </>
        ) : (
          <>
            <div className="tile-preview">
              <img src={imgUrl} alt="preview" />

              <div className="tile-genres-container">
                {genres.map((g) => {
                  return <span className="tile-genre">{g.name}</span>;
                })}
              </div>
            </div>
            <div className="tile-details">
              <span className="tile-title">{name}</span>
              <span className="tile-status">{status}</span>
            </div>{" "}
          </>
        )}
      </article>
      <button className="context-button">...</button>
    </div>
  );
};
