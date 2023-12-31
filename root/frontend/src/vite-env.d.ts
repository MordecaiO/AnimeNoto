

export type ListType = {
    listName: string;
    dft: boolean;
    listDescription: string;
    src: string;
    lastUpdated: number;
    listItems: AnimeProps[];
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

type ListItemProps = {
  index: number;
  src: string;
  name: string;
  status: string;
  description?: string;
  genres: {
    mal_id: number;
    name: string;
    url: string;
    type: string;
  }[];
};

export type AnimeListProps = {
  id: number; 
  name: string; 
  items?: AnimeProps[]; 
  lastUpdated?: string | undefined ; 
  createdAt: string | null ; 
  defList: boolean; 
}
  
  export type AnimeProps = {
  mal_id: number;
  title: string;
  status: string;
  synopsis?: string;
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

export type SearchResultsViewProps = {
  lists: AnimeListProps[];
  handleAddAnime: (targetList: AnimeListProps, targetAnime: AnimeProps, currentLists: AnimeListProps[]) => void;
  handleDeleteAnime: (targetList: AnimeListProps, targetAnime: AnimeProps, currLists: AnimeListProps[]) => void;
  isAnimeInList: (targetAnime: AnimeProps, targetList: AnimeListProps) => boolean

}

export type TileItemProps =
   {
    id: number; 
    anime: AnimeProps; 
      name: string;
      genres: {
        mal_id: number;
        type: string;
        name: string;
        url: string;
      }[];
      status: string;
      imgUrl: string;
      lists:AnimeListProps[];
      handleAddAnime: (targetList: AnimeListProps, targetAnime: AnimeProps, currentLists: AnimeListProps[]) => void; 
      handleDeleteAnime: (targetList: AnimeListProps, targetAnime: AnimeProps, currLists: AnimeListProps[]) => void; 
      isAnimeInList: (targetAnime: AnimeProps, targetList: AnimeListProps) => boolean; 
    }
  
    type TileItemMenuProps = {
      handleAddAnime: (targetList: AnimeListProps, targetAnime: AnimeProps, currentLists: AnimeListProps[]) => void; 
      handleDeleteAnime: (targetList: AnimeListProps, targetAnime: AnimeProps, currLists: AnimeListProps[]) => void; 
      isAnimeInList: (targetAnime: AnimeProps, targetList: AnimeListProps) => boolean;
      lists: AnimeListProps[]; 
      anime: AnimeProps; 
    }
    type CollageImageProps = {
      items?: AnimeProps[];
    };