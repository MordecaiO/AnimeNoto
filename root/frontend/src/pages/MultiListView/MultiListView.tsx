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
}: MultiListViewProps): JSX.Element {
  const navigate = useNavigate();
  const [isOpen, setOpen] = useState(false);

  return (
    <article>
      {isOpen && <CreateListModal setOpen={setOpen} isOpen={isOpen} />}
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
            <Link
              className="mlv-link"
              to={`${list.name}`}
              state={{
                listId: list.id,
                listItems: list.items,
                listName: list.name,
                listLastUpdated: list.lastUpdated,
                defaultList: list.defList,
              }}
            >
              <AnimeList
                key={index}
                id={index}
                name={list.name}
                description=""
                items={list.items}
                createdAt={null}
                defList={true}
              />
            </Link>
          );
        })}
      </section>
    </article>
  );
}
