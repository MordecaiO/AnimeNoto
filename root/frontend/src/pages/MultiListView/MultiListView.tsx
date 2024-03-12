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
  return (
    <div className="mlv main">
      {isEditing && (
        <EditListModal
          isEditing={isEditing}
          setEditing={setEditing}
          selectedList={selectedList}
          handleEditList={handleEditList}
          lists={lists}
        />
      )}
      {isOpen && (
        <CreateListModal
          setOpen={setOpen}
          isOpen={isOpen}
          lists={lists}
          handleCreateList={handleCreateList}
        />
      )}

      <header className="mlv-header">
        <nav className="navbar">
          <div className="navbar-left">
            <a className="logo-wrapper" href="/">
              <img
                className="anime-noto"
                src="../../animenoto_logo.png"
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
            <a className="login">Login</a>
            <a className="sign-up">Sign up</a>
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
  );
}
