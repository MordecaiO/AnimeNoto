import "./DetailedListView.css";
import ListItem from "../../components/ListItem/ListItem";
import { AnimeProps, ListsContextType } from "../../vite-env";
import { useLocation, useNavigate } from "react-router-dom";
import { CollageImage } from "../../components/CollageImage/CollageImage";
import { useContext } from "react";
import ListsContext from "../../ListsContext";

function DetailedListView(): JSX.Element {
  const navigate = useNavigate();
  const location = useLocation();
  const { lists } = useContext(ListsContext) as ListsContextType;
  const currentList = lists.filter(
    (list) => list._id === location.state.listId
  )[0];
  console.log("current list", currentList);
  return (
    <div className="container">
      <button className="back-button" onClick={() => navigate(-1)}>
        Back to Lists
      </button>

      <div className="dlv-container">
        <header className="dlv-header">
          <div className="img-container">
            <CollageImage items={currentList.items} />
          </div>
          <section className="header-items">
            <p className="list-type"></p>
            <div className="details-container">
              <h1 className="list-name">{currentList.name}</h1>
              <p className="list-desc">{currentList.description}</p>
            </div>
            <p className="updated-text">{`Last updated: `}</p>
          </section>
        </header>
        <main className="list-items-container">
          {currentList.items ? (
            currentList.items.map((listitem: AnimeProps, i: number) => {
              return (
                <ListItem
                  key={i}
                  index={i}
                  src={listitem.images.jpg.image_url}
                  name={listitem.title}
                  status={listitem.status}
                  description={listitem.synopsis}
                  genres={listitem.genres}
                  anime={listitem}
                  listId={currentList._id}
                />
              );
            })
          ) : (
            <h2>Go back to the homepage and Add some Anime to this list!</h2>
          )}
        </main>
      </div>
    </div>
  );
}

export default DetailedListView;
