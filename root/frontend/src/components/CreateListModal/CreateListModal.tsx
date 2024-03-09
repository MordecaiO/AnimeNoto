import { CreateListModalProps } from "../../vite-env";
import "../CreateListModal/CreateListModal.css";
export default function CreateListModal({
  setOpen,
  isOpen,
  lists,
  handleCreateList,
}: CreateListModalProps): JSX.Element {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const target = event.currentTarget;
    const nameData = target.listName.value;
    const descData = target.listDesc.value;
    //setFormData({ name: nameData, description: descData });
    console.log("descData", descData);
    console.log("nameData", nameData);
    handleCreateList(lists, nameData, descData);
    setOpen(false);
  };
  return (
    <div className="background">
      <div className="modal-container">
        <section className="modal">
          <button className="close-btn" onClick={() => setOpen(!isOpen)}>
            X
          </button>
          <h4 className="modal-header">New List</h4>
          <form className="modal-form" onSubmit={(e) => handleSubmit(e)}>
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
