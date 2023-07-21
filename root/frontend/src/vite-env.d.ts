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
    src: string;
};
type Conditional =
    | {
          listName: never;
          name: string;
          status?: string;
          genres?: string[];
          numberOfItems?: never;
          lastUpdated: never;
      }
    | {
          listName: string;
          dft: boolean;
          name: never;
          status?: never;
          genres?: never;
          numberOfItems?: number;
          lastUpdated: number;
      };
      type Anime = {
        src: string;
        name: string;
        status?: string;
        genres?: string[];
      }
export type Both = Common & Conditional;
export type Both2 = ListType | ListItemType

export type ListItemType = {
    name: string;
    status: string;
    src: string;
    genres: string[];
    description: string;
    index?: number;
    listName?: never;
    dft?: never;
    listDescription?: never;
    src?: never;
    lastUpdated?: never;
    listItems?: never;
    numberOfItems?: never;
};
export type ListType = {
    listName: string;
    dft: boolean;
    listDescription: string;
    src: string;
    lastUpdated: number;
    listItems: ListItemType[];
    numberOfItems: number;
    name?: never;
    status?: never;
    src?: never;
    genres?: never;
    description?: never;
    index?: never;
};
export type UserDocType = {
    userId: string;
    createdAt: number;
    lists: ListType[];
};




