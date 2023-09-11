import { Menu, MenuItem, SubMenu } from "@szhsin/react-menu";
import { AnimeListProps } from "../../vite-env";

export const TileItemMenu = (lists: AnimeListProps[]): JSX.Element => {
  return (
    <Menu menuButton={<button className="context-button">...</button>}>
      <MenuItem>More Info</MenuItem>
      <SubMenu label="Add to List">
        <SubMenu label="Default Lists">
          {lists.map((list: AnimeListProps) => {
            return <MenuItem>{list.name}</MenuItem>;
          })}
        </SubMenu>
        <SubMenu label="Other Lists"></SubMenu>
      </SubMenu>
    </Menu>
  );
};
