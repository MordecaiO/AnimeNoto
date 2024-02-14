import "./DetailedListView.css";
import ListItem from "../../components/ListItem/ListItem";
import { AnimeProps } from "../../vite-env";
import { useLocation, useNavigate } from "react-router-dom";
import { DetailedListViewProps } from "../../vite-env";

function DetailedListView({
  lists,
  handleAddAnime,
  handleDeleteAnime,
  isAnimeInList,
}: DetailedListViewProps): JSX.Element {
  const navigate = useNavigate();
  let { state } = useLocation();
  // const d = new Date(state.lastUpdated).toDateString();
  return (
    <div className="container">
      <button className="back-button" onClick={() => navigate(-1)}>
        Back to Lists
      </button>

      <div className="dlv-container">
        <header className="dlv-header">
          <div className="img-container">
            <img className="header_image"></img>
          </div>
          <section className="header-items">
            <p className="list-type">
              {/* {state.defaultList ? "Default List" : "User List"} */}
            </p>
            <div className="details-container">
              <h1 className="list-name">{state.listName}</h1>
              <p className="list-desc">{state.listDescription}</p>
            </div>
            <p className="updated-text">{`Last updated: `}</p>
          </section>
        </header>
        <main className="list-items-container">
          {lists
            .filter((list) => list.id == state.listId)[0]
            .items!.map((listitem: AnimeProps, i: number) => {
              return (
                <ListItem
                  index={i}
                  src={listitem.images.jpg.image_url}
                  name={listitem.title}
                  status={listitem.status}
                  description={listitem.synopsis}
                  genres={listitem.genres}
                  lists={lists}
                  anime={listitem}
                  listId={state.listId}
                  handleDeleteAnime={handleDeleteAnime}
                  handleAddAnime={handleAddAnime}
                  isAnimeInList={isAnimeInList}
                />
              );
            })}
        </main>
      </div>
    </div>
  );
}

export default DetailedListView;
