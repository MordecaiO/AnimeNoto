import { TileItem } from "../components/TileItem/TileItem";
import { render } from "@testing-library/react";
import { AnimeListProps, AnimeProps } from "../vite-env";

const animeLists = [
  {
    id: 1,
    name: "Want to Watch",
    items: [
      {
        mal_id: 3,
        title: "Naruto Shipudden",
        status: "Completed",
        genres: [
          {
            mal_id: 27,
            type: "anime",
            name: "Shounen",
            url: "www.google.com",
          },
        ],
        images: {
          jpg: {
            image_url: "https://cdn.myanimelist.net/images/anime/2/50745l.jpg",
          },
        },
      },
    ],

    lastUpdated: "",
    createdAt: null,
    defList: true,
  },
  {
    id: 2,
    name: "Currently Watching",
    items: [],
    lastUpdated: "",
    createdAt: null,
    defList: true,
  },
  {
    id: 3,
    name: "Completed",
    items: [],
    lastUpdated: "",
    createdAt: null,
    defList: true,
  },
];
const anime = {
  mal_id: 3,
  title: "Naruto Shipudden",
  status: "Completed",
  genres: [
    {
      mal_id: 27,
      type: "anime",
      name: "Shounen",
      url: "www.google.com",
    },
  ],
  images: {
    jpg: {
      image_url: "https://cdn.myanimelist.net/images/anime/2/50745l.jpg",
    },
  },
};
const [lists, setLists] = useState(animeLists);

test("renders the TileItem component", () => {
  render(
    <TileItem
      id={anime.mal_id}
      anime={anime}
      key={anime.mal_id}
      name={anime.title}
      status={anime.status}
      genres={anime.genres}
      imgUrl={anime.images.jpg.image_url}
      lists={lists}
      handleAddAnime={handleAddAnime}
      handleDeleteAnime={handleDeleteAnime}
      isAnimeInList={isAnimeInList}
    />
  );
});
