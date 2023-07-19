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
    src: string;
};
type Conditional =
    | {
        // FIXME: name:string
          status?: string;
          genres?: string[];
          numberOfItems?: never;
      }
    | {
        // FIXME: listName:string;
          status?: never;
          genres?: never;
          numberOfItems?: number;
          lastUpdated:number;
      };
export type Both = Common & Conditional;

export type ListItemType = {
    name: string;
    status: string;
    description: string;
    src: string;
    genres: string[];
    index?: number;
};
export type ListType = {

    name:string;
    dft:boolean;
    listDescription:string;
    src:string;
    lastUpdated:number;
    listItems:ListItemType[];
    numberOfItems:number;
}
export type UserDocType = {
    userId:string;
    createdAt:number;
    lists:ListType[];
}