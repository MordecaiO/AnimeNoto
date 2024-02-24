import "./MultiListView.css";
import { Link, useNavigate } from "react-router-dom";
import { AnimeList } from "../../components/AnimeList/AnimeList";
import { MultiListViewProps } from "../../vite-env";
import { AnimeListProps } from "../../vite-env";
import CreateListModal from "../../components/CreateListModal/CreateListModal";
import "../../components/CreateListModal/CreateListModal.css";
import { useState } from "react";
import { animeLists } from "./testDB";
import EditListModal from "../../components/EditListModal/EditListModal";
export default function MultiListView({
  lists,
  handleCreateList,
  handleDeleteList,
  handleEditList,
}: MultiListViewProps): JSX.Element {
  const navigate = useNavigate();
  const [isOpen, setOpen] = useState(false);
  const [isEditing, setEditing] = useState(false);
  const [selectedList, setSelectedList] = useState(animeLists[0]);
  return (
    <div className="mlv-main">
      {isEditing && (
        <EditListModal
          isEditing={isEditing}
          setEditing={setEditing}
          selectedList={selectedList}
          handleEditList={handleEditList}
          lists={lists}
        />
      )}
      {isOpen && (
        <CreateListModal
          setOpen={setOpen}
          isOpen={isOpen}
          lists={lists}
          handleCreateList={handleCreateList}
        />
      )}
      <button className="back-button" onClick={() => navigate("/")}>
        Home
      </button>
      <button className="add-button" onClick={() => setOpen(!isOpen)}>
        Create List
      </button>

      <header className="mlv-header">
        <h2 className="mlv-title">Lists</h2>
      </header>
      <section className="mlv-lists-container">
        {lists.map((list: AnimeListProps, index: number) => {
          return (
            <AnimeList
              key={index}
              list={list}
              handleDeleteList={handleDeleteList}
              isEditing={isEditing}
              setEditing={setEditing}
              lists={lists}
              setSelectedList={setSelectedList}
            />
          );
        })}
      </section>
    </div>
  );
}
