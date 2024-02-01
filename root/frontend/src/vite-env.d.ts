

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
  anime: AnimeProps
  handleAddAnime: (targetListId: number, targetAnime: AnimeProps, currentLists: AnimeListProps[]) => void;
  handleDeleteAnime: ( targetListId: number, targetAnime: AnimeProps, currLists: AnimeListProps[]) => void;
  isAnimeInList: (targetAnime: AnimeProps, targetList: AnimeListProps) => boolean;
  lists: AnimeListProps[];
  
  listId: number; 
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
  handleAddAnime: (targetListId: number, targetAnime: AnimeProps, currentLists: AnimeListProps[]) => void;
  handleDeleteAnime: ( targetListId: number, targetAnime: AnimeProps, currLists: AnimeListProps[]) => void;
  isAnimeInList: (targetAnime: AnimeProps, targetList: AnimeListProps) => boolean

}

export type  DetailedListViewProps = {
  lists: AnimeListProps[];
  handleAddAnime: (targetListId: number, targetAnime: AnimeProps, currentLists: AnimeListProps[]) => void;
  handleDeleteAnime: ( targetListId: number, targetAnime: AnimeProps, currLists: AnimeListProps[]) => void;
  isAnimeInList: (targetAnime: AnimeProps, targetList: AnimeListProps) => boolean

} 
export type  MultiListViewProps = {
  lists: AnimeListProps[];

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
      handleAddAnime: (targetListId: number, targetAnime: AnimeProps, currentLists: AnimeListProps[]) => void; 
      handleDeleteAnime: ( targetListId: number, targetAnime: AnimeProps, currLists: AnimeListProps[]) => void; 
      isAnimeInList: (targetAnime: AnimeProps, targetList: AnimeListProps) => boolean; 
    }
  
    type TileItemMenuProps = {
      handleAddAnime: (targetListId: number, targetAnime: AnimeProps, currentLists: AnimeListProps[]) => void; 
      isAnimeInList: (targetAnime: AnimeProps, targetList: AnimeListProps) => boolean;
      lists: AnimeListProps[]; 
      anime: AnimeProps; 
    }
    type CollageImageProps = {
      items?: AnimeProps[];
    };