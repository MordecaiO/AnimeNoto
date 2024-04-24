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
  anime: AnimeProps;
  listId: string | undefined;
};

export type AnimeListProps = {
  _id: string;
  name: string;
  description: string;
  items?: AnimeProps[];
  lastUpdated?: string | undefined;
  createdAt: string | null;
  defList: boolean;
  userAuthId: string | undefined;
};

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
  handleAddAnime: (
    targetListId: string,
    targetAnime: AnimeProps,
    currentLists: AnimeListProps[]
  ) => void;
  handleDeleteAnime: (
    targetListId: string,
    targetAnime: AnimeProps,
    currLists: AnimeListProps[]
  ) => void;
  isAnimeInList: (
    targetAnime: AnimeProps,
    targetList: AnimeListProps
  ) => boolean;
};

export type DetailedListViewProps = {
  lists: AnimeListProps[];
  handleAddAnime: (
    targetListId: string,
    targetAnime: AnimeProps,
    currentLists: AnimeListProps[]
  ) => void;
  handleDeleteAnime: (
    targetListId: string,
    targetAnime: AnimeProps,
    currLists: AnimeListProps[]
  ) => void;
  isAnimeInList: (
    targetAnime: AnimeProps,
    targetList: AnimeListProps
  ) => boolean;
};
export type MultiListViewProps = {
  lists: AnimeListProps[];
  setLists: Dispatch<React.SetStateAction<AnimeListProps[]>>;
  handleCreateList: (
    currentLists: AnimeListProps[],
    newListName: string,
    newListDesc: string
  ) => void;
  handleDeleteList: (
    currentLists: AnimeListProps[],
    targetListId: string
  ) => void;
  handleEditList: (
    currentLists: AnimeListProps[],
    targetListId: string,
    listNameUpdate: string,
    listDescUpdate: string
  ) => void;
};

export type TileItemProps = {
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
};

type TileItemMenuProps = {
  anime: AnimeProps;
};
type CollageImageProps = {
  items?: AnimeProps[];
};

type CreateListModalProps = {
  setOpen: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
};

type AnimeListMenuProps = {
  setEditing: Dispatch<SetStateAction<boolean>>;
  setSelectedList: Dispatch<SetStateAction<AnimeListProps>>;
  list: AnimeListProps;
};

type EditListModalProps = {
  isEditing: boolean;
  setEditing: Dispatch<SetStateAction<boolean>>;
  selectedList: AnimeListProps;
};

type AnimeListComponentProps = {
  list: AnimeListProps;
  isEditing: boolean;
  setEditing: Dispatch<SetStateAction<boolean>>;
  setSelectedList: Dispatch<SetStateAction<AnimeListProps>>;
};

export type ListsContextType = {
  setLists: Dispatch<React.SetStateAction<AnimeListProps[]>>;
  lists: AnimeListProps[];
  getLists: (userAuthId: string | undefined) => void;
  addAnime: (targetListId: string, targetAnime: AnimeProps) => void;
  deleteAnime: (targetListId: string, targetAnime: AnimeProps) => void;
  createList: (
    userAuthId: string | undefined,
    newListName: string,
    newListDesc: string
  ) => void;
  deleteList: (targetListId: string) => void;
  editList: (
    targetListId: string,
    newListName: string,
    newListDesc: string
  ) => void;
  isAnimeInList: (
    targetAnime: AnimeProps,
    targetList: AnimeListProps
  ) => boolean;
};
