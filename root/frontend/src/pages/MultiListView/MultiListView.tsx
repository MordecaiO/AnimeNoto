import "./MultiListView.css";
import { Link, useNavigate } from "react-router-dom";
import { AnimeList } from "../../components/AnimeList/AnimeList";
import { MultiListViewProps } from "../../vite-env";
import { AnimeListProps } from "../../vite-env";
import CreateListModal from "../../components/CreateListModal/CreateListModal";
import "../../components/CreateListModal/CreateListModal.css";
import { useState } from "react";
export default function MultiListView({
  lists,
  handleCreateList,
  handleDeleteList,
  handleEditList,
}: MultiListViewProps): JSX.Element {
  const navigate = useNavigate();
  const [isOpen, setOpen] = useState(false);

  return (
    <article>
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

      <section className="mlv-header">
        <h2 className="mlv-title">Lists</h2>
      </section>
      <section className="mlv-lists-container">
        {lists.map((list: AnimeListProps, index: number) => {
          return (
            <AnimeList
              key={index}
              id={list.id}
              name={list.name}
              description={list.description}
              items={list.items}
              createdAt={list.createdAt}
              defList={list.defList}
              handleDeleteList={handleDeleteList}
              lists={lists}
            />
          );
        })}
      </section>
    </article>
  );
}
