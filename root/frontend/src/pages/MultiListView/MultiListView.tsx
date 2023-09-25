import "./MultiListView.css";
import { Link } from "react-router-dom";
import { AnimeList } from "../../components/AnimeList/AnimeList";
import { animeLists } from "./testDB";

export default function MultiListView(): JSX.Element {
  return (
    <article>
      <Link to={"/"}>
        <button className="back-button">Home</button>
      </Link>
      <section className="mlv-header">
        <h2 className="mlv-title">Lists</h2>
      </section>
      <section className="mlv-lists-container">
        {animeLists.map((list, index) => {
          return (
            <Link
              className="mlv-link"
              to={`${list.name}`}
              state={{
                listItems: list.items,
                listName: list.name,
                listLastUpdated: list.lastUpdated,
                defaultList: list.defList,
              }}
            >
              <AnimeList
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
