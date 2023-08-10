

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

 


export type Both = Common & Conditional;
export type Both2 = ListType | ListItemType

export type ListItemType = {
  name: string;
  status: string;
  description: string;
  src: string;
  genres: string[];
  index: number;
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

export type TileItemProps =
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

