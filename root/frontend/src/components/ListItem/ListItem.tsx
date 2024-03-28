import { ListItemProps } from "../../vite-env";
import "./ListItem.css";
import { TileItemMenu } from "../TileItemMenu/TileItemMenu";

export default function ListItem({
  index,
  src,
  name,
  status,
  description,
  genres,
  handleDeleteAnime,
  isAnimeInList,
  handleAddAnime,
  anime,
  listId,
  lists,
}: ListItemProps): JSX.Element {
  return (
    <article className="item-container">
      <div className="xleft inner-item-wrapper">
        <p className="item-index">{`# ${index + 1}`}</p>
        <img src={src} className="item-image"></img>
      </div>
      <div className="xcenter inner-item-wrapper">
        <span className="item-name">{name}</span>
        <span className="item-status">{status}</span>
        <span className="item-description">{description}</span>
        <div className="item-genres-container">
          {genres.map((g, i) => {
            return (
              <span key={i} className="item-genre">
                {g.name}
              </span>
            );
          })}
        </div>
      </div>
      <div className="xright">
        <button
          className="item-delete"
          onClick={() => handleDeleteAnime(listId, anime, lists)}
        >
          X
        </button>{" "}
        <TileItemMenu
          anime={anime}
          lists={lists}
          handleAddAnime={handleAddAnime}
          isAnimeInList={isAnimeInList}
        />
      </div>
    </article>
  );
}
