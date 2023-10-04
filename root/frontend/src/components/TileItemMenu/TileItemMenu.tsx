import { Menu, MenuItem, SubMenu } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import { AnimeListProps, TileItemMenuProps } from "../../vite-env";
import "./TileItemMenu.css";

export const TileItemMenu = ({
  anime,
  lists,
  handleAddAnime,
  handleDeleteAnime,
  isAnimeInList,
}: TileItemMenuProps): JSX.Element => {
  return (
    <Menu
      transition
      menuButton={<button className="context-button">...</button>}
      direction="top"
    >
      <MenuItem>More Info</MenuItem>
      <SubMenu label="Add/Delete from List" direction="left">
        {lists.map((list: AnimeListProps) => {
          return !isAnimeInList(anime, list) ? (
            <MenuItem
              className="add-menu-item"
              onClick={() => handleAddAnime(list, anime, lists)}
            >
              Add to {list.name}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="add-icon"
                height={15}
                width={15}
              >
                <path d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z" />
                <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z" />
              </svg>
            </MenuItem>
          ) : (
            <MenuItem
              className="delete-menu-item"
              onClick={() => handleDeleteAnime(list, anime, lists)}
            >
              Delete from {list.name}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="delete-icon"
                height={15}
                width={15}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </MenuItem>
          );
        })}
      </SubMenu>
    </Menu>
  );
};
