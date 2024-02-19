import { Menu, MenuButton, MenuItem } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/core.css";
import { AnimeListMenuProps, AnimeListProps } from "../../vite-env";
import "./AnimeListMenu.css";

export const AnimeListMenu = ({
  lists,
  list,
  handleDeleteList,
  setEditing,
  setSelectedList,
}: AnimeListMenuProps): JSX.Element => {
  const handleClick = () => {
    setSelectedList(list);
    setEditing(true);
  };
  return (
    <Menu transition menuButton={<MenuButton>...</MenuButton>} direction="top">
      <MenuItem
        onClick={(e) => {
          handleDeleteList(lists, list.id);
          e.keepOpen = false;
        }}
      >
        Delete List
      </MenuItem>

      <MenuItem onClick={handleClick}>Edit List Details</MenuItem>
    </Menu>
  );
};
