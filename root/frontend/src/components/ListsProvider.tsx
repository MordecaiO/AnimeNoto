import ListsContext from "../ListsContext";
import { AnimeListProps, AnimeProps } from "../vite-env";
import { useState } from "react";

type ContextProviderProps = {
  children: React.ReactNode;
};
const ListsProvider = ({ children }: ContextProviderProps) => {
  const [lists, setLists] = useState<AnimeListProps[]>([]);

  const getLists = async (userAuthId: string | undefined) => {
    const baseURL = "https://animenoto.onrender.com/lists/";
    try {
      const response = await fetch(
        `${baseURL}${userAuthId?.substring(6) || ""}`
      );
      const fetchedLists: AnimeListProps[] = await response.json();
      console.log("fetched lists getList fn", fetchedLists);
      return fetchedLists;
    } catch (error) {
      console.error;
    }
  };

  const addAnime = async (
    targetListId: string,
    targetAnime: AnimeProps
  ): Promise<void> => {
    console.log("targetListId", targetListId);
    console.log("targetAnime", targetAnime);
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
        `${import.meta.env.VITE_BASE_API_URL}lists/addAnime/${targetListId}`,
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
        `${import.meta.env.VITE_BASE_API_URL}lists/delAnime/${targetListId}/${
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
    const newList: AnimeListProps = {
      _id: "",
      name: newListName,
      description: newListDesc,
      items: [],
      lastUpdated: "",
      createdAt: new Date(Date.now()).toISOString(),
      defList: false,
      userAuthId: userAuthId,
    };
    const options = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(newList),
    };
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_API_URL}lists/${userAuthId}`,
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

  const isAnimeInList = (
    targetAnime: AnimeProps,
    targetList: AnimeListProps
  ): boolean => {
    const targetAnimeId = targetAnime.mal_id;

    return targetList.items?.findIndex((x) => x.mal_id == targetAnimeId) != -1
      ? true
      : false;
  };

  return (
    <ListsContext.Provider
      value={{
        setLists,
        lists,
        getLists,
        addAnime,
        deleteAnime,
        createList,
        deleteList,
        editList,
        isAnimeInList,
      }}
    >
      {children}
    </ListsContext.Provider>
  );
};

export default ListsProvider;
