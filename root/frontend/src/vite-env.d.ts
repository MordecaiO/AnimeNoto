/// <reference types="vite/client" />

// export type SearchResult = {
//     name: string;
//     src: string;
//     status: string;
//     genres: string[];
// };
// export type AnimeList = {
//     name: string;
//     src: string;
//     numberOfItems: number;
// };

type Common = {
  name: string;
};
type Conditional =
  | {
      status?: string;
      genres?: string[];
      numberOfItems?: never;
    }
  | {
      status?: never;
      genres?: never;
      numberOfItems?: number;
    };
export type Both = Common & Conditional;

export type ListItemType = {
  name: string;
  status: string;
  description: string;
  src: string;
  genres: string[];
  index: number;
};

export type TileItemProps = {
  name: string;
  genres: {
    mal_id: number;
    type: string;
    name: string;
    url: string;
  }[];
  status: string;
  imgUrl: string;
};

export type AnimeProps = {
  mal_id: number;
  title: string;
  status: string;
  genres: {
    mal_id: number;
    name: string;
    url: string;
    type: string;
  }[];
  images: {
    jpg: {
      image_url: string;
    };
  };
};

type Props =
  | {
      list: false;
      name: string;
      items?: never;
      genres: {
        mal_id: number;
        type: string;
        name: string;
        url: string;
      }[];
      status: string;
      imgUrl: string;
    }
  | {
      list: true;
      name: string;
      items?: AnimeProps[];
      genres?: never;
      status?: never;
      imgUrl?: never;
    };
