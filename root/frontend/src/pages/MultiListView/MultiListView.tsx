import "./MultiListView.css";
import { useNavigate } from "react-router-dom";
import { AnimeList } from "../../components/AnimeList/AnimeList";
import { MultiListViewProps } from "../../vite-env";
import { AnimeListProps } from "../../vite-env";
import CreateListModal from "../../components/CreateListModal/CreateListModal";
import "../../components/CreateListModal/CreateListModal.css";
import { useState } from "react";
import { animeLists } from "./testDB";
import EditListModal from "../../components/EditListModal/EditListModal";
import { useAuth0 } from "@auth0/auth0-react";
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
  const { logout, isAuthenticated, user } = useAuth0();
  return (
    <>
      {isOpen && (
        <CreateListModal
          setOpen={setOpen}
          isOpen={isOpen}
          lists={lists}
          handleCreateList={handleCreateList}
        />
      )}
      {isEditing && (
        <EditListModal
          isEditing={isEditing}
          setEditing={setEditing}
          selectedList={selectedList}
          handleEditList={handleEditList}
          lists={lists}
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
              <button className="home-button" onClick={() => navigate("/")}>
                Home
              </button>
              <a
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
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
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
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
    </>
  );
}
