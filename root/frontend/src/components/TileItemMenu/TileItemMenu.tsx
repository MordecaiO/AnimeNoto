import { Menu, MenuItem, SubMenu } from "@szhsin/react-menu";
import { AnimeListProps, TileItemMenuProps } from "../../vite-env";

export const TileItemMenu = ({
  anime,
  lists,
  handleAddAnime,
  handleDeleteAnime,
  isAnimeInList,
}: TileItemMenuProps): JSX.Element => {
  return (
    <Menu menuButton={<button className="context-button">...</button>}>
      <MenuItem>More Info</MenuItem>
      <SubMenu label="Add/Delete from List">
        {lists.map((list: AnimeListProps) => {
          return !isAnimeInList(anime, list) ? (
            <MenuItem onClick={() => handleAddAnime(list, anime, lists)}>
              Add to {list.name}
            </MenuItem>
          ) : (
            <MenuItem onClick={() => handleDeleteAnime(list, anime, lists)}>
              Delete from {list.name}
            </MenuItem>
          );
        })}
      </SubMenu>
    </Menu>
  );
};
