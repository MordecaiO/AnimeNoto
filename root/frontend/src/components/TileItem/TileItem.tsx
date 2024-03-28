import { TileItemProps } from "../../vite-env";
import { TileItemMenu } from "../TileItemMenu/TileItemMenu";
import "./TileItem.css";

export const TileItem = ({
  anime,
  name,
  genres,
  status,
  imgUrl,
  handleAddAnime,
  isAnimeInList,
  lists,
}: TileItemProps): JSX.Element => {
  return (
    <div className="outer-tile-container">
      <article className="tile-container">
        <div className="tile-preview">
          <img src={imgUrl} alt="preview" />

          <div className="tile-genres-container">
            {genres.map((g, i) => {
              return (
                <span className="tile-genre" key={i}>
                  {g.name}
                </span>
              );
            })}
          </div>
        </div>
        <div className="tile-details">
          <span className="tile-title">{name}</span>
          <span className="tile-status">{status}</span>
        </div>{" "}
      </article>
      <div className="tile-menu-container">
        <TileItemMenu
          anime={anime}
          lists={lists}
          handleAddAnime={handleAddAnime}
          isAnimeInList={isAnimeInList}
        />
        <span className="tooltip">More</span>
      </div>
    </div>
  );
};
