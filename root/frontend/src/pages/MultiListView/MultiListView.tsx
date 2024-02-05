import "./MultiListView.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AnimeList } from "../../components/AnimeList/AnimeList";
import { MultiListViewProps } from "../../vite-env";

import { AnimeListProps } from "../../vite-env";

export default function MultiListView({
  lists,
}: MultiListViewProps): JSX.Element {
  const navigate = useNavigate();
  return (
    <article>
      <button className="back-button" onClick={() => navigate("/")}>
        Home
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
