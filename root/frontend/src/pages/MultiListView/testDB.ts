import { AnimeListProps } from "../../vite-env";

export const animeLists: AnimeListProps[] = [
  {
    id: "",
    name: "Want to Watch",
    description: "",
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
    id: "",
    name: "Currently Watching",
    description: "",
    items: [],
    lastUpdated: "",
    createdAt: null,
    defList: true,
  },
  {
    id: "",
    name: "Completed",
    description: "",
    items: [],
    lastUpdated: "",
    createdAt: null,
    defList: true,
  },
];
