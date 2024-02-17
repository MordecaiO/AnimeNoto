import { Menu, MenuButton, MenuItem } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/core.css";
import { AnimeListMenuProps, AnimeListProps } from "../../vite-env";
import "./AnimeListMenu.css";

export const AnimeListMenu = ({
  lists,
  listId,
  handleDeleteList,
}: AnimeListMenuProps): JSX.Element => {
  return (
    <Menu transition menuButton={<MenuButton>...</MenuButton>} direction="top">
      <MenuItem
        onClick={(e) => {
          handleDeleteList(lists, listId);
          e.keepOpen = false;
        }}
      >
        Delete List
      </MenuItem>

      <MenuItem>Edit List Details</MenuItem>
    </Menu>
  );
};
