import { TileItem } from "../components/TileItem/TileItem";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TileItem> = {
  component: TileItem,
};
export default meta;
type Story = StoryObj<typeof TileItem>;
export const AnimeTileItem: Story = {
  args: {
    name: "Naruto Shippuden",
    status: "Airing",

    imgUrl: "https://cdn.myanimelist.net/images/anime/2/50745l.jpg",
    genres: [
      {
        mal_id: 1,
        type: "PG",
        name: "Supernatural",
        url: "google.com",
      },
      {
        mal_id: 1,
        type: "PG",
        name: "Supernatural",
        url: "google.com",
      },
    ],
  },
};

export const ListTileItem: Story = {
  args: { list: true, name: "Currently Watching" },
};
