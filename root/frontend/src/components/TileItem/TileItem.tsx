import { TileItemProps } from "../../vite-env";
import { TileItemMenu } from "../TileItemMenu/TileItemMenu";
import "./TileItem.css";

export const TileItem = ({
  id,
  name,
  genres,
  status,
  imgUrl,
  handleAddAnime,
  handleDeleteAnime,
  isAnimeInList,
  lists,
}: TileItemProps): JSX.Element => {
  return (
    <div className="menu-container">
      <article className="tile-container">
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
      </article>
      <TileItemMenu
        animeId={id}
        lists={lists}
        handleAddAnime={handleAddAnime}
        handleDeleteAnime={handleDeleteAnime}
        isAnimeInList={isAnimeInList}
      />
    </div>
  );
};
