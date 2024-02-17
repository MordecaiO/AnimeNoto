import { Menu, MenuButton, MenuItem } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/core.css";
import { AnimeListProps } from "../../vite-env";
import "./AnimeListMenu.css";

export const AnimeListMenu = ({}): JSX.Element => {
  return (
    <Menu transition menuButton={<MenuButton>...</MenuButton>} direction="top">
      <MenuItem>Delete List</MenuItem>

      <MenuItem>Edit List Details</MenuItem>
    </Menu>
  );
};
