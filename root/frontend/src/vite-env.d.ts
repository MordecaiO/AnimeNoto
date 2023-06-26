/// <reference types="vite/client" />

export type SearchResult = {
    name: string;
    src: string;
    status: string;
    genres: string[];
};
export type AnimeList = {
    name: string;
    src: string;
    numberOfItems: number;
};
type Common = {
    name: string;
    src: string;
};
type Conditional =
    | {
          status: string;
          genres: string[];
          numberOfItems?: never;
      }
    | {
          status?: never;
          genres?: never;
          numberOfItems: number;
      };
export type Both = Common & Conditional;
