import { ListItemProps, ListsContextType } from "../../vite-env";
import "./ListItem.css";
import { TileItemMenu } from "../TileItemMenu/TileItemMenu";
import { useContext } from "react";
import ListsContext from "../../ListsContext";
import { useAuth0 } from "@auth0/auth0-react";

export default function ListItem({
  index,
  src,
  name,
  status,
  description,
  genres,
  anime,
  listId,
}: ListItemProps): JSX.Element {
  const { user } = useAuth0();
  const { deleteAnime, getLists, setLists } = useContext(
    ListsContext
  ) as ListsContextType;
  const startFetching = async () => {
    const fetchedLists = await getLists(user?.sub);
    setLists(fetchedLists);
  };
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
          onClick={() => {
            deleteAnime(listId ? listId : "", anime);
            setTimeout(() => {
              startFetching();
            }, 200);
          }}
        >
          X
        </button>{" "}
        <div className="tile-menu-container">
          <TileItemMenu anime={anime} />
          <span className="tooltip">More</span>
        </div>
      </div>
    </article>
  );
}
