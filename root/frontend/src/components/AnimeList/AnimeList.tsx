import { Link } from "react-router-dom";
import { AnimeListProps, AnimeProps } from "../../vite-env";
import { CollageImage } from "../CollageImage/CollageImage";

import "./AnimeList.css";
import { AnimeListMenu } from "../AnimeListMenu/AnimeListMenu";

type AnimeListComponentProps = {
  id: number;
  name: string;
  description: string;
  items?: AnimeProps[];
  lastUpdated?: string | undefined;
  createdAt: string | null;
  defList: boolean;
  handleDeleteList: (
    currentLists: AnimeListProps[],
    targetListId: number
  ) => void;

  lists: AnimeListProps[];
};
export const AnimeList = ({
  name,
  items,
  lastUpdated,
  defList,
  id,
  handleDeleteList,
  lists,
}: AnimeListComponentProps): JSX.Element => {
  return (
    <div className="menu-container">
      <Link
        className="al-link"
        to={name}
        state={{
          listId: id,
          listItems: items,
          listName: name,
          listLastUpdated: lastUpdated,
          defaultList: defList,
        }}
      >
        <article className="al-tile-container">
          <div className="al-tile-preview">
            <CollageImage items={items} />
          </div>
          <div className="al-tile-details">
            <span className="al-tile-title">{name}</span>
            <span className="al-tile-status">{items?.length}</span>
            <span className="al-tile-update">{lastUpdated}</span>
          </div>{" "}
        </article>
      </Link>
      <div className="al-tile-bottom">
        <span className="def-list-flag">{defList ? "default list" : ""}</span>
        <AnimeListMenu
          listId={id}
          lists={lists}
          handleDeleteList={handleDeleteList}
        />
      </div>
    </div>
  );
};
