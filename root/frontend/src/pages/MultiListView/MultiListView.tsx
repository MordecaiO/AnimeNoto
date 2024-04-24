import "./MultiListView.css";
import { useNavigate } from "react-router-dom";
import { AnimeList } from "../../components/AnimeList/AnimeList";
import { AnimeListProps, ListsContextType } from "../../vite-env";
import CreateListModal from "../../components/CreateListModal/CreateListModal";
import "../../components/CreateListModal/CreateListModal.css";
import { useContext, useEffect, useState } from "react";
import { animeLists } from "./testDB";
import EditListModal from "../../components/EditListModal/EditListModal";
import { useAuth0 } from "@auth0/auth0-react";
import ListsContext from "../../ListsContext";

export default function MultiListView(): JSX.Element {
  const navigate = useNavigate();
  const [isOpen, setOpen] = useState(false);
  const [isEditing, setEditing] = useState(false);
  const [selectedList, setSelectedList] = useState(animeLists[0]);
  const { logout, isAuthenticated, user } = useAuth0();
  const { lists, getLists, setLists } = useContext(
    ListsContext
  ) as ListsContextType;
  useEffect(() => {
    let ignore = false;
    async function startFetching() {
      const fetchedLists = await getLists(user?.sub);
      console.log("fetched lists MLV", fetchedLists);
      if (!ignore) {
        setLists(fetchedLists);
        console.log("lists after state update MLV", lists);
      }
    }
    startFetching();
    return () => {
      ignore = true;
    };
  }, [user?.sub, lists.length]);

  return (
    <>
      {isOpen && <CreateListModal setOpen={setOpen} isOpen={isOpen} />}
      {isEditing && (
        <EditListModal
          isEditing={isEditing}
          setEditing={setEditing}
          selectedList={selectedList}
        />
      )}
      <div className="main">
        <header className="header">
          <nav className="navbar">
            <div className="navbar-left">
              <a className="logo-wrapper" href="/AnimeNoto">
                <img
                  className="anime-noto"
                  src="/AnimeNoto/animenoto_logo_main.jpeg"
                  alt="AnimeNoto Logo"
                ></img>
                <b className="logo-text">AnimeNoto</b>
              </a>
            </div>
            <div className="navbar-middle"></div>
            <div className="navbar-right">
              <button
                className="home-button"
                onClick={() => navigate("/search")}
              >
                Home
              </button>
              <a
                onClick={() =>
                  logout({
                    logoutParams: {
                      returnTo: "https://mordecaio.github.io/AnimeNoto/#",
                    },
                  })
                }
                className="logout-link"
              >
                Logout
              </a>
              <div className="user-icon-container">
                <svg
                  className="user-icon"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                {isAuthenticated && (
                  <span className="user tooltip"> {user?.email} </span>
                )}
              </div>
            </div>
          </nav>
        </header>
        <button className="add-button" onClick={() => setOpen(!isOpen)}>
          Create List
        </button>
        <section className="mlv-lists-container">
          {lists.map((list: AnimeListProps, index: number) => {
            return (
              <AnimeList
                key={index}
                list={list}
                isEditing={isEditing}
                setEditing={setEditing}
                setSelectedList={setSelectedList}
              />
            );
          })}
        </section>
      </div>
    </>
  );
}
