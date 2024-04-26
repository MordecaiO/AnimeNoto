import { useContext, useEffect } from "react";
import { CreateListModalProps, ListsContextType } from "../../vite-env";
import "../CreateListModal/CreateListModal.css";
import { useAuth0 } from "@auth0/auth0-react";
import ListsContext from "../../ListsContext";
export default function CreateListModal({
  setOpen,
  isOpen,
}: CreateListModalProps): JSX.Element {
  const { user } = useAuth0();
  const { createList, getLists, setLists, lists } = useContext(
    ListsContext
  ) as ListsContextType;
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const target = event.currentTarget;
    const nameData = target.listName.value;
    const descData = target.listDesc.value;
    createList(user?.sub?.substring(6), nameData, descData);

    setOpen(false);
  };
  const startFetching = async () => {
    const fetchedLists = await getLists(user?.sub);

    setLists(fetchedLists);
  };

  return (
    <div className="modal-background">
      <div className="modal-container">
        <section className="modal">
          <button
            className="close-btn"
            onClick={() => {
              setOpen(!isOpen);
            }}
          >
            X
          </button>
          <h4 className="modal-header">New List</h4>
          <form
            className="modal-form"
            onSubmit={(e) => {
              handleSubmit(e);
              setTimeout(() => {
                startFetching();
              }, 200);
            }}
            autoComplete="off"
          >
            <div className="name-group">
              <label className="name-label">Name</label>
              <input
                className="name-input"
                placeholder="Add List Name"
                required={true}
                name="listName"
              ></input>
            </div>
            <div className="description-group">
              <label className="description-label">Description</label>
              <textarea
                className="description-input"
                placeholder="Add an optional description..."
                name="listDesc"
              ></textarea>
            </div>

            <div className="btn-container">
              <button
                className="save-btn"
                type="submit"
                name="submit"
                value="Save"
              >
                {" "}
                Save
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}
