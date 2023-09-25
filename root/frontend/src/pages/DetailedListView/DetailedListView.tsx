import "./DetailedListView.css";
import ListItem from "../../components/ListItem/ListItem";
import { AnimeProps } from "../../vite-env";
import { Link, useLocation } from "react-router-dom";

function DetailedListView(): JSX.Element {
  const { state } = useLocation();
  const d = new Date(state.lastUpdated).toDateString();
  return (
    <div className="container">
      <Link to={`/lists`}>
        <button className="back-button">Back to Lists</button>
      </Link>

      <div className="dlv-container">
        <header className="dlv-header">
          <div className="img-container">
            <img className="header_image"></img>
          </div>
          <section className="header-items">
            <p className="list-type">
              {state.defList ? "Default List" : "User List"}
            </p>
            <div className="details-container">
              <h1 className="list-name">{state.listName}</h1>
              <p className="list-desc">{state.listDescription}</p>
            </div>
            <p className="updated-text">{`Last updated: ${d}`}</p>
          </section>
        </header>
        <main className="list-items-container">
          {state?.listItems.map((listitem: AnimeProps, i: number) => {
            return (
              <ListItem
                index={i}
                src={listitem.images.jpg.image_url}
                name={listitem.title}
                status={listitem.status}
                description={listitem.synopsis}
                genres={listitem.genres}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}

export default DetailedListView;
