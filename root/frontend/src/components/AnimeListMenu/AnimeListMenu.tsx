import { Menu, MenuButton, MenuItem } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/core.css";
import { AnimeListMenuProps, ListsContextType } from "../../vite-env";
import "./AnimeListMenu.css";
import { useContext } from "react";
import ListsContext from "../../ListsContext";
import { useAuth0 } from "@auth0/auth0-react";

export const AnimeListMenu = ({
  list,
  setEditing,
  setSelectedList,
}: AnimeListMenuProps): JSX.Element => {
  const { user } = useAuth0();
  const { deleteList, getLists, setLists } = useContext(
    ListsContext
  ) as ListsContextType;
  const handleClick = () => {
    setSelectedList(list);
    setEditing(true);
  };
  const startFetching = async () => {
    const fetchedLists = await getLists(user?.sub);
    setLists(fetchedLists);
  };
  return (
    <Menu transition menuButton={<MenuButton>...</MenuButton>} direction="top">
      <MenuItem
        onClick={(e) => {
          deleteList(list._id);
          e.keepOpen = false;
          setTimeout(() => {
            startFetching();
          }, 200);
        }}
        disabled={list.defList}
      >
        Delete List
      </MenuItem>

      <MenuItem onClick={handleClick}>Edit List Details</MenuItem>
    </Menu>
  );
};
