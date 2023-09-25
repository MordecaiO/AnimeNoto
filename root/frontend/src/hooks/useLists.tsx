import { useState } from "react";
import { AnimeListProps, AnimeProps } from "../vite-env";

export const useLists = (animeLists: AnimeListProps[]) => {
  const [lists, setLists] = useState(animeLists);

  const handleAddAnime = (
    targetList: AnimeListProps,
    targetAnime: AnimeProps,
    currentLists: AnimeListProps[]
  ): void => {
    console.log("lists before add function", lists);
    // shallow copy
    const updatedLists = [...currentLists];
    // find List we want to update
    const targetListId = targetList.id;
    const targetListIndex = updatedLists.findIndex(
      (x) => (x.id = targetListId)
    );
    //make copy of List
    const updatedList = { ...updatedLists[targetListIndex] };
    // make copy of Items in list
    // casting to arr of AnimeProps
    const updatedItems = [...(updatedList.items as AnimeProps[])];
    updatedItems.push(targetAnime);
    updatedList.items = updatedItems;
    updatedLists[targetListIndex] = updatedList;
    setLists(updatedLists);
    console.log("lists after add function", lists);
  };
  const handleDeleteAnime = (
    targetList: AnimeListProps,
    targetAnime: AnimeProps,
    currLists: AnimeListProps[]
  ): void => {
    console.log("lists before del function", lists);
    const updatedLists = [...currLists];
    const targetListId = targetList.id;
    const targetListIndex = updatedLists.findIndex((x) => x.id == targetListId);
    const updatedList = { ...updatedLists[targetListIndex] };
    const updatedItems = [...(updatedList.items as [])];
    const targetAnimeId = targetAnime.mal_id;
    const targetAnimeIndex = updatedItems.findIndex(
      (x: AnimeProps) => x.mal_id == targetAnimeId
    );
    updatedItems.splice(targetAnimeIndex, 1);
    updatedList.items = updatedItems;
    updatedLists[targetListIndex] = updatedList;
    setLists(updatedLists);
    console.log("lists after del function", lists);
  };
  const isAnimeInList = (
    targetAnime: AnimeProps,
    targetList: AnimeListProps
  ): boolean => {
    const targetAnimeId = targetAnime.mal_id;
    console.log("targetAnimeId", targetAnimeId);
    return targetList.items?.findIndex((x) => x.mal_id == targetAnimeId) != -1
      ? true
      : false;
  };

  // const assertion to stop type inference as union type
  return [lists, handleAddAnime, handleDeleteAnime, isAnimeInList] as const;
};
