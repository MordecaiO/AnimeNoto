import { Link } from "react-router-dom";
import { AnimeListComponentProps } from "../../vite-env";
import { CollageImage } from "../CollageImage/CollageImage";

import "./AnimeList.css";
import { AnimeListMenu } from "../AnimeListMenu/AnimeListMenu";

export const AnimeList = ({
  list,
  setEditing,
  setSelectedList,
}: AnimeListComponentProps): JSX.Element => {
  return (
    <div className="menu-container">
      <Link
        className="al-link"
        to={list.name}
        state={{
          listId: list._id,
          listItems: list.items,
          listName: list.name,
          listLastUpdated: list.lastUpdated,
          defaultList: list.defList,
        }}
      >
        <article className="al-tile-container">
          <div className="al-tile-preview">
            <CollageImage items={list.items} />
          </div>
          <div className="al-tile-details">
            <span className="al-tile-title">{list.name}</span>
            <span className="al-tile-status">{list.items?.length}</span>
          </div>{" "}
        </article>
      </Link>
      <div className="al-tile-bottom">
        <span className="def-list-flag">
          {list.defList ? "default list" : ""}
        </span>
        <div className="tile-menu-container">
          <AnimeListMenu
            list={list}
            setEditing={setEditing}
            setSelectedList={setSelectedList}
          />
          <span className="tooltip">More</span>
        </div>
      </div>
    </div>
  );
};
