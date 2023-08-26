import "./MultiListView.css";
import { TileItem } from "../TileItem/TileItem";
import { Link } from "react-router-dom";
import { userDoc } from "./testDB";

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
        {userDoc.lists.map((e) => {
          return (
            <Link
              className="mlv-link"
              /* FIXME: to={`${e.listName}`} */ to={`${e.listName}`}
              state={{ listDetails: e }}
            >
              <TileItem
                key={e.src}
                list={true}
                name={e.listName}
                items={e.listItems}
              />
            </Link>
          );
        })}
      </section>
    </article>
  );
}
