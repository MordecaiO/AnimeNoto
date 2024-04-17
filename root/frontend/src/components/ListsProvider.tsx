import { AnimeListProps, AnimeProps } from "../vite-env";
import { createContext, useState } from "react";

export type ListsContextType = {
  lists: AnimeListProps[] | [];
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
};

export const ListsContext = createContext<ListsContextType | null>(null);

type ContextProviderProps = {
  children: React.ReactNode;
};
const ListsProvider = ({ children }: ContextProviderProps) => {
  const [lists, setLists] = useState<AnimeListProps[]>([
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
              image_url:
                "https://cdn.myanimelist.net/images/anime/2/50745l.jpg",
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
  ]);

  const getLists = async (userAuthId: string | undefined) => {
    const baseURL = "http://localhost:5050/lists/";
    try {
      const response = await fetch(
        `${baseURL}${userAuthId?.substring(6) || ""}`
      );
      const fetchedLists: AnimeListProps[] = await response.json();
      console.log(fetchedLists);
      setLists(fetchedLists);
    } catch (error) {
      console.error;
    }
  };

  const addAnime = async (
    targetListId: string,
    targetAnime: AnimeProps
  ): Promise<void> => {
    const options = {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        mal_id: targetAnime.mal_id,
        title: targetAnime.title,
        status: targetAnime.status,
        synopsis: targetAnime.synopsis,
        genres: targetAnime.genres,
        images: targetAnime.images,
      }),
    };
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_API_URL}addAnime/${targetListId}`,
        options
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteAnime = async (
    targetListId: string,
    targetAnime: AnimeProps
  ): Promise<void> => {
    const options = {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_API_URL}delAnime/${targetListId}/${
          targetAnime.mal_id
        }`,
        options
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const createList = async (
    userAuthId: string | undefined,
    newListName: string,
    newListDesc: string
  ): Promise<void> => {
    const options = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        name: newListName,
        description: newListDesc,
        items: [],
        lastUpdated: "",
        createdAt: new Date(Date.now()).toISOString(),
        defList: true,
        userAuthId: userAuthId,
      }),
    };
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_API_URL}/lists/${userAuthId}`,
        options
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteList = async (targetListId: string): Promise<void> => {
    const options = {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_API_URL}lists/${targetListId}`,
        options
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const editList = async (
    targetListId: string,
    newListName: string,
    newListDesc: string
  ): Promise<void> => {
    const options = {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        name: newListName,
        description: newListDesc,
      }),
    };
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_API_URL}lists/${targetListId}`,
        options
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <ListsContext.Provider
      value={{
        lists,
        getLists,
        addAnime,
        deleteAnime,
        createList,
        deleteList,
        editList,
      }}
    >
      {children}
    </ListsContext.Provider>
  );
};

export default ListsProvider;
