import { ListItemProps } from "../../vite-env";
import "./ListItem.css";

export default function ListItem({
  index,
  src,
  name,
  status,
  description,
  genres,
 handleDeleteAnime,
 isAnimeInList
}: ListItemProps): JSX.Element {
  return (
    <article className="item-container">
      <div className="xleft inner-item-wrapper">
        <p className="item-index">{`# ${index}`}</p>
        <img src={src} className="item-image"></img>
      </div>
      <div className="xcenter inner-item-wrapper">
        <span className="item-name">{name}</span>
        <span className="item-status">{status}</span>
        <span className="item-description">{description}</span>
        <div className="item-genres-container">
          {genres.map((g) => {
            return <span className="item-genre">{g.name}</span>;
          })}
        </div>
      </div>
      <div className="xright inner-item-wrapper">
        <button className="item-delete">X</button>
        <button className="item-move">Move to ...</button>
      </div>
    </article>
  );
}
