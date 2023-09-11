import { Menu, MenuItem, SubMenu } from "@szhsin/react-menu";

export const TileItemMenu = (): JSX.Element => {
  return (
    <Menu menuButton={<button className="context-button">...</button>}>
      <MenuItem>More Info</MenuItem>
      <SubMenu label="Add to List">
        <SubMenu label="Default Lists"></SubMenu>
        <SubMenu label="Other Lists"></SubMenu>
      </SubMenu>
    </Menu>
  );
};
