// import { useEffect, useState } from "react";
// import { AnimeListProps, AnimeProps } from "../vite-env";
// import fetchLists from "../pages/MultiListView/fetchLists";

// export const useLists = (userAuthId: string) => {
//   const [lists, setLists] = useState<AnimeListProps[]>([]);
//   useEffect(() => {
//     async () => {
//       const refreshedLists = await fetchLists(userAuthId);
//       console.log(refreshedLists);
//     };
//   }, [lists, userAuthId]);
//   // get lists from the database

//   // const handleAddAnime = (
//   //   targetListId: string,
//   //   targetAnime: AnimeProps,
//   //   currentLists: AnimeListProps[]
//   // ): void => {
//   //   console.log("lists before add function", lists);
//   //   // shallow copy
//   //   const updatedLists = [...currentLists];
//   //   console.log("updatedLists", updatedLists);
//   //   console.log("targetListId", targetListId);

//   //   const targetListIndex = updatedLists.findIndex((x) => x.id == targetListId);
//   //   console.log("targetListIndex", targetListIndex);
//   //   //make copy of List
//   //   const updatedList = { ...updatedLists[targetListIndex] };
//   //   // check if List is empty

//   //   // make copy of Items in list
//   //   // casting to arr of AnimeProps
//   //   const updatedItems = [...(updatedList.items as AnimeProps[])];
//   //   updatedItems.push(targetAnime);
//   //   updatedList.items = updatedItems;
//   //   updatedLists[targetListIndex] = updatedList;

//   //   setLists(updatedLists);
//   //   console.log("lists after add function", lists);
//   // };

//   const handleAddAnime = async (
//     targetListId: string,
//     targetAnime: AnimeProps,
//     currentLists: AnimeListProps[]
//   ): Promise<void> => {
//     const options = {
//       method: "PATCH",
//       headers: {
//         "Content-type": "application/json",
//         "Access-Control-Allow-Origin": "*",
//       },
//       body: JSON.stringify({
//         mal_id: targetAnime.mal_id,
//         title: targetAnime.title,
//         status: targetAnime.status,
//         synopsis: targetAnime.synopsis,
//         genres: targetAnime.genres,
//         images: targetAnime.images,
//       }),
//     };
//     try {
//       const response = await fetch(
//         `${import.meta.env.VITE_BASE_API_URL}addAnime/${targetListId}`,
//         options
//       );
//       console.log(response);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleDeleteAnime = (
//     targetListId: string,
//     targetAnime: AnimeProps,
//     currLists: AnimeListProps[]
//   ): void => {
//     console.log("lists before del function", lists);
//     const updatedLists = [...currLists];
//     const targetListIndex = updatedLists.findIndex((x) => x.id == targetListId);
//     const updatedList = { ...updatedLists[targetListIndex] };
//     const updatedItems = [...(updatedList.items as [])];
//     const targetAnimeId = targetAnime.mal_id;
//     const targetAnimeIndex = updatedItems.findIndex(
//       (x: AnimeProps) => x.mal_id == targetAnimeId
//     );
//     updatedItems.splice(targetAnimeIndex, 1);
//     updatedList.items = updatedItems;
//     updatedLists[targetListIndex] = updatedList;
//     setLists(updatedLists);
//     console.log("lists after del function", lists);
//   };
//   // change function params
//   const isAnimeInList = (
//     targetAnime: AnimeProps,
//     targetList: AnimeListProps
//   ): boolean => {
//     const targetAnimeId = targetAnime.mal_id;

//     return targetList.items?.findIndex((x) => x.mal_id == targetAnimeId) != -1
//       ? true
//       : false;
//   };

//   const createListId = () => {
//     return new Date().valueOf();
//   };

//   const handleCreateList = (
//     currentLists: AnimeListProps[],
//     newListName: string,
//     newListDesc: string
//   ) => {
//     const newList = {
//       id: "",
//       name: newListName,
//       description: newListDesc,
//       items: [],
//       lastUpdated: Date.now().toString(),
//       createdAt: Date.now().toString(),
//       defList: false,
//     };
//     console.log(newList);

//     const updatedLists = [...currentLists];
//     updatedLists.push(newList);
//     setLists(updatedLists);
//   };

//   const handleDeleteList = (
//     currentLists: AnimeListProps[],
//     targetListId: string
//   ) => {
//     const updatedLists = [...currentLists];
//     const targetListIndex = updatedLists.findIndex((x) => x.id == targetListId);
//     const targetList = updatedLists[targetListIndex];
//     if (!targetList.defList) {
//       updatedLists.splice(targetListIndex, 1);
//       setLists(updatedLists);
//     }
//   };

//   const handleEditList = (
//     currentLists: AnimeListProps[],
//     targetListId: string,
//     listNameUpdate: string,
//     listDescUpdate: string
//   ) => {
//     const updatedLists = [...currentLists];
//     const targetListIndex = updatedLists.findIndex((x) => x.id == targetListId);
//     const updatedList = { ...updatedLists[targetListIndex] };
//     updatedList.name = listNameUpdate;
//     updatedList.description = listDescUpdate;
//     updatedLists.splice(targetListIndex, 1, updatedList);
//     setLists(updatedLists);
//   };

//   // const assertion to stop type inference as union type
//   return [
//     lists,
//     setLists,
//     handleAddAnime,
//     handleDeleteAnime,
//     isAnimeInList,
//     handleCreateList,
//     handleDeleteList,
//     handleEditList,
//   ] as const;
// };
